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

  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ["start end", "end 50%"],
  //   });

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref,
    offset: ["40% 40%", "80% end"], // Start calculating at 40% of the ref element, end at 80%
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
  return (
    <>
      <div className="w-full  md:py-[7vw] flex-col hidden md:px-[8vw] md:gap-[5vw]  md:flex">
        <div className="overflow-hidden ">
          <h1
            style={{
              transition: "0.65s ease",
              transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
            }}
            className={`md:text-[15vw]  md:leading-[20vw]   text-center   text-[#1E1E1E] ${eb_gramond_italic_font.className}`}
          >
            Erica Boothby
          </h1>
        </div>

        <div className="overflow-hidden">
          <p
            style={{
              transition: "0.65s ease",
              transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
            }}
            className={`${Helvetica_light.className} md:text-[1.4vw] md:leading-[1.6vw]`}
          >
            Educator, Scholar, <br /> Professor & Speaker
          </p>
        </div>
        <div
          className="w-full  h-[250vh]  md:mt-[-10vh] flex items-start  relative "
          ref={ref}
        >
          <div className="w-full h-full  absolute top-0 left-0  flex items-end">
            <div className="w-full h-[100vh]  flex justify-center items-center ">
              <Image
                src={bg}
                style={{ opacity: bg_img_opacity }}
                alt="background"
                className="md:w-[45vw] h-fit"
              />
            </div>
          </div>
          <div
            style={{
              //   transition: "0.9s ease",
              transform:
                yvalue >= 50
                  ? `translateX(${-50}%) `
                  : ` translateX(${yvalue}%)  `,
            }}
            className="sticky top-0 left-[25%] z-[20]  md:w-[40%] h-[100vh] flex items-center"
          >
            <div className="w-full md:h-[36vw] overflow-hidden relative ">
              <Image
                src={hero1}
                style={{ opacity: opac_one_img }}
                alt="Erica Boothby"
                className="w-full absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] h-fit z-[10]"
              />
              <Image
                src={hero2}
                style={{ opacity: opac_two_img }}
                alt="Erica Boothby"
                className="w-full absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] h-fit "
              />
            </div>
          </div>

          {/* <div className="  flex justify-end md:px-[10%]"> */}
          <div className="flex flex-col border2 md:w-[60%] md:px-[6%] h-[100vh] justify-center  items-start md:gap-[2vw]">
            <p
              className={`${Helvetica_light.className} md:text-[1.1vw] text-[#707270]`}
            >
              Erica Boothby is a Researcher and Instructor in the Operations,
              Information, & Decisions Department at The Wharton School at the
              University of Pennsylvania, where she teaches Negotiations. Ericas
              research examines peoples perceptions of what others think of
              them, including illusions and biases that interfere with social
              connection and interventions designed to improve peoples social
              lives.
            </p>

            <Link
              style={{
                whiteSpace: "nowrap",
                transition: "0.9s ease",
                transform: start_anime ? "translate(0,0)" : "translate(0%,80%)",
              }}
              href={"/"}
              className={` ${Helvetica_light.className} uppercase overflow-hidden  md:p-[0.5vw] group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[2vw] bg-[#440C0C] backdrop-blur-2xl bg-opacity-[20%] `}
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
          className={`text-[#707270] md:text-[1vw] ${Helvetica_light.className} text-center`}
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
