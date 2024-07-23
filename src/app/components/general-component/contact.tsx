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
      <div className="w-full  md:py-[6vw] flex md:flex-row flex-col px-[3%] py-[20vw]  justify-between items-start md:px-[14vw] gap-[10vw]">
        {/* the left section */}
        <div className="flex flex-col gap-[4vw] md:w-[30vw]  md:gap-[2vw]">
          <h3
            className={`${spline_font.className} font-semibold md:text-[4.4vw] text-[#5C3C43]  md:leading-[4.4vw] text-[12vw] leading-[13vw]`}
          >
            CONTACT ME
          </h3>
          <p
            className={`text-[#000000] md:pr-0 pr-[5%] ${Helvetica_light.className} md:text-[1.2vw] text-[5vw] md:leading-[1.5vw] leading-[6vw]`}
          >
            Lets talk about research, seminars and educational studies
          </p>
        </div>

        {/* the right section , and i mean the input section */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={` ${Helvetica_light.className} relative md:w-[30vw]     flex flex-col md:gap-[2vw]  w-full gap-[5vw] `}
        >
          <input
            type="text"
            placeholder="Eg example@gmail.com"
            className=" outline-none border-b-[0.2vw] border-opacity-[40%] border-[#000000] md:pb-[0.7vw] w-full h-[13vw] pb-[1vw] md:h-[4vw] bg-transparent md:pl-[0.5vw] pl-[1.7vw] focus:border-[#103210] focus:border-opacity-[100%] transition duration-[0.6s] md:pr-[5vw] placeholder:text-[#000000] md:text-[1.2vw] text-[4vw]"
          />
          <div className="relative  w-full md:h-[7vw] h-[27vw] ">
            <textarea
              // type="text"
              placeholder="If you're interested in booking Erica for an event, workshop, consulting, or collaborating as a social science researcher, let's talk"
              className=" outline-none  border-b-[0.2vw] border-opacity-[40%] border-[#000000] md:pb-[0.7vw] w-full h-full bg-transparent md:pl-[0.5vw] pb-[2vw] pl-[1.7vw] focus:border-[#103210] focus:border-opacity-[100%] transition duration-[0.6s] md:pr-[5vw] pr-[17vw] placeholder:text-[#000000] md:text-[1.2vw] text-[4vw] resize-none"
            ></textarea>

            <button
              type="submit"
              className={`absolute top-[50%] translate-y-[-50%] right-[5%]`}
            >
              <Image
                src={arrow}
                alt="arrow"
                className="md:w-[3vw] w-[10vw] h-fit"
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
