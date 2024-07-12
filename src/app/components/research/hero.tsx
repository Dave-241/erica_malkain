"use client";

import Image from "next/image";
import hero from "../../../../public/images/research/hero.webp";
import { Helvetica_light, spline_font } from "@/app/utils/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";

const Research_hero = () => {
  const [start_anime, setstart_anime] = useState(false);
  useEffect(() => {
    setstart_anime(true);
  }, []);
  return (
    <>
      <div className="w-full flex flex-col  items-center justify-end md:h-[55vw] relative overflow-hidden  md:gap-[1.1vw] md:pb-[7vw] md:px-[12vw]">
        <Image
          src={hero}
          alt="hero image"
          className="absolute top-0 left-0 w-full h-fit"
          style={{
            transition: "0.45s ease",
            opacity: start_anime ? 1 : 0,
            scale: start_anime ? 1 : 1.8,
          }}
        />

        <div className=" overflow-hidden">
          <h1
            style={{
              transition: "0.45s ease",
              //   opacity: start_anime ? 1 : 0,
              transform: start_anime ? "translate(0,0)" : "translate(0%,80%)",
            }}
            className={`${spline_font.className} font-bold z-[10] text-[#DFE4DF] md:text-[7vw]  md:leading-[7vw]`}
          >
            RESEARCH OVERVIEW.
          </h1>
        </div>

        <div className=" overflow-hidden">
          <p
            style={{
              transition: "0.9s ease",
              transform: start_anime ? "translate(0,0)" : "translate(0%,80%)",
            }}
            className={`text-[#DFE4DF] z-[10] md:text-[1.2vw]  ${Helvetica_light.className}`}
          >
            Much of Erica's research examines people's beliefs about what others
            think of them (i.e., “metaperception”), starting with the idea that
            we often know what we think of others, but it is harder to know what
            others think of us. After all, people don't often tell us, and so,
            lacking direct evidence, we must rely on our own (often biased)
            estimates. These metaperceptions (your own estimate of someo else's
            judgement of you) can have a profound influence on our sense of self
            and our performance in organizational settings
          </p>
        </div>

        <div className="flex w-full overflow-hidden">
          <Link
            style={{
              whiteSpace: "nowrap",
              transition: "0.9s ease",
              transform: start_anime ? "translate(0,0)" : "translate(0%,80%)",
            }}
            href={"/"}
            className="uppercase overflow-hidden  md:p-[0.5vw] group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[1.5vw] bg-[#440C0C] backdrop-blur-2xl bg-opacity-[20%] "
          >
            <div className="w-full h-full bg-[#440C0C] group-hover:bg-[#103210] md:rounded-[1.3vw] flex justify-center items-center  md:py-[0.7vw] md:px-[1.5vw]">
              <p className="inline-block md:text-[1vw] text-[white] group-hover:text-white">
                View PUBLICATIONS
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Research_hero;
