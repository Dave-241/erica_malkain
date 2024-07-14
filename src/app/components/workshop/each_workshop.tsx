"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import img from "../../../../public/services/example.png";
import Image from "next/image";
import white_arrow from "../../../../public/services/white_arrow.png";
import Link from "next/link";

const Each_workshop = () => {
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
  const [scale_y2value, setscale_y2value] = useState(0);
  const [height, setheight] = useState(1);

  const data_array_items = [
    { bg: "#FF5733" },
    { bg: "#33FF57" },
    { bg: "#5733FF" },
    { bg: "#33FFFF" },
    { bg: "#FF5733" },
    { bg: "#33FF57" },
    { bg: "#5733FF" },
    { bg: "#33FFFF" },
  ];

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [1, data_array_items.length + 0.5],
  );
  const scale_y = useTransform(scrollYProgress, [0, 1], [10, 1]);
  const parent_height = useTransform(scrollYProgress, [0, 1], [1, 10]);

  useMotionValueEvent(y, "change", (latest) => {
    setyvalue(latest);
    // console.log(latest);
  });
  useMotionValueEvent(scale_y, "change", (latest) => {
    setscale_y2value(latest);
  });
  useMotionValueEvent(parent_height, "change", (latest) => {
    setheight(latest);
  });

  const calculateScale = (index: any, data_array: any, yvalue: any) => {
    const minScale = 0.05;
    const maxScale = 1;
    const scaleFactor = (yvalue - (index + 1)) / 6;
    const scale = maxScale - (maxScale - minScale) * scaleFactor;
    return Math.max(minScale, Math.min(maxScale, scale)); // Ensure scale stays within bounds
  };

  const calculateScaleUp = (
    index: number,
    data_array: any[],
    yvalue: number,
  ): number => {
    const maxScale = 1.2;
    const minScale = 1;
    const exprValue =
      ((index + 2 - yvalue) * 100 - 150 * (-index + yvalue)) / -1;

    if (exprValue <= 50) {
      return maxScale - (maxScale - minScale) * (exprValue / 50);
    } else {
      return minScale;
    }
  };
  const degScaleUp = (
    index: number,
    data_array: any[],
    yvalue: number,
  ): number => {
    const maxScale = 4;
    const minScale = 0;
    const exprValue =
      ((index + 2 - yvalue) * 100 - 150 * (-index + yvalue)) / -1;

    if (exprValue <= 50) {
      return maxScale - (maxScale - minScale) * (exprValue / 50);
    } else {
      return minScale;
    }
  };
  const degScale = (
    index: number,
    data_array: any[],
    yvalue: number,
  ): number => {
    const maxScale = 0.6;
    const minScale = 0;
    const exprValue =
      ((index + 2 - yvalue) * 100 - 150 * (-index + yvalue)) / -1;

    if (exprValue >= 50) {
      if (index == data_array.length - 1) {
        return 0;
      }
      return maxScale - (maxScale - minScale) * (exprValue / 50);
    } else {
      return minScale;
    }
  };
  return (
    <>
      {/* the wrapper */}
      <div
        className="w-full lg:h-[150vw] flex items-end h-[300vh] md:h-[300vh]  relative"
        ref={sectionRef}
        style={{ height: `${data_array_items.length * 100}vh` }}
      >
        <div className="flex justify-center items-center  overflow-hidden  sticky bottom-0 h-[100vh]  w-full ">
          {/* the customize scroll bar starts */}
          <div className="absolute md:right-[3vw] z-[10] border-[#0e257756]  flex w-[2%] right-[1.5%]  top-[50%] translate-y-[-50%] md:w-[0.6vw] rounded-[3vw]  lg:h-[28vw] md:h-[40vw] h-[140vw] bg-white overflow-hidden">
            <div
              className="w-full rounded-[3vw] bg-[#0E2477]"
              style={{ height: `${height * 10}%` }}
            ></div>
          </div>
          {/* the customized scroll bar ends */}
          {data_array_items.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className={` absolute top-[50%] translate-x-[-50%] left-[50%]  lg:rounded-[2vw] md:w-[95vw] w-[95%] h-[150vw] md:h-[95%] md:rounded-[3vw]  overflow-hidden rounded-[7.5vw]  bg-[#0E2477] flex justify-center items-center text-center`}
                style={{
                  transition: "opacity 0.6s ease, filter  jjj0.6s ease",
                  backgroundColor: e.bg,
                  opacity:
                    index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
                      ? 1
                      : index + 1 - yvalue <= 0
                      ? 1
                      : 0,
                  transform:
                    index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
                      ? `translateY(${
                          (index + 2 - yvalue) * 100 - 150 * (-index + yvalue)
                        }%) translateX(-50%) scale(${calculateScaleUp(
                          index,
                          data_array_items,
                          yvalue,
                        )})  rotate(${
                          index % 2 === 0
                            ? degScaleUp(index, data_array_items, yvalue)
                            : degScaleUp(index, data_array_items, yvalue) * -1
                        }deg) `
                      : index + 1 - yvalue <= 0
                      ? `translateY(-50%) translateX(-50%)  scale(${calculateScale(
                          index,
                          data_array_items,
                          yvalue,
                        )}) rotate(${
                          index % 2 === 0
                            ? degScale(index, data_array_items, yvalue) * -1
                            : degScale(index, data_array_items, yvalue)
                        }deg) 
`
                      : `translateY(${
                          yvalue + 1 + index * 100
                        }%) translateX(-50%)`,
                }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="h-[100vh] bg-[black]"></div>
    </>
  );
};

export default Each_workshop;
