"use client";

import { eb_gramond_font, spline_font } from "@/app/utils/fonts";
import hero from "../../../../public/images/media/hero.webp";
import dp from "../../../../public/images/media/dp.webp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const Media_hero = () => {
  // this is to calculate for the width

  const [calWidth, setCalWidth] = useState(0);
  const width = globalThis.innerWidth;
  const handleResize = () => {
    setCalWidth(globalThis.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Initial call to set the width on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  useEffect(() => {
    handleResize();
  }, [width]);
  const [start_anime, setstart_anime] = useState(false);
  useEffect(() => {
    setstart_anime(true);
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "end 130%"],
  });
  const [yvalue, setyvalue] = useState(0);

  const y = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  useMotionValueEvent(y, "change", (latest) => {
    setyvalue(latest);
  });
  return (
    <>
      <div
        ref={ref}
        className="w-full flex justify-center items-center pt-[30vw]   md:px-[2vw] flex-col md:py-[8vw] relative gap-[10vw] md:gap-[2vw]"
      >
        <div className="overflow-hidden z-[10]">
          <h1
            style={{
              transition: "0.5s ease",
              //   opacity: start_anime ? 1 : 0,
              transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
            }}
            className={`${spline_font.className} font-bold md:text-[8vw] text-[#DFE4DF]  md:leading-[8.5vw] z-[10] text-center text-[15vw] leading-[16.5vw]`}
          >
            MEDIA COVERAGE
          </h1>
        </div>
        {/* the woman image */}
        <div
          style={{
            transition: "0.5s ease",
            opacity: start_anime ? 1 : 0,
            scale: start_anime ? 1 : 0.5,
          }}
          className=" relative bg-[#A58D90] rounded-[30vw] md:rounded-[11vw] h-[80vw]  w-[60vw] md:h-[30vw] md:w-[22.8vw] z-[10] overflow-hidden"
        >
          {" "}
          <Image
            src={dp}
            alt="hero image"
            className="w-full h-fit absolute  translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]  z-[10]"
            style={{
              transition: yvalue > 1 ? "" : "0.45s ease",
              transform: `translateY(-50%) translateX(-50%) scale(${
                calWidth < 768 ? "" : start_anime ? yvalue : 1.8
              })`,
              //   scale: start_anime ? yvalue : 1.8,
            }}
          />
        </div>

        <div className="overflow-hidden">
          <p
            style={{
              transition: "0.5s ease",
              //   opacity: start_anime ? 1 : 0,
              transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
            }}
            className={`md:text-[1.5vw] ${eb_gramond_font.className} font-bold text-center md:leading-[2vw]`}
          >
            SPEECHES . INTERVIEW <br />
            LECTURE . PRINTS
          </p>
        </div>
        <div className="md:h-[51%] h-[62.5%] w-[97%] rounded-[5vw]   md:w-[96vw] overflow-hidden  md:rounded-[1vw]   bg-[#a58d90c4] absolute md:top-[1vw] top-[2vw] left-[50%] translate-x-[-50%]">
          <div className="w-full h-full    bg-black relative">
            <Image
              src={hero}
              alt="hero image"
              className="w-full h-fit   absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]"
              style={{
                transition: yvalue > 1 ? "" : "0.45s ease",
                transform: `translateX(-50%) translateY(-50%) scale(${
                  calWidth < 768 ? "3.2" : start_anime ? yvalue : 1.8
                }) `,
                // scale: ,
              }}
            />
          </div>
          <div className="w-full h-full left-0 top-0 absolute bg-[#27070E] bg-opacity-[50%]"></div>
        </div>
      </div>
      <div className="w-full md:h-[8vw]"></div>
    </>
  );
};

export default Media_hero;
