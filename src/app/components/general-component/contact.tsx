"use client";

import {
  Helvetica_light,
  Helvetica_medium,
  spline_font,
} from "@/app/utils/fonts";
import arrow from "../../../../public/images/contact/arrow.png";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="w-full  md:py-[6vw] md:flex hidden justify-between items-start md:px-[14vw]">
        {/* the left section */}
        <div className="flex flex-col md:w-[30vw]  md:gap-[2vw]">
          <h3
            className={`${spline_font.className} font-semibold md:text-[4.4vw] text-[#5C3C43]  md:leading-[4.4vw]`}
          >
            CONTACT ME
          </h3>
          <p
            className={`text-[#000000] ${Helvetica_light.className} md:text-[1.2vw]`}
          >
            Lets talk about research, seminars and educational studies
          </p>
        </div>

        {/* the right section , and i mean the input section */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={` ${Helvetica_light.className} relative md:w-[27vw]   md:h-[4.7vw]`}
        >
          <input
            type="text"
            placeholder="Talk to me"
            className=" outline-none border-b-[0.2vw] border-opacity-[40%] border-[#000000] md:pb-[0.7vw] w-full h-full bg-transparent md:pl-[0.5vw] focus:border-[#103210] focus:border-opacity-[100%] transition duration-[0.6s] md:pr-[5vw] placeholder:text-[#000000] md:text-[1.6vw]"
          />

          <button type="submit" className={`absolute top-0 md:right-[5%]`}>
            <Image src={arrow} alt="arrow" className="md:w-[3vw] h-fit" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
