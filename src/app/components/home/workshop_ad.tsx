"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import example from "../../../../public/images/workshop/example1.webp";
import example2 from "../../../../public/images/workshop/example2.webp";
import example3 from "../../../../public/images/workshop/example3.webp";
import Image from "next/image";
import {
  Helvetica_bold,
  Helvetica_light,
  spline_font,
} from "@/app/utils/fonts";
import Link from "next/link";
const Workshop_ad = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const [yvalue, setyvalue] = useState(1);
  const [scale_y2value, setscale_y2value] = useState(0);
  const [height, setheight] = useState(1);
  const data_array = [
    {
      bg: "#CBD4CB",
      img: example,
      heading:
        "Negotiation Fundamentals: Building the Foundation for Strategic Mastery",
    },
    {
      bg: "#D4CBCB",
      heading: "Growing the Pie: Elegant Trades and Creativity",
      img: example2,
    },
    {
      bg: "#D4D4CB",
      heading: "Cutting the Pie: Confident Deal Making",
      img: example3,
    },
  ];
  const y = useTransform(scrollYProgress, [0, 1], [1, data_array.length + 0.5]);
  const scale_y = useTransform(scrollYProgress, [0, 1], [10, 1]);
  const parent_height = useTransform(scrollYProgress, [0, 1], [1, 10]);

  useMotionValueEvent(y, "change", (latest) => {
    setyvalue(latest);
  });
  useMotionValueEvent(scale_y, "change", (latest) => {
    setscale_y2value(latest);
  });
  useMotionValueEvent(parent_height, "change", (latest) => {
    setheight(latest);
  });

  //   const calculateScale = (index: number, data_array: any[], yvalue: number) => {
  //     const minScale = Math.min(...data_array) / 2 + scale_y2value / 10;
  //     const maxScale = 1;
  //     const scaleFactor = (yvalue - (index + 1)) / 6; // adjust this value to control the scaling speed
  //     const scale = maxScale - (maxScale - minScale) * scaleFactor;

  //     return scale;
  //   };

  const calculateScale = (index: any, data_array: any, yvalue: any) => {
    const minScale = 0.6;
    const maxScale = 1;
    const scaleFactor = (yvalue - (index + 1)) / 6;
    const scale = maxScale - (maxScale - minScale) * scaleFactor;
    return Math.max(minScale, Math.min(maxScale, scale)); // Ensure scale stays within bounds
  };

  // THIS IS FOR DETERMINING THE WIDTH OF THE SCREEN
  // THIS IS FOR DETERMINING THE WIDTH OF THE SCREEN
  // THIS IS FOR DETERMINING THE WIDTH OF THE SCREEN
  // THIS IS FOR DETERMINING THE WIDTH OF THE SCREEN
  // THIS IS FOR DETERMINING THE WIDTH OF THE SCREEN
  const width = globalThis.innerWidth;
  useEffect(() => {
    setcalwidth(width);
  }, [width]);
  const handleResize = () => {
    setcalwidth(globalThis.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Initial call to set the width on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  const [calwidth, setcalwidth] = useState(0);
  return (
    <>
      {/* the wrapper */}
      <div
        className="w-full   flex items-end h-[300vh] md:h-[300vh] bg-[#DFE4DF] relative"
        ref={sectionRef}
        style={{ height: `${data_array.length * 110}vh ` }}
      >
        <div className="flex justify-center items-center   sticky bottom-0 h-[100vh] bg-[#DFE4DF] w-full ">
          {/* the customize scroll bar starts */}
          <div className="absolute md:right-[3vw] z-[10] border-[#0e257756]  flex w-[1%] right-[1.5%]  top-[50%] translate-y-[-50%] md:w-[0.6vw] rounded-[3vw]  lg:h-[25vw] md:h-[30vw] h-[140vw] bg-[white]   overflow-hidden">
            <div
              className="w-full rounded-[3vw] bg-[#103210]"
              style={{ height: `${height * 10}%` }}
            ></div>
          </div>

          {/* the heading text */}
          <h1
            className={`text-[#5C3C43] absolute md:left-[20%] left-[50%] md:top-[22%] top-[15%] text-[10vw]  translate-x-[-50%] translate-y-[-80%] z-[10] uppercase md:text-[4vw] ${spline_font.className} font-medium`}
          >
            workshop
          </h1>
          {/* the customized scroll bar ends */}
          {data_array.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className={` absolute top-[50%] translate-x-[-50%] left-[50%]   md:w-[90vw] w-[95%] h-[140vw] md:h-[30vw] lg:h-[25vw] md:rounded-[2vw]  overflow-hidden rounded-[7.5vw]   flex   justify-between items-center md:flex-row flex-col text-white`}
                style={{
                  backgroundColor: e.bg,
                  transition: "opacity 0.6s ease, filter  jjj0.6s ease",
                  opacity:
                    index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
                      ? 1
                      : index + 1 - yvalue <= 0
                      ? 1
                      : 0,
                  transform:
                    index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
                      ? `translateY(${
                          (index + 2 - yvalue) * 100 - 130 * (-index + yvalue)
                        }%) translateX(-50%)`
                      : index + 1 - yvalue <= 0
                      ? `translateY(${
                          -30 -
                          (yvalue - (index + 1)) *
                            (calwidth < 765 ? 15 / 2.2 : 9 / 1.2)
                          // i am changing this value for scale (15/#change)
                        }%) translateX(-50%)  scale(${calculateScale(
                          index,
                          data_array,
                          yvalue,
                        )})
`
                      : `translateY(${
                          yvalue + 1 + index * 100
                        }%) translateX(-50%)`,

                  filter:
                    index != data_array.length - 1
                      ? index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
                        ? ``
                        : index + 1 - yvalue <= -0.8
                        ? `blur(${(yvalue - index) * 1.2}px)`
                        : ``
                      : "",
                }}
              >
                <div className="md:w-[50%] md:h-full h-[50%]  w-full   relative">
                  <Image
                    src={e.img}
                    alt={e.heading}
                    className="absolute absolute_center   w-full h-full"
                  />
                </div>
                <div className="md:w-[50%]  md:h-full h-[50%] w-full px-[5%] md:px-[5%] justify-center gap-[7vw] flex flex-col md:gap-[1.5vw]">
                  <h4
                    className={`md:text-[2.5vw] text-[6vw] leading-[7.3vw] ${Helvetica_bold.className} text-[#000000] md:leading-[2.8vw]`}
                  >
                    {e.heading}
                  </h4>

                  <Link
                    style={{
                      whiteSpace: "nowrap",
                      transition: "0.9s ease",
                      // transform: start_anime ? "translate(0,0)" : "translate(0%,80%)",
                    }}
                    href={"/"}
                    className={` ${Helvetica_light.className} uppercase overflow-hidden  md:p-[0.5vw] p-[2vw] rounded-[8vw] w-fit group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[2vw] bg-[black] backdrop-blur-2xl bg-opacity-[20%] `}
                  >
                    <div className="w-full h-full bg-[#440C0C] group-hover:bg-[#103210] md:rounded-[1.7vw] rounded-[7vw] flex justify-center items-center  py-[2.5vw] px-[8vw]   md:py-[0.7vw] md:px-[1.5vw]">
                      <p className="inline-block md:text-[1vw] text-[3.5vw] text-[white] group-hover:text-white">
                        see all
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Workshop_ad;
