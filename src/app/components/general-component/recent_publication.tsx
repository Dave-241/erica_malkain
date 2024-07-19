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
import { useEffect, useRef } from "react";

const Recent_publication = () => {
  const items = [
    {
      title: " first THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023. ",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/firs_data",
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
                className="w-full overflow-hidden  border-b-[#565956] border-b-[0.1vw] "
              >
                {/* first section which includes the s/n and also the title */}
                <div
                  className="w-full  research_initial md:gap-[10vw] md:py-[1.2vw] border-opacity-[50%] flex justify-between   "
                  ref={(ref) => {
                    if (ref) {
                      itemsRefs.current[index] = ref;
                    }
                  }}
                >
                  <div
                    className={`flex md:gap-[2vw] md:text-[1.2vw] items-center  ${Helvetica_medium.className}`}
                  >
                    <h2 className={`text-[#000000]  uppercase`}>{e.title}</h2>
                  </div>
                  {/* this includes body  and arrow  */}
                  <div className="flex md:gap-[1vw] justify-end items-center ">
                    <p
                      className={`text-[#434543] md:w-[80%] md:text-[1.1vw]  ${Helvetica_light.className}`}
                    >
                      {e.body}
                    </p>

                    <Link
                      href={"/"}
                      style={{ whiteSpace: "nowrap" }}
                      className={`flex justify-center bg-transparent items-center overflow-hidden border-opacity-[50%]  border-[#565956] border-[0.1vw] rounded-[100%]  md:w-[2.5vw] md:h-[2.5vw] group relative`}
                    >
                      <Image
                        src={img_black}
                        alt="arrow image"
                        style={{ transition: "0.5s ease" }}
                        className="w-[60%] group-hover:opacity-[0%] opacity-[100%] absolute absolute_center z-[10] h-fit"
                      />
                      <Image
                        src={img_white}
                        alt="arrow image"
                        style={{ transition: "0.5s ease" }}
                        className="w-[60%] absolute group-hover:opacity-[100%]  opacity-[0%] absolute_center z-[10] h-fit"
                      />

                      <div
                        className="w-full h-full bg-[#440C0C] absolute left-0 top-[100%] group-hover:top-0 "
                        style={{ transition: "0.5s ease" }}
                      ></div>
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
