"use client";

import { spline_font } from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";
import example from "../../../../public/images/media/example.webp";
import Image from "next/image";
import { useInView } from "framer-motion";

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
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
      ],
    },
  ];

  //   for tracking the major categories
  const itemsRefs = useRef<any>([]);

  itemsRefs.current = [];

  const addToRefs = (el: any) => {
    if (el && !itemsRefs.current.includes(el)) {
      itemsRefs.current.push(el);
    }
  };

  const sub_itemsRefs = useRef<any>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("research_comeup");
            console.log(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      //   { threshold: 0.1 },
    );

    sub_itemsRefs.current.forEach((ref: any) => {
      observer.observe(ref);
    });

    return () => {
      sub_itemsRefs.current.forEach((ref: any) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  return (
    <>
      <div className="w-full  relative flex  ">
        <div className=" md:h-[100vh] md:w-[30vw] flex items-center justify-start sticky top-0 left-0 md:pt-[8vw] md:gap-[2vw] flex-col">
          {items.map((e: any, index: any) => {
            return (
              <button
                key={index}
                style={{ transition: "0.8s ease" }}
                className={` ${
                  active == index ? "scale-[1.05]" : "opacity-[40%]"
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

        <div className="md:w-[69vw]  flex flex-col md:gap-[6vw] justify-center ">
          {items.map((e: any, index: any) => {
            const ref = useRef(null);
            const inView = useInView(ref, {
              //   once: true,
            });

            useEffect(() => {
              if (inView) {
                setactive(index);
              }
            }, [inView]);

            return (
              <div
                key={index}
                ref={ref}
                className=" md:gap-[1.35vw]  md:w-[100%] flex flex-col"
              >
                <h2
                  className={`uppercase text-[#4F0A19] font-semibold ${spline_font.className} md:text-[4vw]`}
                >
                  {e.title}
                </h2>

                <div className=" flex flex-wrap md:gap-[1.7vw]">
                  {e.body.map((internal: any, internal_index: any) => {
                    return (
                      <div
                        ref={(ref) => {
                          if (ref) {
                            sub_itemsRefs.current[index] = ref;
                          }
                        }}
                        key={internal_index}
                        className={`md:w-[30.6vw] md:rounded-[1.5vw] flex flex-col md:p-[0.5vw] md:mt-[0.4vw] bg-white`}
                      >
                        <Image
                          src={internal.img}
                          alt={internal.caption}
                          className="w-full h-fit"
                        />

                        <p
                          className={` md:p-[1.5vw] research_initial  ${spline_font.className} font-medium md:text-[1vw]`}
                        >
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

export default Categories;
