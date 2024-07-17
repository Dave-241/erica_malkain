"use client";

import Image from "next/image";

import bg_1 from "../../../../public/images/home/hero.webp";
import quote from "../../../../public/images/home/quote.png";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Helvetica_light,
  Helvetica_medium,
  spline_font,
} from "@/app/utils/fonts";
const Reviews = () => {
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

  return (
    <>
      <div className="   px-[3vw] sm:px-0 md:my-[10vw]  flex flex-col md:gap-[3.5vw]  items-center">
        <h2
          className={` text-center text-[5vw] uppercase ${spline_font.className} font-medium md:text-[5.3vw] text-[#5C3C43] `}
        >
          WHAT PEOPLE SAY ABOUT ERICA{" "}
        </h2>

        <div className=" w-full  overflow-hidden md:h-[35vw]  relative   ">
          <div
            ref={ref}
            className={`absolute top-[50%] translate-y-[-50%]  md:h-full overflow-hidden left-0  w-auto   sm:px-[3vw] h-full flex md:gap-[2vw] `}
            style={{
              //   transform:
              //     windowWidth && windowWidth <= 650
              //       ? `translateX(-${current_index * 82}vw)`
              //       : "none",
              transition: "1s ease",
            }}
          >
            {items.map((e: any, index: any) => {
              return (
                <div
                  // ref={itemRefs[index]}
                  data-index={index}
                  key={index}
                  className="relative h-full md:rounded-[2vw]   md:h-[80%]  md:w-[22vw] md:gap-[2vw] group sm:flex sm:items-end "
                >
                  <Image
                    src={e.top_img}
                    alt={e.title}
                    style={{ transition: "1s ease" }}
                    className="w-full h-full absolute md:rounded-[2vw]   z-[0] left-0    top-0    "
                  />
                  <div
                    className={` md:h-full md:rounded-[2vw]  ${
                      animate_modal == index ? "h-[75%]" : "h-full"
                    }  cursor-pointer rounded-[1.5vw] md:px-[1.5vw] md:py-[2.5vw] group-hover:translate-y-[20%] group-hover:rotate-[5deg] py-[6vw] px-[4vw] flex flex-col justify-between md:gap-[4vw]  relative  w-full h-full main_item `}
                    style={{
                      backgroundColor: "#4F0A19",
                      transition: "1s ease",
                    }}
                  >
                    <div className="flex flex-col">
                      <h2
                        className={` text-white  ${Helvetica_light.className} md:text-[1.3vw]`}
                      >
                        {e.title}
                      </h2>

                      <p
                        className={` text-white  ${Helvetica_light.className} md:text-[1.1vw] text-opacity-[60%]`}
                      >
                        {e.postion}
                      </p>
                    </div>

                    <div className="flex flex-col md:gap-[3vw]">
                      <Image
                        src={quote}
                        alt={"quote"}
                        // style={{ transition: "1s ease" }}
                        className="md:w-[2.5vw] h-fit  "
                      />
                      <p
                        className={` ${Helvetica_light.className} md:text-[1vw]  text-white `}
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

        {/* <div
          className={` w-full hidden   sm:flex justify-center sm:gap-[6vw] gap-[2vw] items-center`}
        >
          <Image
            src={prev_works}
            onClick={() => {
              if (current_index <= 0) {
                return;
              }
              setcurrent_index(current_index - 1);
            }}
            alt="prev "
            className="sm:w-[11vw] w-[2.9vw] hover:cursor-pointer  h-fit"
          />
          <Image
            src={next_works}
            onClick={() => {
              if (current_index >= items.length - 1) {
                return;
              }
              setcurrent_index(current_index + 1);
              console.log(current_index);
            }}
            alt="next "
            className="sm:w-[11vw] w-[2.9vw] hover:cursor-pointer  h-fit"
          />
        </div> */}
      </div>
    </>
  );
};

export default Reviews;
