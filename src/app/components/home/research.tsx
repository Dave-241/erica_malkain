"use client";
import { dm_sans_font, spline_font } from "@/app/utils/fonts";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import arrow from "../../../../public/images/home/arrow.png";
import example from "../../../../public/images/home/example.webp";
import Image from "next/image";
import Link from "next/link";

const Home_research = () => {
  const items = [
    {
      first: true,
    },
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

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

  const { scrollYProgress: scrollYProgress_img } = useScroll({
    target: ref,
    offset: ["10% 10%", "100% end"], // Start calculating at 40% of the ref element, end at 80%
  });
  //   this is to opac the image

  const [translate_value, settranslate_value] = useState(-50);

  const translate_value_calc = useTransform(
    scrollYProgress_img,
    [0, 1],
    [0, (100 / items.length) * (items.length - 3.55)],
  );
  useMotionValueEvent(translate_value_calc, "change", (latest) => {
    settranslate_value(latest);
  });
  const [width_for_progress, setwidth_for_progress] = useState(1);

  const parent_width_for_progress = useTransform(
    scrollYProgress_img,
    [0, 1],
    [1, 10],
  );

  useMotionValueEvent(parent_width_for_progress, "change", (latest) => {
    setwidth_for_progress(latest);
  });

  return (
    <>
      <div
        ref={ref}
        className="w-full md:block hidden relative  md:my-[10vw]"
        style={{ height: calWidth > 768 ? `${items.length * 50}vh` : "" }}
      >
        {/* this is the section for the scrollable elements */}
        <div className="w-full h-[100vh] sticky top-0 left-0 flex items-center ">
          <div className="w-full  absolute  top-[50%] translate-y-[-50%]  md:min-h-[32vw]  overflow-hidden  ">
            <div
              className={`md:w-[25vw]  via-[#DFE4DF]  bg-gradient-to-r from-[#DFE4DF]   z-[10] flex  justify-center items-center md:h-full   absolute left-0 md:gap-[1vw] `}
            >
              {/* <div className="absolute left-0 h-full bg-[#DFE4DF] top-0 w-[60%]"></div>
              <div className="absolute right-0 h-full via-[#DFE4DF]  bg-gradient-to-r from-[#DFE4DF]  top-0 w-[40%]"></div> */}

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
              style={{ transform: `translateX(-${translate_value}%)` }}
              className="absolute boder2 md:gap-[1.2vw] md:px-[1.5vw] flex h-full top-0 left-[22vw]"
            >
              {items.map((e: any, index: any) => {
                return (
                  <Link
                    href={"/"}
                    key={index}
                    className={`md:w-[20vw] group  flex flex-col justify-between  md:h-full `}
                  >
                    <div className="w-full md:h-[27vw]  md:rounded-[1.5vw]  overflow-hidden relative flex justify-center items-center ">
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
                      className={`${dm_sans_font.className} md:pl-[0.5vw] uppercase md:pr-[3vw] font-medium md:text-[1.2vw]`}
                    >
                      Do we know what people think of us?
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>{" "}
          <div className="absolute md:right-[3vw] z-[10] border-[#0e257756]  flex w-[2%] left-[50%] translate-x-[-50%]  bottom-[8%] translate-y-[100%] md:w-[50%] rounded-[3vw]   md:h-[0.35vw]  bg-white border-[#103210] border border-opacity-[20%] overflow-hidden">
            <div
              className="w-full  bg-[#103210]"
              style={{ width: `${width_for_progress * 10}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_research;
