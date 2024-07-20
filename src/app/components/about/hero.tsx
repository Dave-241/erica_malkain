"use client";

import {
  Helvetica_light,
  eb_gramond_font,
  eb_gramond_italic_font,
} from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";
import hero1 from "../../../../public/images/about/hero1.webp";
import hero2 from "../../../../public/images/about/hero2.webp";
import Image from "next/image";
import bg from "../../../../public/images/about/bg.webp";
import Link from "next/link";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
const About_hero = () => {
  const [start_anime, setstart_anime] = useState(false);
  useEffect(() => {
    setstart_anime(true);
  }, []);

  //   this is to handle scrolling
  const ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref,
    offset: ["40% 40%", "90% end"], // Start calculating at 40% of the ref element, end at 80%
  });

  const { scrollYProgress: scrollYProgress_img } = useScroll({
    target: ref,
    offset: ["80% 80%", "100% end"], // Start calculating at 40% of the ref element, end at 80%
  });
  //   this is to opac the image

  const bg_img_opac = useTransform(scrollYProgress_img, [0, 1], [0, 1]);
  useMotionValueEvent(bg_img_opac, "change", (latest) => {
    //   console.log(latest);
    setbg_img_opacity(latest);
  });

  const [yvalue, setyvalue] = useState(-50);
  const [opac_one_img, setopac_one_img] = useState(1);
  const [opac_two_img, setopac_two_img] = useState(0);
  const [bg_img_opacity, setbg_img_opacity] = useState(0);

  const y = useTransform(scrollYProgress1, [0, 1], [-50, 25]);
  const opac_one = useTransform(scrollYProgress1, [0, 1], [1, 0]);
  const opac_two = useTransform(scrollYProgress1, [0, 1], [0, 1]);

  useMotionValueEvent(y, "change", (latest) => {
    console.log(latest);
    setyvalue(latest);
  });
  useMotionValueEvent(opac_one, "change", (latest) => {
    console.log(latest);
    setopac_one_img(latest);
  });
  useMotionValueEvent(opac_two, "change", (latest) => {
    console.log(latest);
    setopac_two_img(latest);
  });

  // this is for width calculation
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
  return (
    <>
      <div className="w-full  md:py-[4vw] gap-[10vw] pb-[10vw] flex-col px-[5%] md:px-[7vw]  md:gap-[3vw]  flex">
        <div className="overflow-hidden ">
          <h1
            style={{
              transition: "0.65s ease",
              transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
            }}
            className={`md:text-[14.7vw] text-[25vw] leading-[32vw]  md:leading-[20vw]   text-center   text-[#1E1E1E] ${eb_gramond_italic_font.className}`}
          >
            Erica Boothby
          </h1>
        </div>

        <div className="overflow-hidden md:mt-[-2vw] md:text-start text-center">
          <p
            style={{
              transition: "0.65s ease",
              transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
            }}
            className={`${Helvetica_light.className} text-[4vw] leading-[4.5vw] md:text-[1.4vw] md:leading-[1.6vw]`}
          >
            Educator, Scholar, <br /> Professor & Speaker
          </p>
        </div>
        <div
          className="w-full gap-[10vw]   md:h-[250vh]  md:flex-row flex-col md:mt-[-10vh] flex items-start  relative "
          ref={ref}
        >
          <div className="w-full  h-full   hidden md:absolute md:top-0 md:left-0  md:flex items-end">
            <div className="w-full md:h-[100vh]  flex justify-center items-center ">
              <Image
                src={bg}
                style={{ opacity: bg_img_opacity }}
                alt="background"
                className="md:w-[45vw]   h-fit"
              />
            </div>
          </div>
          <div
            style={{
              transform:
                calWidth < 760
                  ? ""
                  : yvalue >= 50
                  ? `translateX(${-50}%) `
                  : ` translateX(${yvalue}%)  `,
            }}
            className="md:sticky md:top-0 md:left-[25%] z-[20]  md:w-[40%] md:h-[100vh] flex items-center"
          >
            <div className="w-full md:h-[36vw] overflow-hidden relative ">
              <Image
                src={hero1}
                style={{
                  opacity: calWidth < 768 ? "" : opac_one_img,
                  transition: "0.65s ease",
                  transform:
                    calWidth < 760
                      ? ""
                      : start_anime
                      ? ""
                      : "translateY(-50%) translateX(-50%)  scale(1.6)",
                  filter: start_anime ? "" : "blur(4px)",
                }}
                alt="Erica Boothby"
                className="w-full md:absolute md:top-[50%] border2  md:translate-x-[-50%] md:left-[50%] md:translate-y-[-50%] h-fit z-[10]"
              />
              <Image
                src={hero2}
                style={{ opacity: calWidth < 768 ? "" : opac_two_img }}
                alt="Erica Boothby"
                className="w-full md:absolute md:top-[50%] border2 md:block hidden md:translate-x-[-50%] md:left-[50%] md:translate-y-[-50%] h-fit "
              />
            </div>
          </div>

          {/* <div className="  flex justify-end md:px-[10%]"> */}
          <div className="flex flex-col   md:w-[60%] md:px-[6%] md:h-[100vh] justify-center  items-start md:gap-[2vw]">
            <p
              className={`${Helvetica_light.className} md:text-[1.1vw] text-center md:text-start text-[3.5vw] text-[#707270] md:text-[black]`}
            >
              Erica Boothby is a Researcher and Instructor in the Operations,
              Information, & Decisions Department at The Wharton School at the
              University of Pennsylvania, where she teaches Negotiations. Ericas
              research examines peoples perceptions of what others think of
              them, including illusions and biases that interfere with social
              connection and interventions designed to improve peoples social
              lives. {calWidth}
            </p>

            <Link
              style={{
                whiteSpace: "nowrap",
                transition: "0.9s ease",
                transform: start_anime ? "translate(0,0)" : "translate(0%,80%)",
              }}
              href={"/"}
              className={` ${Helvetica_light.className} md:block hidden uppercase overflow-hidden  md:p-[0.5vw] group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[2vw] bg-[#440C0C] backdrop-blur-2xl bg-opacity-[20%] `}
            >
              <div className="w-full h-full bg-[#440C0C] group-hover:bg-[#103210] md:rounded-[1.7vw] flex justify-center items-center  md:py-[0.7vw] md:px-[1.5vw]">
                <p className="inline-block md:text-[1vw] text-[white] group-hover:text-white">
                  View CV
                </p>
              </div>
            </Link>
            {/* </div> */}
          </div>
        </div>

        {/* the below content */}
        <p
          className={`text-[#707270] md:text-[1.3vw] md:mt-[-2vw] text-[3.5vw] md:px-[12vw] ${Helvetica_light.className} text-center`}
        >
          {" "}
          In 2022, she was awarded the American Psychological Societys Rising
          Star Award. Prior to arriving at Wharton, Erica completed her Ph.D. in
          Social Psychology at Yale University and was a Postdoctoral Fellow in
          the Behavioral Economics and Decision Research Center at Cornell
          University. She has a B.A. in Philosophy and a Minor in Italian from
          Boston University. A native of Santa Cruz, California, Erica is
          passionate about surfing, painting, playing the fiddle, and all things
          Italian.
        </p>
      </div>
    </>
  );
};

export default About_hero;
