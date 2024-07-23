"use client";

import { spline_font } from "@/app/utils/fonts";
import hero from "../../../../public/images/consultation/hero.webp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const Teaching_hero = () => {
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
    offset: ["end start", "end 110%"],
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
        className="w-full h-[180vw] p-[2%]  md:h-[53vw] md:px-[2vw] md:py-[1vw]"
      >
        <div className="h-full w-full overflow-hidden md:px-[5vw] md:py-[8vw] items-end flex md:rounded-[1vw] rounded-[5vw] pb-[10vw] px-[6vw]  bg-[grey] relative">
          <div className="overflow-hidden  z-[10]">
            <h1
              style={{
                transition: "0.5s ease",
                //   opacity: start_anime ? 1 : 0,
                transform: start_anime
                  ? "translate(0,0)"
                  : "translate(0%,100%)",
              }}
              className={`${spline_font.className} font-semibold md:text-[4vw] text-[#DFE4DF]  md:leading-[4.1vw] text-[10vw] leading-[11vw] z-[10] md:w-[60vw]`}
            >
              TEACHING / TRAINING / CONSULTING
            </h1>
          </div>
          <Image
            src={hero}
            alt="hero image"
            className="w-full h-fit absolute md:top-0 md:left-0 top-[50%] translate-x-[-50%] translate-y-[-50%]  md:translate-x-0 md:translate-y-0 left-[50%] md:scale-[1]  scale-[3.5] "
            style={{
              transition: yvalue > 1 ? "" : "0.45s ease",
              opacity: start_anime ? 1 : 0,
              scale: calWidth < 768 ? "" : start_anime ? yvalue : 1.8,
            }}
          />
          <div className="w-full h-full left-0 top-0 absolute bg-black md:bg-opacity-[43%] bg-opacity-[10%]"></div>
        </div>
      </div>
      <div className="w-full md:h-[8vw] h-[15vw]"></div>
    </>
  );
};

export default Teaching_hero;
