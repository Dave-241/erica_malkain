"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import img from "../../../../public/services/example.png";
import Image from "next/image";
import white_arrow from "../../../../public/services/white_arrow.png";
import Link from "next/link";
import { spline_font } from "@/app/utils/fonts";

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
    {
      title:
        "Negotiation Fundamentals: Building the Foundation for Strategic Mastery",
      body: [
        {
          heading: "goals",
          caption:
            "Learn how to regulate emotions, recognize cognitive biases, and improve communication during challenging conversations",
          bg: "#CBD4CB",
          text: "#546A54",
        },
        {
          heading: "relevance",
          caption:
            "These skills will help you collaborate better, find win-win solutions, and improve workplace outcomes by incorporating diverse viewpoints. They're essential for  fostering a culture of cooperation and excellence.",
          bg: "#D4CBCB",
          text: "#82825C",
        },
        {
          heading: "APPLICATIONS",
          caption:
            "Use these techniques to negotiate budgets, share resources, manage stakeholders, and enhance teamwork across departments. Turn conflicts into opportunities for growth and innovation",
          bg: "#D4D4CB",
          text: "#82825C",
        },
      ],
    },
    {
      title:
        "Negotiation Fundamentals: Building the Foundation for Strategic Mastery",
      body: [
        {
          heading: "goals",
          caption:
            "Learn how to regulate emotions, recognize cognitive biases, and improve communication during challenging conversations",
          bg: "#CBD4CB",
          text: "#546A54",
        },
        {
          heading: "relevance",
          caption:
            "These skills will help you collaborate better, find win-win solutions, and improve workplace outcomes by incorporating diverse viewpoints. They're essential for  fostering a culture of cooperation and excellence.",
          bg: "#D4CBCB",
          text: "#82825C",
        },
        {
          heading: "APPLICATIONS",
          caption:
            "Use these techniques to negotiate budgets, share resources, manage stakeholders, and enhance teamwork across departments. Turn conflicts into opportunities for growth and innovation",
          bg: "#D4D4CB",
          text: "#82825C",
        },
      ],
    },
    {
      title:
        "Negotiation Fundamentals: Building the Foundation for Strategic Mastery",
      body: [
        {
          heading: "goals",
          caption:
            "Learn how to regulate emotions, recognize cognitive biases, and improve communication during challenging conversations",
          bg: "#CBD4CB",
          text: "#546A54",
        },
        {
          heading: "relevance",
          caption:
            "These skills will help you collaborate better, find win-win solutions, and improve workplace outcomes by incorporating diverse viewpoints. They're essential for  fostering a culture of cooperation and excellence.",
          bg: "#D4CBCB",
          text: "#82825C",
        },
        {
          heading: "APPLICATIONS",
          caption:
            "Use these techniques to negotiate budgets, share resources, manage stakeholders, and enhance teamwork across departments. Turn conflicts into opportunities for growth and innovation",
          bg: "#D4D4CB",
          text: "#82825C",
        },
      ],
    },
    {
      title:
        "Negotiation Fundamentals: Building the Foundation for Strategic Mastery",
      body: [
        {
          heading: "goals",
          caption:
            "Learn how to regulate emotions, recognize cognitive biases, and improve communication during challenging conversations",
          bg: "#CBD4CB",
          text: "#546A54",
        },
        {
          heading: "relevance",
          caption:
            "These skills will help you collaborate better, find win-win solutions, and improve workplace outcomes by incorporating diverse viewpoints. They're essential for  fostering a culture of cooperation and excellence.",
          bg: "#D4CBCB",
          text: "#82825C",
        },
        {
          heading: "APPLICATIONS",
          caption:
            "Use these techniques to negotiate budgets, share resources, manage stakeholders, and enhance teamwork across departments. Turn conflicts into opportunities for growth and innovation",
          bg: "#D4D4CB",
          text: "#82825C",
        },
      ],
    },
    {
      title:
        "Negotiation Fundamentals: Building the Foundation for Strategic Mastery",
      body: [
        {
          heading: "goals",
          caption:
            "Learn how to regulate emotions, recognize cognitive biases, and improve communication during challenging conversations",
          bg: "#CBD4CB",
          text: "#546A54",
        },
        {
          heading: "relevance",
          caption:
            "These skills will help you collaborate better, find win-win solutions, and improve workplace outcomes by incorporating diverse viewpoints. They're essential for  fostering a culture of cooperation and excellence.",
          bg: "#D4CBCB",
          text: "#82825C",
        },
        {
          heading: "APPLICATIONS",
          caption:
            "Use these techniques to negotiate budgets, share resources, manage stakeholders, and enhance teamwork across departments. Turn conflicts into opportunities for growth and innovation",
          bg: "#D4D4CB",
          text: "#82825C",
        },
      ],
    },
    {
      title:
        "Negotiation Fundamentals: Building the Foundation for Strategic Mastery",
      body: [
        {
          heading: "goals",
          caption:
            "Learn how to regulate emotions, recognize cognitive biases, and improve communication during challenging conversations",
          bg: "#CBD4CB",
          text: "#546A54",
        },
        {
          heading: "relevance",
          caption:
            "These skills will help you collaborate better, find win-win solutions, and improve workplace outcomes by incorporating diverse viewpoints. They're essential for  fostering a culture of cooperation and excellence.",
          bg: "#D4CBCB",
          text: "#82825C",
        },
        {
          heading: "APPLICATIONS",
          caption:
            "Use these techniques to negotiate budgets, share resources, manage stakeholders, and enhance teamwork across departments. Turn conflicts into opportunities for growth and innovation",
          bg: "#D4D4CB",
          text: "#82825C",
        },
      ],
    },
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
        className="w-full lg:h-[150vw] flex items-end  md:mb-[5vw] h-[300vh] md:h-[300vh]  relative"
        ref={sectionRef}
        style={{ height: `${data_array_items.length * 110}vh` }}
      >
        <div className="flex justify-center items-center  overflow-hidden  sticky bottom-0 h-[100vh]  w-full ">
          {/* the customize scroll bar starts */}
          <div className="absolute md:right-[3vw] z-[10] border-[#0e257756]  flex w-[2%] right-[1.5%]  top-[50%] translate-y-[-50%] md:w-[0.6vw] rounded-[3vw]   md:h-[90%]  bg-white border-[#103210] border border-opacity-[40%] overflow-hidden">
            <div
              className="w-full  bg-[#103210]"
              style={{ height: `${height * 10}%` }}
            ></div>
          </div>
          {/* the customized scroll bar ends */}
          {data_array_items.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className={` absolute top-[50%] translate-x-[-50%] left-[50%]   md:w-[95vw] w-[95%] h-[150vw] md:h-[95%] md:rounded-[2vw]  overflow-hidden rounded-[7.5vw]  bg-[white] flex flex-col justify-center items-center text-center md:gap-[3vw]`}
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
              >
                <h4
                  className={`md:text-[2vw] md:leading-[2.5vw] ${spline_font.className} font-bold md:w-[50%]`}
                >
                  {e.title}
                </h4>

                <div className="flex justify-center md:gap-[2vw] md:px-[4vw]  w-full">
                  {e.body.map((internal: any, internal_index: any) => {
                    return (
                      <div
                        className={`${spline_font.className}  w-full flex flex-col justify-between text-start md:rounded-[1.5vw] md:py-[3%] md:px-[2vw] lg:h-[60vh] md:h-[40vh]`}
                        key={internal_index}
                        style={{ backgroundColor: internal.bg }}
                      >
                        <h6 className="font-medium uppercase md:text-[2vw]  ">
                          {internal.heading}
                        </h6>

                        <p className="font-normal md:text-[1.1vw] text-[#000000]">
                          {internal.caption}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Each_workshop;
