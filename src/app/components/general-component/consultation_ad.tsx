"use client";

import { Helvetica_light, spline_font } from "@/app/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import banner from "../../../../public/images/consultation/banner.webp";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Edit_text from "./edit_text";
import Modal_text_edit from "./modal_text_edit";
import { supabase } from "@/app/utils/supabaseClient";
import { useRouter } from "next/navigation";
import Modal_img_edit from "./modal_img_edit";
import Edit_img from "./edit_img";

const Consulation_advert = ({ user_data }: any) => {
  //   this is to handle scrolling
  const ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref,
    offset: ["0% 0%", "100% end"], // Start when the container starts entering, end when the entire container is in the viewport
  });
  const [bg_img, setbg_img] = useState(1.1);

  const bg_img_value = useTransform(scrollYProgress1, [0, 1], [1.1, 1]);
  useMotionValueEvent(bg_img_value, "change", (latest) => {
    setbg_img(latest);
  });

  const [isloggedin, setisloggedin] = useState(false);
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
  // this is for tracking
  useEffect(() => {
    const fetchInitialData = async () => {
      const { data, error } = await supabase
        .from("about")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching initial data:", error);
      } else {
        setactive_user_data(data);
      }
    };

    fetchInitialData();

    // Real-time subscription
    const handleInserts = (payload: any) => {
      console.log("Insert received!", payload);
      // window.location.reload();
    };

    const handleUpdates = (payload: any) => {
      console.log("Update received!", payload);
      setactive_user_data((prevData: any) =>
        prevData.map((item: any) =>
          item.id === payload.new.id ? payload.new : item,
        ),
      );
      fetchInitialData();
    };

    const handleDeletes = (payload: any) => {
      console.log("Delete received!", payload);
      setactive_user_data((prevData: any) =>
        prevData.filter((item: any) => item.id !== payload.old.id),
      );
      fetchInitialData();
    };

    const subscription = supabase
      .channel("about_channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "about" },
        handleInserts,
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "about" },
        handleUpdates,
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "about" },
        handleDeletes,
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);
  const [active_user_data, setactive_user_data] = useState(user_data);

  const [edit_text, setedit_text] = useState(false);
  const [record_Name, setrecord_Name] = useState("");
  const [edit_img, setedit_img] = useState(false);

  return (
    <>
      {edit_text && (
        <Modal_text_edit
          edit_text={edit_text}
          record_Name={record_Name}
          setedit_text={setedit_text}
          table={"about"}
        />
      )}
      {/* for the image editing */}
      {edit_img && (
        <Modal_img_edit
          edit_img={edit_img}
          record_Name={record_Name}
          setedit_img={setedit_img}
          table={"about"}
        />
      )}
      <div
        ref={ref}
        className="w-full py-[15vw]   md:py-[10vw] flex px-[5%]  justify-center items-center"
      >
        <div className="md:w-[90vw]   rounded-[5vw]   overflow-hidden md:rounded-[1.5vw] flex md:flex-row flex-col">
          <div className="md:w-[50%] w-full overflow-hidden bg-white md:h-auto h-[75vw]    relative ">
            {isloggedin && (
              <Edit_img
                record={"footer_banner"}
                setedit_img={setedit_img}
                setrecord_Name={setrecord_Name}
                text={active_user_data[0].footer_banner}
              />
            )}

            <Image
              src={active_user_data[0].footer_banner}
              unoptimized
              width="0"
              height="0"
              alt="banner image"
              className="w-full h-fit absolute_center absolute"
              style={{ scale: bg_img, transition: "0.2s ease" }}
            />
          </div>
          <div className="md:w-[50%]  w-full  bg-[#440C0C] md:px-[5%] px-[5%] py-[10vw] md:py-[4vw] gap-[5vw] h-full  md:h-full  flex flex-col justify-center md:gap-[2vw] items-center">
            <h4
              className={`text-white ${spline_font.className} text-[6vw] leading-[6.5vw] uppercase  relative md:leading-[2.4vw] font-bold md:text-[2vw]`}
            >
              {isloggedin && (
                <Edit_text
                  record={"footer_heading"}
                  setedit_text={setedit_text}
                  setrecord_Name={setrecord_Name}
                  text={active_user_data[0].footer_heading}
                />
              )}
              {active_user_data[0].footer_heading || "LOADING ..."}
            </h4>

            <p
              className={`text-white relative md:text-[1vw] text-[3.5vw] ${Helvetica_light.className}`}
            >
              {isloggedin && (
                <Edit_text
                  record={"footer_body"}
                  setedit_text={setedit_text}
                  setrecord_Name={setrecord_Name}
                  text={active_user_data[0].footer_body}
                />
              )}
              {active_user_data[0].footer_body || "LOADING ..."}
            </p>
            <div className="flex w-full">
              <Link
                style={{
                  whiteSpace: "nowrap",
                  // transition: "0.9s ease",
                  // transform: start_anime ? "translate(0,0)" : "translate(0%,80%)",
                }}
                href={"/"}
                className={` ${Helvetica_light.className} uppercase overflow-hidden  md:p-[0.5vw] p-[2vw] rounded-[8vw] group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[2vw] bg-[white] backdrop-blur-2xl bg-opacity-[20%] `}
              >
                <div className="w-full h-full bg-[white] group-hover:bg-[#103210] md:rounded-[1.7vw] rounded-[7vw] flex justify-center items-center py-[2.5vw] px-[8vw]  md:py-[0.7vw] md:px-[1.5vw]">
                  <p className="inline-block md:text-[1vw] text-[#440C0C] text-[3.5vw] group-hover:text-white">
                    see all
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consulation_advert;
