"use client";

import {
  Helvetica_light,
  Helvetica_medium,
  Media_san_regular,
} from "@/app/utils/fonts";
import Link from "next/link";
import img from "../../../../public/images/footer/telegram.png";
import Image from "next/image";

const Footer = () => {
  const socai_items = [
    {
      link: "/",
      text: "Google Scholar",
      logo: "",
    },
    {
      link: "/",
      text: "Linked in",
      logo: "",
    },
    {
      link: "/",
      text: "Twitter",
      logo: "",
    },
  ];

  return (
    <>
      <div className="w-full  md:p-[1.5vw]">
        <div className="w-full flex flex-col md:gap-[3vw] bg-[#001901] md:px-[4vw] md:pt-[4vw] md:pb-[2vw] md:rounded-[1.3vw] items-center">
          {/* footer name */}
          <div className="flex flex-col md:gap-[1.5vw] items-center ">
            <div className="w-full flex justify-center">
              <h2
                className={`text-white ${Media_san_regular.className} text-center md:text-[6vw] uppercase font-light md:leading-[5.5vw]`}
              >
                {" "}
                <span
                  className={`text-[#464646] inline-flex items-baseline md:text-[5vw] font-bold md:ml-[-1vw] md:gap-[2vw] md:leading-[5.2vw] ${Media_san_regular.className} `}
                >
                  ©
                </span>{" "}
                ERICA J. <br /> BOOTHBY
              </h2>
            </div>

            {/* the footer socail links */}
            <div
              className={`w-full flex justify-center md:gap-[4vw] items-center ${Helvetica_light.className} `}
            >
              {socai_items.map((e: any, index: any) => {
                return (
                  <Link
                    href={"/"}
                    key={index}
                    className={`border-[#A1AAA1] overflow-hidden border-opacity-[50%] md:w-[15vw] md:rounded-[2vw] md:h-[5vw] border flex justify-center items-center md:text-[1vw] text-white md:gap-[1vw] group relative`}
                  >
                    <p
                      className="z-[10] group-hover:text-black"
                      style={{ transition: "0.5s ease" }}
                    >
                      {e.text}
                    </p>
                    <Image
                      src={img}
                      className="md:w-[2vw] z-[10]"
                      alt={e.text}
                    />
                    <div
                      className="w-full h-full bg-[#D9D9D9] absolute left-0 top-[100%] group-hover:top-0 "
                      style={{ transition: "0.5s ease" }}
                    ></div>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* fotter line */}
          <div className=" w-full  flex justify-start   md:h-[0.05vw] ">
            <div
              style={{
                // width: start_anime ? "100%" : "0%",
                transition: "0.5s ease",
              }}
              className="w-full h-full bg-[#2B3F2C] transition  duration-[0.4s]"
            ></div>
          </div>

          {/* footer copyright */}
          <div
            className={` ${Helvetica_light.className}  w-full flex justify-between items-center text-[#6F7E70] md:px-[1vw] md:text-[1vw]`}
          >
            <p className="">©2024</p>
            <a href="mailto:ericajboothby@gmail.com" className="">
              ericajboothby@gmail.com
            </a>
            <Link href="malkain.com" className="">
              Design & Dev By Malkain
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
