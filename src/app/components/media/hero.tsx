"use client";

import { eb_gramond_font, spline_font } from "@/app/utils/fonts";
import hero from "../../../../public/images/media/hero.webp";
import dp from "../../../../public/images/media/dp.webp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const Media_hero = () => {
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
        className="w-full md:flex justify-center items-center hidden   md:px-[2vw] flex-col md:py-[8vw] relative  md:gap-[2vw]"
      >
        <div className="overflow-hidden z-[10]">
          <h1
            style={{
              transition: "0.5s ease",
              //   opacity: start_anime ? 1 : 0,
              transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
            }}
            className={`${spline_font.className} font-bold md:text-[8vw] text-[#DFE4DF]  md:leading-[8.5vw] z-[10]`}
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
          className=" relative bg-[#A58D90] md:rounded-[11vw] bg md:h-[30vw] md:w-[22.8vw] z-[10] overflow-hidden"
        >
          {" "}
          <Image
            src={dp}
            alt="hero image"
            className="w-full h-fit absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]  z-[10]"
            style={{
              transition: yvalue > 1 ? "" : "0.45s ease",
              transform: `translateY(-50%) translateX(-50%) scale(${
                start_anime ? yvalue : 1.8
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
        <div className="h-[51%] md:w-[96vw] overflow-hidden  md:rounded-[1vw]   bg-[#A58D90] absolute md:top-[1vw] left-[50%] translate-x-[-50%]">
          <div className="w-full h-full   relative">
            <Image
              src={hero}
              alt="hero image"
              className="w-full h-fit absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]"
              style={{
                transition: yvalue > 1 ? "" : "0.45s ease",
                transform: "translateX(-50%) translateY(-50%) ",
                scale: start_anime ? yvalue : 1.8,
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
