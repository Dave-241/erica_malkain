"use client";

import Image from "next/image";
import exit from "../../../../public/images/contact/exit.png";
import { useEffect, useState } from "react";
import {
  Bricolage_grotesk_bold,
  Helvetica_bold,
  Helvetica_light,
  Helvetica_medium,
} from "@/app/utils/fonts";
const Contact_form = ({ setopen_contact_form, prop_email, prop_body }: any) => {
  const [start_anime, setstart_anime] = useState(false);
  const [movement, setmovement] = useState(false);
  const [email, setemail] = useState(prop_email ? prop_email : "");
  const [name, setname] = useState("");
  const [tel, settel] = useState("");
  const [body, setbody] = useState(prop_body ? prop_body : "");

  useEffect(() => {
    setstart_anime(true);
  }, []);

  const hide = () => {
    setstart_anime(false);
    setTimeout(() => {
      setopen_contact_form(false);
    }, 400);
  };
  return (
    <>
      <div
        onClick={() => {
          hide();
        }}
        style={{
          transition: "0.5s ease",
        }}
        className={` ${
          start_anime ? "bg-opacity-[69%] backdrop-blur-xl" : "bg-opacity-[0%]"
        } bg-black overflow-y-scroll h-[100vh] gap-[2rem] py-[10vw] md:py-[3vw]  items-center  w-full fixed top-0 left-0 z-[3000] `}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{ transition: "0.9s ease", opacity: start_anime ? 1 : 0 }}
          className=" border2 mx-auto md:w-[32vw] md:py-[3%] md:px-[2%] px-[4%] py-[10%] w-[96%] relative bg-white gap-[10vw] md:gap-[2vw] flex flex-col rounded-[7vw] md:rounded-[2vw] overflow-hidden"
        >
          <Image
            src={exit}
            style={{ transition: "0.9s ease", opacity: start_anime ? 1 : 0 }}
            alt="exit"
            className="md:w-[3vw] w-[10vw] cursor-pointer h-fit absolute md:top-[2.2vw] top-[6vw] right-[4%]"
          />
          <p
            className={`${Helvetica_bold.className} md:text-[1.2vw]  text-center`}
          >
            Get in touch with me
          </p>
          <form
            className={` ${Helvetica_medium.className} w-full flex flex-col items-center md:gap-[1.2vw] gap-[7vw] md:text-[1.1vw]`}
          >
            <input
              type="text"
              className="bg-[#EBF3EC] focus:border border-none outline-none md:px-[4%] placeholder:text-[#000000] md:rounded-[1vw] md:h-[3.4vw] h-[15vw] rounded-[3vw] px-[5%] w-full"
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name || ""}
              autoComplete="name"
              placeholder="Your name"
            />
            <input
              type="text"
              className="bg-[#EBF3EC] focus:border border-none outline-none md:px-[4%] placeholder:text-[#000000] md:rounded-[1vw] md:h-[3.4vw] h-[15vw] rounded-[3vw] px-[5%] w-full"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email || ""}
              autoComplete="email"
              placeholder="Your email"
            />
            <input
              type="tel"
              className="bg-[#EBF3EC] focus:border border-none outline-none md:px-[4%] placeholder:text-[#000000] md:rounded-[1vw] md:h-[3.4vw] h-[15vw] rounded-[3vw] px-[5%] w-full"
              onChange={(e) => {
                settel(e.target.value);
              }}
              value={tel || ""}
              autoComplete="tel"
              placeholder="Your number"
            />
            <textarea
              rows={5}
              value={body || ""}
              onChange={(e) => {
                setbody(e.target.value);
              }}
              className="resize-none bg-[#EBF3EC] focus:border border-none outline-none md:p-[4%] md:rounded-[1vw] w-full placeholder:text-[#000000]  rounded-[3vw] p-[5%]"
              placeholder="Extra text"
            ></textarea>

            <button
              style={{
                whiteSpace: "nowrap",
                transition: "0.5s ease",
              }}
              className={` ${Bricolage_grotesk_bold.className} uppercase overflow-hidden w-fit  md:p-[0.5vw]  p-[2vw] rounded-[8vw] group hover:[#103210]   hover:bg-opacity-[20%]  md:rounded-[2vw] bg-[black] backdrop-blur-2xl bg-opacity-[10%] `}
            >
              <div className="w-full h-full bg-[#440C0C] group-hover:bg-[#103210] md:rounded-[1.5vw] rounded-[7vw]  flex justify-center items-center py-[2.5vw] px-[15vw] md:py-[0.8vw] md:px-[4vw]">
                <p className="inline-block md:text-[1vw] text-[white] group-hover:text-white">
                  SUBMIT
                </p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact_form;
