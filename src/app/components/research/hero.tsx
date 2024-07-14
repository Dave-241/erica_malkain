"use client";

import Image from "next/image";
import hero from "../../../../public/images/research/hero.webp";
import { Helvetica_light, spline_font } from "@/app/utils/fonts";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const Research_hero = () => {
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

  const y = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  useMotionValueEvent(y, "change", (latest) => {
    setyvalue(latest);
  });
  return (
    <>
      <div
        ref={ref}
        className="w-full md:flex flex-col hidden bg-[#908E8E]  items-center justify-end md:h-[55vw] relative overflow-hidden  md:gap-[1.1vw] md:pb-[7vw] md:px-[12vw]"
      >
        <Image
          src={hero}
          alt="hero image"
          className="absolute top-0 left-0 w-full h-fit"
          style={{
            transition: yvalue > 1 ? "" : "0.45s ease",
            opacity: start_anime ? 1 : 0,
            scale: start_anime ? yvalue : 1.8,
          }}
        />
        <div className="w-full h-full left-0 top-0 absolute bg-black bg-opacity-[43%]"></div>

        <div className=" overflow-hidden">
          <h1
            style={{
              transition: "0.5s ease",
              transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
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
              transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
            }}
            className={`text-[#DFE4DF] z-[10] md:text-[1.2vw]  ${Helvetica_light.className}`}
          >
            Much of Erica{"'"}s research examines people{"'"}s beliefs about
            what others think of them (i.e., “metaperception”), starting with
            the idea that we often know what we think of others, but it is
            harder to know what others think of us. After all, people don{"'"}t
            often tell us, and so, lacking direct evidence, we must rely on our
            own (often biased) estimates. These metaperceptions (your own
            estimate of someo else{"'"}s judgement of you) can have a profound
            influence on our sense of self and our performance in organizational
            settings
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

      {/* second section */}
      <div className="w-full  md:px-[12vw]  flex-col md:flex hidden md:gap-[2vw] md:py-[7vw] ">
        <h2
          className={`md:text-[5vw]  md:leading-[5vw] ${spline_font.className} text-[#1E1E1E] font-light`}
        >
          A SCIENCE OF DATA & ANALYTICS
        </h2>
        <p
          className={`${Helvetica_light.className} text-[#707270] md:text-[1.2vw]`}
        >
          Beliefs about whether our colleagues like us affect our sense of
          belonging in the workplace and how psychologically safe we feel.
          Beliefs about whether our managers take our contributions seriously
          affect our sense of efficacy and satisfaction with our job. Thus, our
          beliefs about how others see us shapes our sense of social connection,
          with implications for our workplace performance, health, and
          well-being. But to what extent are these metaperceptions accurate?
        </p>
      </div>
    </>
  );
};

export default Research_hero;
