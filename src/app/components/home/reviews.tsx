"use client";

import Image from "next/image";

import bg_1 from "../../../../public/images/home/hero.webp";
import quote from "../../../../public/images/home/quote.png";
import next_img from "../../../../public/images/home/next.webp";
import prev_img from "../../../../public/images/home/prev.webp";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Helvetica_light,
  Helvetica_medium,
  spline_font,
} from "@/app/utils/fonts";
import { supabase } from "@/app/utils/supabaseClient";
import { useRouter } from "next/navigation";
import Edit_each_review from "./edit_each_review";
import Modal_edit_reiview from "./modal_edit_review";
const Reviews = ({ product_data }: any) => {
  const items = [
    {
      title: "Jason Jhay",
      top_img: bg_1,

      postion: "Harvard grad student",
      body: "Elevate your medical brand's online presence with our expert web design services tailored for healthcare companies.",
    },
    {
      title: "Jason Jhay",
      top_img: bg_1,
      postion: "Harvard grad student",
      body: "Get ranked higher on google and other search engines medical practice's visibility with our specialized SEO services",
    },
    {
      title: "Jason Jhay",
      top_img: bg_1,
      postion: "Harvard grad student",
      body: "Elevate the patient experience by securely establishing a digital based platform for them to access health records, schedule appointments, and enhance communication.",
    },
    {
      title: "Jason Jhay",
      top_img: bg_1,
      postion: "Harvard grad student",
      body: "Creating state-of-the-art medical software  from intuitive patient management to  scalable mobile apps, for both healthcare professionals and patients.",
    },

    {
      title: "Jason Jhay",
      top_img: bg_1,
      postion: "Harvard grad student",
      body: "Get ranked higher on google and other search engines medical practice's visibility with our specialized SEO services",
    },
    {
      title: "Jason Jhay",
      top_img: bg_1,
      postion: "Harvard grad student",
      body: "Elevate the patient experience by securely establishing a digital based platform for them to access health records, schedule appointments, and enhance communication.",
    },
    {
      title: "Jason Jhay",
      top_img: bg_1,
      postion: "Harvard grad student",
      body: "Creating state-of-the-art medical software  from intuitive patient management to  scalable mobile apps, for both healthcare professionals and patients.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setanimate_modal(current_index);
      }, 500);
      // console.log(isInView);
    } else if (isInView == false) {
      setanimate_modal(1000);
    }
  }, [isInView]);
  const [current_index, setcurrent_index] = useState(0);
  const [animate_modal, setanimate_modal] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => {
      setanimate_modal(current_index);
    }, 500);
  }, [current_index]);

  const [windowWidth, setWindowWidth] = useState<any>(null);

  useEffect(() => {
    setWindowWidth(globalThis.innerWidth);
    const handleResize = () => setWindowWidth(globalThis.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTranslateX(translateX + 100 / items.length); // Adjust 100 to your container width
    }
  };

  const handleRightClick = () => {
    if (currentIndex < items.length - 4) {
      // Adjust based on the number of items you want to show at once
      setCurrentIndex(currentIndex + 1);
      setTranslateX(translateX - 100 / items.length); // Adjust 100 to your container width
    }
  };
  // THIS IS FOR DETERMINING THE WIDTH OF THE SCREEN
  // THIS IS FOR DETERMINING THE WIDTH OF THE SCREEN
  // THIS IS FOR DETERMINING THE WIDTH OF THE SCREEN
  // THIS IS FOR DETERMINING THE WIDTH OF THE SCREEN
  // THIS IS FOR DETERMINING THE WIDTH OF THE SCREEN
  const width = globalThis.innerWidth;
  useEffect(() => {
    setcalwidth(width);
  }, [width]);
  const handleResize = () => {
    setcalwidth(globalThis.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Initial call to set the width on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  const [calwidth, setcalwidth] = useState(0);

  // THIS IS FOR THE CMS LOGIC WHICH INCLUDES LOGGING AND TRACKING UPDATE DETAILS
  const [data, setdata] = useState(product_data);

  // this is to implement tracking
  // Set up real-time subscription
  useEffect(() => {
    const fetchInitialData = async () => {
      const { data, error } = await supabase
        .from("review")
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
      setdata((prevData: any) =>
        prevData.map((item: any) =>
          item.id === payload.new.id ? payload.new : item,
        ),
      );
    };

    const handleDeletes = (payload: any) => {
      console.log("Delete received!", payload);
      setdata((prevData: any) =>
        prevData.filter((item: any) => item.id !== payload.old.id),
      );
    };

    const subscription = supabase
      .channel("review_channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "review" },
        handleInserts,
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "review" },
        handleUpdates,
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "review" },
        handleDeletes,
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  // THE CMS LOGIC STARTS FROM HERE
  const [open_edit, setopen_edit] = useState(false);
  const [isloggedin, setisloggedin] = useState(false);
  const [edit_ID, setedit_ID] = useState<any>(1);
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
  return (
    <>
      {open_edit && (
        <Modal_edit_reiview edit_ID={edit_ID} setopen_edit={setopen_edit} />
      )}
      <div className=" gap-[10vw]  md:py-0 pt-[20vw] pb-[4vw]  md:mt-[10vw]  flex flex-col md:gap-[3.5vw]  items-center">
        <h2
          className={` text-center  uppercase ${spline_font.className} font-medium md:text-[5.3vw] text-[9vw] leading-[10vw] md:leading-[6vw]  text-[#5C3C43] `}
        >
          WHAT PEOPLE SAY ABOUT ERICA{" "}
        </h2>

        <div className=" w-full md:overflow-hidden  h-[120vw] md:h-[35vw]  relative   ">
          <div
            ref={ref}
            className={`md:absolute md:top-[50%] md:translate-y-[-50%]  md:h-full md:overflow-hidden overflow-x-auto overflow-y-hidden left-0  w-auto   md:px-[3vw] px-[3%] h-full gap-[5vw]  flex md:gap-[2vw]  snap-x snap-mandatory md:snap-none`}
            style={{
              transform:
                calwidth < 760
                  ? ""
                  : `translateX(${translateX}%) translateY(-50%)`,
              transition: "0.7s ease",
            }}
          >
            {items.map((e: any, index: any) => {
              return (
                <div
                  // ref={itemRefs[index]}
                  data-index={index}
                  key={index}
                  className={` relative  flex-none md:flex-auto h-[100vw] bg-black md:rounded-[2vw] rounded-[5vw] snap-center md:h-[80%]  md:w-[22vw] w-[75vw] md:gap-[2vw] ${
                    !isloggedin ? "group" : ""
                  }  flex items-end `}
                >
                  {isloggedin && (
                    <Edit_each_review
                      setopen_edit={setopen_edit}
                      id={e.id}
                      setedit_ID={setedit_ID}
                    />
                  )}
                  {/* <Image
                    src={e.top_img}
                    alt={e.title}
                    style={{ transition: "1s ease" }}
                    className="w-full h-full absolute md:rounded-[2vw]   z-[0] left-0    top-0    "
                  /> */}
                  <div
                    className={` md:h-full md:rounded-[2vw]  ${
                      animate_modal == index ? "h-[75%]" : "h-full"
                    }  cursor-pointer md:rounded-[1.5vw] rounded-[5vw] md:px-[1.5vw] md:py-[2.5vw] group-hover:md:translate-y-[20%] group-hover:translate-y-[12%] group-hover:rotate-[5deg] py-[6vw] px-[4vw] flex flex-col justify-between md:gap-[4vw]  relative  w-full h-full main_item `}
                    style={{
                      backgroundColor: "#4F0A19",
                      transition: "1s ease",
                    }}
                  >
                    <div className="flex flex-col">
                      <h2
                        className={` text-white  ${Helvetica_light.className} md:text-[1.3vw] text-[6vw]`}
                      >
                        {e.title}
                      </h2>

                      <p
                        className={` text-white  ${Helvetica_light.className} md:text-[1.1vw] text-[4vw] text-opacity-[60%]`}
                      >
                        {e.postion}
                      </p>
                    </div>

                    <div className="flex flex-col gap-[5vw] md:gap-[3vw]">
                      <Image
                        src={quote}
                        alt={"quote"}
                        // style={{ transition: "1s ease" }}
                        className="md:w-[2.5vw] w-[10vw] h-fit  "
                      />
                      <p
                        className={` ${Helvetica_light.className} md:text-[1vw]  text-white text-[3.5vw] md:leading-[1.4vw] leading-[4.5vw] `}
                      >
                        {e.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={` w-full  md:mt-[-3vw] mt-[-10vw] md:flex hidden     md:mb-[3vw]  justify-center md:gap-[3vw] gap-[2vw] items-center`}
        >
          <Image
            src={prev_img}
            onClick={handleLeftClick}
            alt="prev "
            className="md:w-[3vw] w-[2.9vw] hover:cursor-pointer  h-fit"
          />
          <Image
            src={next_img}
            onClick={handleRightClick}
            alt="next "
            className="md:w-[3vw] w-[2.9vw] hover:cursor-pointer  h-fit"
          />
        </div>
      </div>
    </>
  );
};

export default Reviews;
