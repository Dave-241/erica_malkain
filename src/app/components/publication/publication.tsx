"use client";

import {
  Bt_Beau_Regualr,
  Helvetica_bold,
  Helvetica_light,
  Helvetica_medium,
} from "@/app/utils/fonts";
import React, { useEffect, useRef, useState } from "react";
import Edit_each_publication from "./edit_each_publication";
import Add_publication from "./add_publication";
import Delete_publication from "./delete_publication";
import Link from "next/link";
import Modal_add_publication from "./modal_add_publication";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/utils/supabaseClient";

const Publication = ({ product_data }: any) => {
  const [data, setdata] = useState<any[]>(product_data ? product_data : []);
  const [start_anime, setstart_anime] = useState(false);
  const [isloggedin, setisloggedin] = useState(false);
  const [delete_publication, setdelete_publication] = useState(false);
  const [publication_title, setpublication_title] = useState("");
  const [publication_body, setpublication_body] = useState("");
  const [publication_data_link, setpublication_data_link] = useState("");
  const [publication_pdf_link, setpublication_pdf_link] = useState(" ");
  const [add_publication, setadd_publication] = useState(false);
  const [edit_ID, setedit_ID] = useState("");
  const [image_link, setimage_link] = useState("");

  useEffect(() => {
    setstart_anime(true);
  }, []);

  const itemsRefs = useRef<any>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("comeup");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 },
    );

    itemsRefs.current.forEach((ref: any) => {
      observer.observe(ref);
    });

    return () => {
      itemsRefs.current.forEach((ref: any) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  const router = useRouter();

  // check if logged in
  useEffect(() => {
    // Check initial session
    const checkInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setisloggedin(true);
      }
    };

    checkInitialSession();
  }, [router]);

  const edit_each_publication_modal_param = (
    title: any,
    body: any,
    view_data: any,
    pdf_link: any,
    id: any,
    img: any,
  ) => {
    setpublication_title(title);
    setpublication_body(body);
    setpublication_data_link(view_data);
    setpublication_pdf_link(pdf_link);
    setadd_publication(true);
    setedit_ID(id);
    setimage_link(img);
  };

  const refresh_all_params = () => {
    setpublication_title("");
    setpublication_body("");
    setpublication_data_link("");
    setpublication_pdf_link("");
    setadd_publication(true);
    setedit_ID("");
    setimage_link("");
  };

  // this is to implement tracking
  // Set up real-time subscription
  useEffect(() => {
    const fetchInitialData = async () => {
      const { data, error } = await supabase
        .from("publication")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching initial data:", error);
      } else {
        setdata(data);
      }
    };

    fetchInitialData();

    // Real-time subscription
    const handleInserts = (payload: any) => {
      console.log("Insert received!", payload);
      window.location.reload();
    };

    const handleUpdates = (payload: any) => {
      console.log("Update received!", payload);
      setdata((prevData) =>
        prevData.map((item) =>
          item.id === payload.new.id ? payload.new : item,
        ),
      );
    };

    const handleDeletes = (payload: any) => {
      console.log("Delete received!", payload);
      setdata((prevData) =>
        prevData.filter((item) => item.id !== payload.old.id),
      );
    };

    const subscription = supabase
      .channel("publication_channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "publication" },
        handleInserts,
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "publication" },
        handleUpdates,
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "publication" },
        handleDeletes,
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return (
    <>
      {/* add publication */}
      {isloggedin && (
        <Add_publication
          refresh_all_params={refresh_all_params}
          setpublication_title={setpublication_title}
          setdelete_publication={setdelete_publication}
        />
      )}

      {/* modal to add publications */}
      {add_publication && (
        <Modal_add_publication
          setadd_publdcication={setadd_publication}
          publication_title={publication_title}
          publication_body={publication_body}
          publication_data_link={publication_data_link}
          publication_pdf_link={publication_pdf_link}
          setpublication_title={setpublication_title}
          setpublication_body={setpublication_body}
          setpublication_data_link={setpublication_data_link}
          setpublication_pdf_link={setpublication_pdf_link}
          edit_ID={edit_ID}
          image_link={image_link}
          setimage_link={setimage_link}
        />
      )}

      <div className="w-full py-[10vw]  md:py-[5vw]  px-[3%]  md:px-[10%]">
        <div className=" w-full flex flex-col md:gap-[1.5vw] gap-[5vw]">
          {data.map((e: any, index: any) => {
            // Extract the text after the period
            // Extract text before and after the period
            const titleBeforePeriod = e.title
              .split(".")
              .slice(0, 1)
              .join(".")
              .trim();
            const titleAfterPeriod = e.title
              .split(".")
              .slice(1)
              .join(".")
              .trim();

            // Extract the year using regex
            const yearMatch = e.description.match(/\((\d{4})\)/);
            const year = yearMatch ? yearMatch[1] : ""; // Get the year or set it to an empty string

            // Remove the year from the e.description
            const citationWithoutYear = e.description
              .replace(/\s*\(\d{4}\)\.\s*/, "")
              .trim();
            return (
              <>
                <div
                  ref={(ref) => {
                    if (ref) {
                      itemsRefs.current[index] = ref;
                    }
                  }}
                  key={index}
                  className="w-full initial px-[4%] py-[8%] rounded-[5vw] md:flex-row flex-col  flex md:justify-between md:rounded-[1vw] md:px-[3vw] relative md:py-[1.5vw] bg-[#FEFAFA] bg-opacity-[62%] md:gap-[1vw] gap-[4vw] md:items-center"
                >
                  {isloggedin && (
                    <Edit_each_publication
                      setpublication_title={setpublication_title}
                      setdelete_publication={setdelete_publication}
                      edit_each_publication_modal_param={
                        edit_each_publication_modal_param
                      }
                      title={e.title}
                      body={e.description}
                      view_data={e.data_link}
                      pdf_data={e.pdf_link}
                      id={e.id}
                      img={e.image_link}
                      setadd_publdcication={setadd_publication}
                    />
                  )}
                  {/* the first section */}
                  <div className="flex flex-col gap-[2vw] md:w-[50%] md:gap-[0.5vw]">
                    <h2
                      //   ref={hero_ref}
                      className={`${Helvetica_bold.className} text-[5vw] leading-[6vw] md:text-[1.3vw] md:leading-[2vw] uppercase text-[#440C0C]`}
                    >
                      {titleBeforePeriod}{" "}
                      {/* Only shows text before the period */} <br />
                      {/* Display the text after the period in a span */}
                      {titleAfterPeriod && (
                        <span className="text-[#440C0C] md:text-[1vw] text-[4vw] opacity-[50%]">
                          {year} | {titleAfterPeriod}
                        </span>
                      )}
                    </h2>

                    <p
                      className={`${Helvetica_light.className} md:text-[1.1vw] md:leading-[1.5vw] text-[4vw] leading-[5vw] text-[#a46035]`}
                    >
                      {citationWithoutYear
                        .split("Boothby, E. J")
                        .map((part: string, index: number) => (
                          <React.Fragment key={index}>
                            {part}
                            {index <
                              e.description.split("Boothby, E. J").length -
                                1 && (
                              <strong
                                className={`${Helvetica_bold.className} text-[#440c0ccb]`}
                              >
                                Boothby, E. J
                              </strong>
                            )}
                          </React.Fragment>
                        ))}{" "}
                    </p>
                  </div>

                  <div
                    className={`${Bt_Beau_Regualr.className} md:text-[1vw] gap-[4vw] text-[3.5vw] flex capitalize md:gap-[1vw]  items-center`}
                  >
                    {e.data_link && (
                      <Link
                        target="_blank"
                        href={`${e.data_link}`}
                        className=" md:rounded-[1.7vw] border-[#440C0C] border-[0.1vw]  bg-[#FEF6F6] flex justify-center items-center md:py-[0.8vw] md:px-[2vw] px-[6vw] py-[3vw] text-[#440C0C]  hover:bg-[white] rounded-[7vw]"
                      >
                        DATA
                      </Link>
                    )}{" "}
                    <Link
                      target="_blank"
                      href={`${e.pdf_link}`}
                      className=" md:rounded-[1.7vw] border-[#440C0C]   md:border-[0.1vw] bg-[#440C0C] flex justify-center items-center md:py-[0.8vw] md:px-[2vw]  px-[6vw] py-[3vw] text-white hover:bg-[#C1A391] hover:border-[#C1A391] rounded-[7vw]"
                    >
                      PDF
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Publication;
