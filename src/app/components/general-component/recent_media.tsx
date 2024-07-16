"use client";
import Link from "next/link";
import example from "../../../../public/images/media/example.webp";
import Image from "next/image";
import { Helvetica_light, spline_font } from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Recent_media = () => {
  const items = [
    {
      img: example,
      caption:
        "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
      link: "/",
    },
    {
      img: example,
      link: "/",
      caption:
        "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
    },
    {
      img: example,
      link: "/",
      caption:
        "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
    },
  ];

  // const itemsRefs = useRef<any>([]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("research_comeup");
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { threshold: 0 },
  //   );

  //   itemsRefs.current.forEach((ref: any) => {
  //     observer.observe(ref);
  //   });

  //   return () => {
  //     itemsRefs.current.forEach((ref: any) => {
  //       if (ref) {
  //         observer.unobserve(ref);
  //       }
  //     });
  //   };
  // }, []);
  const ref = useRef(null);
  const [start_anime, setstart_anime] = useState(false);
  const isinview = useInView(ref);

  useEffect(() => {
    if (isinview) {
      setstart_anime(isinview);
    }
  }, [isinview]);
  return (
    <>
      <div
        ref={ref}
        className="w-full md:px-[10vw] bg-[#D8DFD8]  md:gap-[2.3vw] md:flex md:py-[7vw] hidden flex-col"
      >
        <h1
          className={`text-[#5C3C43] uppercase md:text-[4vw] ${spline_font.className} font-medium`}
        >
          Recent Media
        </h1>

        <div className="w-full flex md:gap-[1.5vw] overflow-hidden ">
          {items.map((internal: any, index: any) => {
            return (
              <Link
                style={{ transition: `${(index + 1) / 2}s ease` }}
                href={internal.link}
                key={index}
                className={`md:w-[30.6vw] ${
                  start_anime ? "research_comeup" : "research_initial"
                }  md:rounded-[1.5vw] flex flex-col md:p-[0.3vw] group md:mt-[0.4vw] bg-white`}
              >
                <div className="overflow-hidden md:rounded-[1.5vw]">
                  <Image
                    src={internal.img}
                    alt={internal.caption}
                    style={{ transition: "0.8s ease" }}
                    className="w-full scale-[1.1] group-hover:scale-[1] h-fit"
                  />
                </div>

                <div className="overflow-hidden">
                  <p
                    className={` md:p-[1.5vw]   ${spline_font.className} font-bold md:text-[1vw]`}
                  >
                    {internal.caption}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* the see all btn */}
        <div className="w-full flex justify-center">
          <Link
            style={{
              whiteSpace: "nowrap",
              transition: "0.9s ease",
              // transform: start_anime ? "translate(0,0)" : "translate(0%,80%)",
            }}
            href={"/"}
            className={` ${Helvetica_light.className} uppercase overflow-hidden  md:p-[0.5vw] w-fit group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[2vw] bg-[black] backdrop-blur-2xl bg-opacity-[20%] `}
          >
            <div className="w-full h-full bg-[#440C0C] group-hover:bg-[#103210] md:rounded-[1.7vw] flex justify-center items-center  md:py-[0.7vw] md:px-[1.5vw]">
              <p className="inline-block md:text-[1vw] text-[white] group-hover:text-white">
                see all
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Recent_media;
