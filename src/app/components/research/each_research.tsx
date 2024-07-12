"use client";

import { Helvetica_light, spline_font } from "@/app/utils/fonts";
import example from "../../../../public/images/research/example.webp";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Each_research = () => {
  const itemsRefs = useRef<any>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("research_comeup");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 },
    );

    itemsRefs.current.forEach((ref: any) => {
      observer.observe(ref);
    });

    return () => {
      itemsRefs.current.forEach((ref: any) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const items = ["", "", "", "", "", ""];

  return (
    <>
      {items.map((e: any, index: any) => {
        return (
          <div
            key={index}
            className="w-full border-t border-[#9CA09C] md:py-[5vw] md:gap-[6vw] md:flex hidden justify-center items-start"
          >
            {/* the details */}
            <div className="  overflow-hidden">
              <div
                ref={(ref) => {
                  if (ref) {
                    itemsRefs.current[index] = ref;
                  }
                }}
                className="w-[22vw]  research_initial flex flex-col md:gap-[1vw]"
              >
                <h3
                  className={`${spline_font.className}  md:text-[2vw]  font-medium md:leading-[2.2vw]`}
                >
                  Do we know what people think of us?
                </h3>
                <p
                  className={`${Helvetica_light.className} md:text-[1vw] text-[#707270] `}
                >
                  Beliefs about whether our colleagues like us affect our sense
                  of belonging in the workplace and how{" "}
                </p>
                <Link
                  href={"/"}
                  className={`uppercase  ${Helvetica_light.className} uppercase`}
                >
                  Read more
                </Link>
              </div>
            </div>
            {/* the picture */}
            <div className="md:w-[45vw] ">
              <Image
                src={example}
                alt="example blog"
                className="w-full h-fit"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Each_research;
