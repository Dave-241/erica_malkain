"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bt_Beau_Regualr,
  Helvetica_light,
  spline_font,
} from "@/app/utils/fonts";
import example from "../../../../public/images/consultation/example.png";
import example2 from "../../../../public/images/consultation/example2.png";
import example3 from "../../../../public/images/consultation/example3.png";
import arrow from "../../../../public/images/consultation/arrow.png";
const Each_consultation = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // offset: ["end start", "end 50%"],
  });
  const width = globalThis.innerWidth;
  useEffect(() => {
    setcalwidth(width);
  }, [width]);
  const [calwidth, setcalwidth] = useState(0);
  const [yvalue, setyvalue] = useState(1);
  const [height, setheight] = useState(1);
  const data_array = [
    {
      bg: "#CBD4CB",
      institue: "Wharton University",
      year: "2023",
      heading: "NEGOTIATION COURSE",
      text: "#546A54",
      img: example,
      link: "/",
      body: 'Erica teaches a course on Negotiations at The Wharton School at the University of Pennsylvania, for which she has received a Wharton Teaching Excellence award. Her course has received an average rating of 3.8/4.0 and consistently receives among the highest marks in "overall quality" across the entire Wharton School. Erica was named one of <a href="malkain.com"> Poets&Quants 50 Best Professors of 2023. </a>',
    },
    {
      bg: "#D4CBCB",
      institue: "Wet Cement",
      heading: "Workshops",
      year: "2024",
      img: example2,
      link: "/",

      text: "#B16565",
      body: 'Erica works with <a href="malkain.com"> Wet Cement </a>, a purpose-driven company whose mission is to empower people, teams, and organizations to fearlessly achieve their potential, to co-design and <a href="malkain.com"> lead Wet Cements Win-Win Negotiations training </a>.  Wet Cement especially aims to empower women and other members of underrepresented groups at the negotiating table, so that they can more effectively advance their careers. ',
    },
    {
      bg: "#D4D4CB",
      institue: "Behavioralize",
      heading: "BEHAVIORAL SCIENCE CONSULTING",
      year: "2023",
      img: example3,
      link: "/",

      text: "#82825C",
      body: "Erica is a consultant with <a href='malkain.com'> Behavioralize </a> , a data-driven company that applies behavioral science to understand and influence customer and managerial decision making, helping companies drive growth by identifying and solving their key behavioral challenges",
    },
  ];

  const y = useTransform(scrollYProgress, [0, 1], [1, data_array.length + 0.5]);
  const parent_height = useTransform(scrollYProgress, [0, 1], [1, 10]);

  useMotionValueEvent(y, "change", (latest) => {
    setyvalue(latest);
    // console.log(latest);
  });

  useMotionValueEvent(parent_height, "change", (latest) => {
    setheight(latest);
  });

  return (
    <>
      {/* the wrapper */}
      <div
        className="w-full md:h-[150vw] md:flex hidden items-end  
         relative"
        style={{
          height: calwidth > 768 ? `${(data_array.length + 1) * 35}vw` : "",
        }}
        ref={sectionRef}
      >
        <div className="flex  justify-center items-center   sticky bottom-0 h-[100vh]  w-full ">
          {/* the customize scroll bar starts */}
          <div className="absolute md:right-[3vw] z-[10] border-[#0e257756]  flex w-[2%] right-[1.5%]  top-[50%] translate-y-[-50%] md:w-[0.6vw] rounded-[3vw]  lg:h-[28vw] md:h-[40vw] bg-black mix-blend-overlay border2 h-[140vw]  overflow-hidden">
            <div
              className="w-full   rounded-[3vw] bg-[#0E2477]"
              style={{ height: `${height * 10}%` }}
            ></div>
          </div>
          {/* the customized scroll bar ends */}
          {data_array.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className={` absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]  w-full md:gap-[4vw] flex flex-col justify-center items-center  h-full  overflow-hidden   `}
                style={{
                  transition: "opacity 0.6s ease",
                  backgroundColor: e.bg,
                  transform:
                    index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
                      ? `translateY(${
                          (index + 2 - yvalue) * 100 - 150 * (-index + yvalue)
                        }%) translateX(-50%)`
                      : index + 1 - yvalue <= 0
                      ? ``
                      : `translateY(${
                          yvalue + 1 + index * 100
                        }%) translateX(-50%)`,
                }}
              >
                <div className="flex md:px-[10vw] justify-between w-full ">
                  {/* the left section */}
                  <div
                    className="flex  flex-col  md:w-[30vw] md:gap-[4vw]"
                    style={{ backgroundColor: e.bg }}
                  >
                    <h2
                      className={` ${spline_font.className} font-semibold md:text-[4vw] md:leading-[4.4vw]`}
                      style={{ color: e.text }}
                    >
                      {e.heading}
                    </h2>

                    <Image
                      src={e.img}
                      alt={e.heading}
                      className="w-full h-fit md:rounded-[1vw]"
                    />
                  </div>

                  {/* now the writing  */}
                  <div className=" md:w-[30vw] flex flex-col md:gap-[2vw]">
                    <p
                      className={` ${Helvetica_light.className} border-l-[0.3vw] border-[#1E1E1E] md:pl-[1vw] md:py-[1vw] text-[#1E1E1E] md:text-[1vw] [&_a]:underline underline-offset-4`}
                      dangerouslySetInnerHTML={{ __html: e.body }}
                    ></p>

                    <Link
                      href={e.link}
                      className={` ${Bt_Beau_Regualr.className} md:text-[1vw] md:w-[10vw] flex justify-center items-center md:h-[2.6vw]  border-[#000000] border-[0.1vw] md:rounded-[0.7vw]  md:ml-[1vw] group relative overflow-hidden`}
                    >
                      <p
                        style={{ transition: "0.5s ease" }}
                        className="group-hover:text-white z-[10] text-[#000000]"
                      >
                        {" "}
                        Read more{" "}
                      </p>

                      <Image
                        src={arrow}
                        alt="arrow"
                        className="md:w-[1.7vw] z-[10] h-fit"
                      />
                      <div
                        className="w-full h-full bg-[#440C0C] absolute left-0 top-[100%] group-hover:top-0 "
                        style={{ transition: "0.5s ease" }}
                      ></div>
                    </Link>
                  </div>
                </div>
                {/* institue and location segment */}
                <div
                  className={` ${Bt_Beau_Regualr.className} w-full border-y border-[#000000] border-opacity-[58%] md:py-[1.6vw] flex justify-center items-center md:gap-[4vw] text-[#000000] text-opacity-[60%] md:text-[1.1vw] md:px-[10vw]`}
                >
                  <p className="" style={{ whiteSpace: "nowrap" }}>
                    {e.institue}
                  </p>
                  <div className="w-full relative md:h-[0.1vw] bg-[#000000] bg-opacity-[50%] flex justify-end items-center">
                    <div className="md:w-[0.4vw] md:h-[0.4vw] rounded-[100%] bg-[#000000]  "></div>
                  </div>
                  <p className="" style={{ whiteSpace: "nowrap" }}>
                    ({e.year})
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Each_consultation;
