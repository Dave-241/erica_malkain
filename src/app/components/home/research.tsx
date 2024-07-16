"use client";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const [calc_value, setcalc_value] = useState(
    (100 / items.length) * (items.length - 3.1),
  );

  useEffect(() => {
    setcalc_value((100 / items.length) * (items.length - 2.1));
  }, []);
  const translate_value_calc = useTransform(
    scrollYProgress_img,
    [0, 1],
    // [0, items.length - (items.length / 2) * 25],
    // [0, (items.length / (items.length - 1)) * 53],
    [0, (100 / items.length) * (items.length - 3.1)],
  );
  useMotionValueEvent(translate_value_calc, "change", (latest) => {
    settranslate_value(latest);
  });

  return (
    <>
      <div
        ref={ref}
        className="w-full md:block hidden relative border2 md:my-[10vw]"
        style={{ height: calWidth > 768 ? `${items.length * 50}vh` : "" }}
      >
        {items.length * 50}
        {/* this is the section for the scrollable elements */}
        <div className="w-full h-[100vh] sticky top-0 left-0 flex items-center ">
          <div className="w-full border2 absolute  top-[50%] translate-y-[-50%]  md:min-h-[32vw]  overflow-hidden  border2">
            <div
              className={`md:w-[25vw] bg-[#DFE4DF] md:h-full border2  absolute left-0`}
            ></div>
            <div
              style={{ transform: `translateX(-${translate_value}%)` }}
              className="absolute boder2 md:gap-[1.2vw] md:px-[1.5vw] flex h-full top-0 left-[25vw]"
            >
              {/* <div className={`md:w-[25vw] bg-white md:h-full border2`}></div> */}
              {items.map((e: any, index: any) => {
                return (
                  <div
                    key={index}
                    className={`md:w-[25vw] bg-white md:h-full border2`}
                  >
                    index : {index} <br />
                    {items.length - 1}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_research;
