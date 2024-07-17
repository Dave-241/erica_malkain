"use client";
import { dm_sans_font, spline_font } from "@/app/utils/fonts";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import arrow from "../../../../public/images/home/arrow.png";
import example from "../../../../public/images/home/example.webp";
import Image from "next/image";
import Link from "next/link";

const Home_research = () => {
  const items = ["", "", "", "", ""];

  const [calWidth, setCalWidth] = useState(0);
  const width = globalThis.innerWidth;
  const handleResize = () => {
    setCalWidth(globalThis.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Initial call to set the width on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  useEffect(() => {
    handleResize();
  }, [width]);
  //   this is to handle scrolling
  const ref = useRef(null);

  //   this is for switching animation values
  const [opac_animation, setopac_animation] = useState(1);
  const [switch_animation_value, setswitch_animation_value] = useState(100);

  const { scrollYProgress: scrollYProgress_img } = useScroll({
    target: ref,
    offset: ["-40% -40%", "100% end"], // Start calculating at 40% of the ref element, end at 80%
  });
  const { scrollYProgress: scrollYProgress_opac_text } = useScroll({
    target: ref,
    offset: ["-10% -10%", "40% end"], // Start calculating at 40% of the ref element, end at 80%
  });
  const { scrollYProgress: scrollYProgress_animation_value } = useScroll({
    target: ref,
    offset: ["-120% -120%", "40% end"], // Start calculating at 40% of the ref element, end at 80%
  });
  //   this is to opac the image

  const [translate_value, settranslate_value] = useState(10);

  const animation_value_calc = useTransform(
    scrollYProgress_animation_value,
    [0, 1],
    [100, 0],
  );

  // for the scroll to view text
  const animation_opac_text = useTransform(
    scrollYProgress_opac_text,
    [0, 1],
    [1, 0],
  );
  useMotionValueEvent(animation_value_calc, "change", (latest) => {
    setswitch_animation_value(latest);
  });
  useMotionValueEvent(animation_opac_text, "change", (latest) => {
    setopac_animation(latest);
  });

  //   this is for setting the actual movemet
  const translate_value_calc = useTransform(
    scrollYProgress_img,
    [0, 1],
    [10, -(100 / items.length) * (items.length - 2.8)],
  );
  useMotionValueEvent(translate_value_calc, "change", (latest) => {
    settranslate_value(latest);
  });

  const parent_width_for_progress = useTransform(
    scrollYProgress_img,
    [0, 1],
    [1, 10],
  );

  return (
    <>
      <div
        ref={ref}
        className="w-full md:block hidden  relative  md:mb-[10vw]"
        style={{ height: calWidth > 768 ? `${items.length * 50}vh` : "" }}
      >
        {/* this is the section for the scrollable elements */}
        <div className="w-full h-[100vh] flex-col justify-center sticky top-0 left-0 flex md:gap-[2vw] overflow-hidden ">
          <h2
            style={{
              transform: `translateX(-${switch_animation_value}%)`,
            }}
            className={`${spline_font.className} z-[60]  md:text-[7vw] md:px-[10vw] font-medium text-[#5C3C43]  md:leading-[7vw]`}
          >
            RESEARCH
          </h2>
          <div className="w-full relative   md:min-h-[33vw]  overflow-hidden  ">
            <div
              style={{
                opacity: opac_animation,
              }}
              className={`md:w-[25vw]   bg-[#DFE4DF] z-[5]   flex  justify-center items-center md:h-full   absolute left-0 md:gap-[1vw] `}
            >
              <p
                className={`${spline_font.className} z-[10] md:text-[1vw] font-bold`}
              >
                SCROLL TOO SEE MORE
              </p>
              <Image
                src={arrow}
                alt="arrow"
                className="md:w-[2.4vw] z-[10] h-fit"
              />
            </div>

            <div
              style={{
                transform: `translateX(${translate_value}%)`,
              }}
              className="absolute  md:gap-[1.2vw]  md:px-[1.5vw] z-[10] flex h-full top-0 left-[22vw]"
            >
              {items.map((e: any, index: any) => {
                return (
                  <Link
                    href={"/"}
                    key={index}
                    className={`md:w-[26vw] group  flex flex-col justify-between  md:h-full `}
                  >
                    <div className="w-full md:h-[29vw]  md:rounded-[1.5vw]  overflow-hidden relative flex justify-center items-center ">
                      <Image
                        src={example}
                        alt={e.title}
                        style={{
                          transition: "0.7s ease",
                          //   transform: `translate(-50%,-50%)`,
                        }}
                        className="w-full  group-hover:scale-[1] scale-[1.1]   h-fit"
                      />
                    </div>

                    <p
                      className={`${dm_sans_font.className} md:pl-[0.5vw] uppercase md:pr-[2vw] font-medium md:text-[1.1vw]`}
                    >
                      Do we know what people think of us ? people think of us?
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Home_research;
