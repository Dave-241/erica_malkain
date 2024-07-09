"use client";

import { spline_font } from "@/app/utils/fonts";

const Publication_hero = () => {
  return (
    <>
      <div className="w-full md:h-[5vw] "></div>
      <div
        className={` ${spline_font.className} font-bold w-full flex md:leading-[7.6vw] relative items-center  md:px-[10%] md:text-[7vw] text-[#440C0C] md:min-h-[26vw]`}
      >
        <h1 className="uppercase">publications </h1>
        <div className=" w-full left-0 md:px-[5%] flex justify-start absolute bottom-0  md:h-[0.05vw] ">
          <div className="w-[50%] h-full bg-[#000000]"></div>
        </div>
      </div>
    </>
  );
};

export default Publication_hero;
