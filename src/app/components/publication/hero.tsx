"use client";

import { spline_font } from "@/app/utils/fonts";
import { useEffect, useState } from "react";

const Publication_hero = () => {
  const [start_anime, setstart_anime] = useState(false);

  useEffect(() => {
    setstart_anime(true);
  }, []);
  return (
    <>
      <div className="w-full md:h-[3vw] h-[5vw] "></div>
      <div
        className={` ${spline_font.className}  font-bold w-full flex md:leading-[7.6vw] text-[12vw] min-h-[40vw] leading-[13vw] relative items-center px-[3%]  md:px-[10%] md:text-[7vw] text-[#440C0C] md:min-h-[20vw]`}
      >
        <h1
          className={` ${
            start_anime ? "" : "translate-x-[30%] opacity-0"
          } uppercase transition   duration-[0.4s]`}
        >
          publications{" "}
        </h1>
        <div className=" w-full left-0 md:px-[5%] px-[3%] flex justify-start absolute bottom-0 h-[0.1vw]  md:h-[0.05vw] ">
          <div
            style={{
              width: start_anime ? "100%" : "0%",
              transition: "0.5s ease",
            }}
            className="w-[50%] h-full bg-[#000000] transition  duration-[0.4s]"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Publication_hero;
