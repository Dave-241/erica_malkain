"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bt_Beau_Regualr,
  Helvetica_light,
  spline_font,
} from "@/app/utils/fonts";
import example from "../../../../public/images/consultation/example.png";
import example2 from "../../../../public/images/consultation/example2.png";
import example3 from "../../../../public/images/consultation/example3.png";
import arrow from "../../../../public/images/consultation/arrow.png";
import Edit_each_consulation from "./edit_consulation";
import Delete_consultation from "./delete_consultation";
import Add_consultation from "./add_consultation";
import Modal_edit_consulation from "./modal_edit_add_consultation";
import { useColor } from "react-color-palette";
const Each_consultation = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // offset: ["end start", "end 50%"],
  });
  const width = globalThis.innerWidth;
  useEffect(() => {
    setcalwidth(width);
  }, [width]);
  const handleResize = () => {
    setcalwidth(globalThis.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Initial call to set the width on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  const [calwidth, setcalwidth] = useState(0);
  const [yvalue, setyvalue] = useState(1);
  const [height, setheight] = useState(1);
  const [isloggedin, setisloggedin] = useState(false);
  const [delete_consulation, setdelete_consulation] = useState(false);
  const [consultation_title, setconsultation_title] = useState("");
  const [consultation_body, setconsultation_body] = useState("");
  const [consultation_institute, setconsultation_institute] = useState("");
  const [consultation_year, setconsultation_year] = useState("");
  const [consultation_image_link, setconsultation_image_link] = useState("");
  const [consulation_readmore_link, setconsulation_readmore_link] =
    useState("");
  const [consultation_bg_color, setconsultation_bg_color] = useColor("#000000");
  const [consultation_heading_text_color, setconsultation_heading_text_color] =
    useColor("#000000");
  const [add_consulation, setadd_consulation] = useState(false);

  const data_array = [
    {
      bg: "#4CB163",
      institue: "Wharton University",
      year: "2023",
      heading: "NEGOTIATION COURSE",
      text: "#BFCFC5",
      img: example,
      link: "/",
      body: 'Erica teaches a course on Negotiations at The Wharton School at the University of Pennsylvania, for which she has received a Wharton Teaching Excellence award. Her course has received an average rating of 3.8/4.0 and consistently receives among the highest marks in "overall quality" across the entire Wharton School. Erica was named one of <a href="malkain.com"> Poets&Quants 50 Best Professors of 2023. </a>',
    },
    {
      bg: "#2F8F45",
      institue: "Wet Cement",
      heading: "Workshops",
      year: "2024",
      img: example2,
      link: "/",

      text: "#B2EECA",
      body: 'Erica works with <a href="malkain.com"> Wet Cement </a>, a purpose-driven company whose mission is to empower people, teams, and organizations to fearlessly achieve their potential, to co-design and <a href="malkain.com"> lead Wet Cements Win-Win Negotiations training </a>.  Wet Cement especially aims to empower women and other members of underrepresented groups at the negotiating table, so that they can more effectively advance their careers. ',
    },
    {
      bg: "#1A6E30",
      institue: "Behavioralize",
      heading: "BEHAVIORAL SCIENCE CONSULTING",
      year: "2023",
      img: example3,
      link: "/",

      text: "#8DCE9F",
      body: "Erica is a consultant with <a href='malkain.com'> Behavioralize </a> , a data-driven company that applies behavioral science to understand and influence customer and managerial decision making, helping companies drive growth by identifying and solving their key behavioral challenges",
    },
  ];

  const y = useTransform(scrollYProgress, [0, 1], [1, data_array.length + 0.5]);
  const parent_height = useTransform(scrollYProgress, [0, 1], [1, 10]);

  useMotionValueEvent(y, "change", (latest) => {
    setyvalue(latest);
  });

  useMotionValueEvent(parent_height, "change", (latest) => {
    setheight(latest);
  });

  const edit_each_consulation_modal_param = (
    title: any,
    body: any,
    institue: any,
    year: any,
    read_more: any,
    img: any,
    bg_color: any,
    text_color: any,
  ) => {
    setconsultation_title(title);
    setconsultation_body(body);
    setconsultation_institute(institue);
    setconsultation_year(year);
    setconsulation_readmore_link(read_more);
    setconsultation_image_link(img);
    setconsultation_bg_color((prevstate) => ({
      ...prevstate,
      hex: bg_color,
    }));
    setconsultation_heading_text_color((prevstate) => ({
      ...prevstate,
      hex: text_color,
    }));
    setadd_consulation(true);
  };

  const refresh_all_params = () => {
    setconsultation_title("");
    setconsultation_body("");
    setconsultation_institute("");
    setconsultation_year("");
    setconsultation_image_link("");
    setconsultation_bg_color((prevstate) => ({
      ...prevstate,
      hex: "#000000",
    }));
    setconsultation_heading_text_color((prevstate) => ({
      ...prevstate,
      hex: "#000000",
    }));
    setadd_consulation(true);
  };
  return (
    <>
      {/* buttons to add consultation */}
      {isloggedin && (
        <Add_consultation
          // refresh_all_params={refresh_all_params}
          setconsultation_title={setconsultation_title}
          setdelete_consulation={setdelete_consulation}
          refresh_all_params={refresh_all_params}
        />
      )}

      {/* buttons to delete consultation */}
      {delete_consulation && (
        <Delete_consultation
          setdelete_consulation={setdelete_consulation}
          title={consultation_title}
        />
      )}

      {/* edit contents */}
      {add_consulation && (
        <Modal_edit_consulation
          setadd_consulation={setadd_consulation}
          consultation_title={consultation_title}
          setconsultation_title={setconsultation_title}
          consultation_body={consultation_body}
          setconsultation_body={setconsultation_body}
          consultation_institute={consultation_institute}
          setconsultation_institute={setconsultation_institute}
          consultation_year={consultation_year}
          setconsultation_year={setconsultation_year}
          consultation_image_link={consultation_image_link}
          setconsultation_image_link={setconsultation_image_link}
          consulation_readmore_link={consulation_readmore_link}
          setconsulation_readmore_link={setconsulation_readmore_link}
          consultation_bg_color={consultation_bg_color}
          setconsultation_bg_color={setconsultation_bg_color}
          consultation_heading_text_color={consultation_heading_text_color}
          setconsultation_heading_text_color={
            setconsultation_heading_text_color
          }
        />
      )}
      {/* the wrapper */}
      <div
        className="w-full md:h-[150vw] flex  items-end  
         relative"
        style={{
          height:
            calwidth > 768
              ? `${data_array.length * 100}vh`
              : `${data_array.length * 120}vh`,
        }}
        ref={sectionRef}
      >
        <div className="flex  justify-center items-center   sticky bottom-0 h-[100vh]  w-full ">
          {/* the customize scroll bar starts */}
          <div className="absolute md:right-[3vw] z-[10] border-[#0e257756]  flex w-[2%] right-[1.5%]  top-[50%] translate-y-[-50%] md:w-[0.6vw] rounded-[3vw]  lg:h-[28vw] md:h-[40vw] bg-black mix-blend-overlay border2 h-[140vw]  overflow-hidden">
            <div
              className="w-full    bg-[#0E2477]"
              style={{ height: `${height * 10}%` }}
            ></div>
          </div>
          {/* the customized scroll bar ends */}
          {data_array.map((e: any, index: any) => {
            return (
              <div
                key={index}
                className={` absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]  w-full md:gap-[4vw] flex flex-col justify-center items-center  h-full  overflow-hidden   `}
                style={{
                  transition: "opacity 0.6s ease",
                  backgroundColor: e.bg,
                  transform:
                    index + 1 - yvalue >= 0 && index + 1 - yvalue <= 1
                      ? `translateY(${
                          (index + 2 - yvalue) * 100 - 150 * (-index + yvalue)
                        }%) translateX(-50%)`
                      : index + 1 - yvalue <= 0
                      ? ``
                      : `translateY(${
                          yvalue + 1 + index * 100
                        }%) translateX(-50%)`,
                }}
              >
                {isloggedin && (
                  <Edit_each_consulation
                    edit_each_consulation_modal_param={
                      edit_each_consulation_modal_param
                    }
                    setdelete_consulation={setdelete_consulation}
                    setconsultation_title={setconsultation_title}
                    title={e.heading}
                    body={e.body}
                    bg={e.bg}
                    text_color={e.text}
                    img={e.img}
                    institue={e.institue}
                    year={e.year}
                    read_more={e.link}
                  />
                )}
                <div className="flex md:px-[10vw] justify-between w-full ">
                  {/* the left section */}
                  <div
                    className="flex  flex-col  md:w-[30vw] md:gap-[4vw]"
                    style={{ backgroundColor: e.bg }}
                  >
                    <h2
                      className={` ${spline_font.className} font-semibold md:text-[4vw] md:leading-[4.4vw]`}
                      style={{ color: e.text }}
                    >
                      {e.heading}
                    </h2>

                    <Image
                      src={e.img}
                      alt={e.heading}
                      className="w-full h-fit md:rounded-[6vw]"
                    />
                  </div>

                  {/* now the writing  */}
                  <div className=" md:w-[30vw] flex flex-col md:gap-[2vw]">
                    <p
                      className={` ${Helvetica_light.className} border-l-[0.3vw] border-[white] md:pl-[1vw] md:py-[1vw] text-[white] md:text-[1vw] [&_a]:underline underline-offset-4`}
                      dangerouslySetInnerHTML={{ __html: e.body }}
                    ></p>

                    <Link
                      href={e.link}
                      className={` ${Bt_Beau_Regualr.className} md:text-[1vw] md:w-[10vw] flex justify-center items-center md:h-[2.6vw]  border-[white] border-[0.1vw] md:rounded-[3.7vw]  md:ml-[1vw] group relative overflow-hidden`}
                    >
                      <p
                        style={{ transition: "0.5s ease" }}
                        className="group-hover:text-white z-[10] text-[white]"
                      >
                        {" "}
                        Read more{" "}
                      </p>

                      {/* <Image
                        src={arrow}
                        alt="arrow"
                        className="md:w-[1.7vw] z-[10] h-fit"
                      /> */}
                      <div
                        className="w-full h-full bg-[#440C0C] absolute left-0 top-[100%] group-hover:top-0 "
                        style={{ transition: "0.5s ease" }}
                      ></div>
                    </Link>
                  </div>
                </div>
                {/* institue and location segment */}
                <div
                  className={` ${Bt_Beau_Regualr.className} w-full border-y border-[white]  md:py-[1.6vw] flex justify-center items-center md:gap-[4vw] text-white text-opacity-[100%] md:text-[1.1vw] md:px-[10vw]`}
                >
                  <p className="" style={{ whiteSpace: "nowrap" }}>
                    {e.institue}
                  </p>
                  <div className="w-full relative md:h-[0.1vw] bg-[white]  flex justify-end items-center">
                    <div className="md:w-[0.4vw] md:h-[0.4vw] rounded-[100%] bg-[white]   "></div>
                  </div>
                  <p className="" style={{ whiteSpace: "nowrap" }}>
                    ({e.year})
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Each_consultation;
