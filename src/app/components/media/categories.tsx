"use client";

import { spline_font } from "@/app/utils/fonts";
import { useState } from "react";
import example from "../../../../public/images/media/example.webp";

const Categories = () => {
  const [active, setactive] = useState(0);
  const items = [
    {
      title: "podcast",
      body: [
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
      ],
    },
    {
      title: "NEWS ARTICLE",
      body: [
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
      ],
    },
    {
      title: "MEDIA OUTLET",
      body: [
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
      ],
    },
  ];
  return (
    <>
      <div className="w-full border2 relative flex  ">
        <div className="border2 md:h-[100vh] md:w-[30vw] flex items-center justify-start sticky top-0 left-0 md:pt-[8vw] md:gap-[2vw] flex-col">
          {items.map((e: any, index: any) => {
            return (
              <button
                key={index}
                style={{ transition: "0.8s ease" }}
                className={` ${
                  active == index ? "scale-[1.05]" : "opacity-[50%]"
                } ${
                  spline_font.className
                } bg-[black] font-semibold uppercase overflow-hidden  md:w-[13vw] md:h-[4.9vw] md:p-[0.6vw]  group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[1.8vw]  backdrop-blur-2xl bg-opacity-[20%] `}
              >
                <div
                  className={`w-full   h-full bg-white  group-hover:bg-[#103210] md:rounded-[1.3vw] flex justify-center items-center  md:py-[0.6vw] md:px-[1.5vw]`}
                >
                  <p
                    className={`inline-block  md:text-[1.1vw] text-[#103210]  group-hover:text-white`}
                  >
                    {e.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="md:w-[69vw] border2 flex flex-col md:gap-[5vw] justify-center ">
          {items.map((e: any, index: any) => {
            return (
              <div key={index} className="border2   md:w-[80%] flex flex-col">
                <h2
                  className={`uppercase text-[#4F0A19] font-semibold ${spline_font.className} md:text-[4vw]`}
                >
                  {e.title}
                </h2>

                <div className="border2 flex flex-wrap md:gap-[2vw]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
