"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Workshop_ad = () => {
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

  const y = useTransform(scrollYProgress, [0, 1], [1, 4.5]);
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

  const data_array = ["", "", "", ""];

  // const calculateScale = (index: number, data_array: any[], yvalue: number) => {
  //   const minScale = Math.min(...data_array) / 2 + scale_y2value / 10;
  //   const scale = (index / (data_array.length - 1)) * (1 - minScale) + minScale;

  //   return scale;
  // };

  const calculateScale = (index: number, data_array: any[], yvalue: number) => {
    const minScale = Math.min(...data_array) / 2 + scale_y2value / 10;
    const maxScale = 1;
    const scaleFactor = (yvalue - (index + 1)) / 6; // adjust this value to control the scaling speed
    const scale = maxScale - (maxScale - minScale) * scaleFactor;

    return scale;
  };
  return (
    <>
      {/* the wrapper */}
      <div
        className="w-full lg:h-[150vw] flex items-end h-[300vh] md:h-[300vh] bg-[#F3FEFF] relative"
        ref={sectionRef}
      >
        <div className="flex justify-center items-center   sticky bottom-0 h-[100vh] bg-[#F3FEFF] w-full ">
          {/* the customize scroll bar starts */}
          <div className="absolute md:right-[3vw] z-[10] border-[#0e257756]  flex w-[2%] right-[1.5%]  top-[50%] translate-y-[-50%] md:w-[0.6vw] rounded-[3vw]  lg:h-[28vw] md:h-[40vw] h-[140vw] bg-white overflow-hidden">
            <div
              className="w-full rounded-[3vw] bg-[#0E2477]"
              style={{ height: `${height * 10}%`, transition: "0.2s" }}
            ></div>
          </div>
          {/* the customized scroll bar ends */}
          {data_array.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className={`lg:w-[80vw] absolute top-[50%] translate-x-[-50%] left-[50%]  lg:rounded-[2vw] md:w-[85vw] w-[90%] h-[150vw] md:h-[40vw] md:rounded-[3vw] lg:h-[30vw] overflow-hidden rounded-[7.5vw]  bg-[#0E2477] flex  ${
                  index % 2 === 0
                    ? "md:flex-row flex-col"
                    : "md:flex-row-reverse flex-col"
                } justify-between items-center md:p-[2vw] p-[4vw] gap-[4vw] md:gap-[2vw] text-white`}
                style={{
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
                          (index + 2 - yvalue) * 100 - 150 * (-index + yvalue)
                        }%) translateX(-50%)`
                      : index + 1 - yvalue <= 0
                      ? `translateY(${
                          -50 -
                          (yvalue - (index + 1)) *
                            (calwidth < 765 ? 15 / 1.5 : 15 / 1.2)
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
                    index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
                      ? ``
                      : index + 1 - yvalue <= -0.8
                      ? `blur(${(yvalue - index) * 1.2}px)`
                      : ``,
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

export default Workshop_ad;
