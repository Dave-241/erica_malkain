"use client";

import { Helvetica_light, spline_font } from "@/app/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import banner from "../../../../public/images/consultation/banner.webp";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Consulation_advert = () => {
  //   this is to handle scrolling
  const ref = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref,
    offset: ["0% 0%", "100% end"], // Start when the container starts entering, end when the entire container is in the viewport
  });
  const [bg_img, setbg_img] = useState(0);

  const bg_img_value = useTransform(scrollYProgress1, [0, 1], [1.1, 1]);
  useMotionValueEvent(bg_img_value, "change", (latest) => {
    setbg_img(latest);
  });

  return (
    <>
      <div
        ref={ref}
        className="w-full  md:py-[10vw] flex justify-center items-center"
      >
        <div className="md:w-[90vw] md:h-[40vw]  overflow-hidden md:rounded-[1.5vw] flex">
          <div className="w-[50%] h-full  relative">
            <Image
              src={banner}
              alt="banner image"
              className="w-full h-fit absolute_center absolute"
              style={{ scale: bg_img, transition: "0.2s ease" }}
            />
          </div>
          <div className="w-[50%] bg-[#440C0C] md:px-[5%]  h-full  flex flex-col justify-center md:gap-[2vw] items-center">
            <h4
              className={`text-white ${spline_font.className}  md:leading-[2.4vw] font-bold md:text-[2vw]`}
            >
              TEACHING / TRAINING / CONSULTATING
            </h4>

            <p
              className={`text-white md:text-[1vw] ${Helvetica_light.className}`}
            >
              Erica teaches a course on Negotiations at The Wharton School at
              the University of Pennsylvania, for which she has received a
              Wharton Teaching Excellence award. Her course has received an
              average rating of 3.8/4.0 and consistently receives among the
              highest marks in overall quality across the entire Wharton School.
              Erica was named one of Poets&Quants 50 Best Professors of 2023.
            </p>
            <div className="flex w-full">
              <Link
                style={{
                  whiteSpace: "nowrap",
                  transition: "0.9s ease",
                  // transform: start_anime ? "translate(0,0)" : "translate(0%,80%)",
                }}
                href={"/"}
                className={` ${Helvetica_light.className} uppercase overflow-hidden  md:p-[0.5vw] group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[2vw] bg-[white] backdrop-blur-2xl bg-opacity-[20%] `}
              >
                <div className="w-full h-full bg-[white] group-hover:bg-[#103210] md:rounded-[1.7vw] flex justify-center items-center  md:py-[0.7vw] md:px-[1.5vw]">
                  <p className="inline-block md:text-[1vw] text-[#440C0C] group-hover:text-white">
                    see all
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consulation_advert;
