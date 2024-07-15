"use client";
import Image from "next/image";
import hero from "../../../../public/images/home/hero.webp";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { eb_gramond_italic_font } from "@/app/utils/fonts";

const Hero_home = () => {
  const [start_anime, setstart_anime] = useState(false);
  useEffect(() => {
    setstart_anime(true);
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end start", "end 110%"],
    offset: ["2% 2%", "150% end"],
  });
  const [yvalue, setyvalue] = useState(1);

  const y = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  useMotionValueEvent(y, "change", (latest) => {
    setyvalue(latest);
  });
  return (
    <>
      <div
        ref={ref}
        className="w-full md:flex md:px-[10vw] md:pb-[15vw] hidden flex-col justify-end  overflow-hidden md:h-[62vw] relative text-[#DFE4DF]"
      >
        <Image
          style={{
            transition: yvalue > 1 ? "" : "0.45s ease",
            // opacity: start_anime ? 1 : 0,
            transform: `translate(-50%,-50%) scale(${
              start_anime ? yvalue : 1.4
            })`,
            filter: start_anime ? "" : "blur(10px)",
          }}
          src={hero}
          alt="hero image"
          className="absolute_center left-[50%] top-[50%] absolute w-full h-fit"
        />
        <div className="w-full h-full left-0 top-0 z-[10] absolute bg-black bg-opacity-[43%]"></div>
        {/* left text */}
        <h1
          style={{
            transition: "0.65s ease",
            transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
          }}
          className={`md:text-[15vw] z-[10] md:leading-[16.5vw]     ${eb_gramond_italic_font.className}`}
        >
          Erica
        </h1>

        {/* right text */}
        <h1
          style={{
            transition: "0.65s ease",
            transform: start_anime ? "translate(0,0)" : "translate(0%,100%)",
          }}
          className={`md:text-[15vw]  md:leading-[16.5vw] z-[10]   text-end  ${eb_gramond_italic_font.className}`}
        >
          Boothby
        </h1>
      </div>
    </>
  );
};

export default Hero_home;
