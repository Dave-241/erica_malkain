"use client";
import {
  Helvetica_light,
  Helvetica_medium,
  dm_sans_font,
  spline_font,
} from "@/app/utils/fonts";
import Image from "next/image";
import img_black from "../../../../public/images/publication/black.png";
import img_white from "../../../../public/images/publication/white.png";
import Link from "next/link";
import example from "../../../../public/images/publication/example.webp";
import { useEffect, useRef, useState } from "react";

const Recent_publication = () => {
  const items = [
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
  ];

  const itemsRefs = useRef<any>([]);
  //  const itemsRefs = useRef<any>([]);
  const [heights, setHeights] = useState<number[]>([]);
  const [active, setactive] = useState<any>(0);

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

  useEffect(() => {
    if (itemsRefs.current) {
      const newHeights = itemsRefs.current.map(
        (ref: any) => ref?.clientHeight || 0,
      );
      setHeights(newHeights);
    }
  }, [itemsRefs.current]);

  return (
    <>
      <div className="w-full md:gap-[6vw]  md:flex hidden md:px-[10vw] bg-[#D8DFD8] md:py-[5vw] flex-col">
        <h2
          className={`text-[#5C3C43] md:text-[5vw] uppercase ${spline_font.className} font-medium `}
        >
          Recent Publications
        </h2>

        <div className="flex flex-col md:gap-[2vw]">
          {items.map((e: any, index: any) => {
            return (
              <div
                key={index}
                style={{
                  transition: "0.7s ease",
                  height: active == index ? "" : heights[index] || "auto",
                }}
                onMouseEnter={() => setactive(index)}
                onMouseLeave={() => setactive(null)}
                className={`w-full overflow-hidden md:h-[37vw]  relative ${
                  active == index ? "border-none" : ""
                } flex-col flex justify-end     group border-b-[#565956] border-b-[0.1vw] `}
              >
                <div
                  className={` md:w-[46.5%]  flex justify-center items-center  ${
                    active == index ? "md:bottom-0" : "md:bottom-[100%]"
                  } absolute md:h-[37vw] overflow-hidden md:rounded-[1vw]`}
                  style={{
                    transition: "0.7s ease",
                  }}
                >
                  <div className="w-full h-full  relative">
                    {" "}
                    <Image
                      src={example}
                      alt={e.title}
                      style={
                        {
                          // transform: "translateX(-50%) translateY(-50%) ",
                        }
                      }
                      className={` w-full absolute h-fit left-[50%] top-[50%] translate-x-[-50%] scale-[1.1] translate-y-[-50%] `}
                    />
                  </div>
                </div>

                {/* first section which includes the s/n and also the title */}

                <div
                  className="w-full  research_initial   md:gap-[10vw] md:py-[1.2vw] border-opacity-[50%] flex justify-between   "
                  ref={(ref) => {
                    if (ref) {
                      itemsRefs.current[index] = ref;
                    }
                  }}
                >
                  <div
                    style={{
                      transition: "0.5s ease",
                    }}
                    className={`flex md:gap-[2vw] h-full  ${
                      active == index
                        ? "md:translate-x-[160%] md:translate-y-[-130%]"
                        : ""
                    } md:w-[35%] md:text-[1.2vw] items-center  ${
                      Helvetica_medium.className
                    }`}
                  >
                    <h2 className={`text-[#000000]  uppercase`}>{e.title}</h2>
                  </div>
                  {/* this includes body  and arrow  */}
                  <div className="flex md:gap-[1vw] md:w-[60%] justify-end items-center ">
                    <p
                      className={`text-[black] md:w-[80%] md:text-[1.1vw]  ${Helvetica_light.className}`}
                    >
                      {e.body}
                      {/* 434543 */}
                    </p>

                    <Link
                      href={"/"}
                      style={{ whiteSpace: "nowrap" }}
                      className={`flex justify-center bg-transparent items-center overflow-hidden border-opacity-[50%]  border-[black] border-[0.1vw] rounded-[100%]  md:w-[2.5vw] md:h-[2.5vw]  relative`}
                    >
                      <Image
                        src={img_black}
                        alt="arrow image"
                        style={{ transition: "0.5s ease" }}
                        className="w-[60%]  opacity-[100%] absolute absolute_center z-[10] h-fit"
                      />
                      {/* <Image
                        src={img_white}
                        alt="arrow image"
                        style={{ transition: "0.5s ease" }}
                        className="w-[60%] absolute hover:opacity-[100%]  opacity-[0%] absolute_center z-[10] h-fit"
                      /> */}

                      {/* <div
                        className="w-full h-full bg-[#440C0C] absolute left-0 top-[100%] group-hover:top-0 "
                        style={{ transition: "0.5s ease" }}
                      ></div> */}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recent_publication;
