"use client";

import { Bt_Beau_Regualr } from "@/app/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import exit from "../../../../public/images/general/exit.png";
import { useEffect, useState } from "react";

const Mobile_nav = ({ items, mobile_nav, setopen_menu, show_media }: any) => {
  const [start_anime, setstart_anime] = useState(false);
  const [start_text, setstart_text] = useState(false);
  useEffect(() => {
    setstart_anime(true);

    setTimeout(() => {
      setstart_text(true);
    }, 0);
  }, []);
  const pathname = usePathname();

  const close_menu = () => {
    setstart_text(false);
    setTimeout(() => {
      setstart_anime(false);
    }, 300);
    setTimeout(() => {
      setopen_menu(false);
    }, 500);
  };
  return (
    <>
      <div
        onClick={close_menu}
        className={` md:hidden justify-between  flex-col fixed z-[10000]  top-0 left-0 flex bg-black ${
          start_anime ? "bg-opacity-[40%]" : "bg-opacity-[0%]"
        } w-full h-full`}
        style={{
          // transform: start_anime ? "scale(1)" : "scale(0)",
          // transformOrigin: "top left",
          transition: " 0.5s ease",
        }}
      >
        {/* this is for the mobile nav */}
        <div className="flex px-[3%] pt-[5vw] w-full overflow-hidden">
          <button
            onClick={close_menu}
            style={{
              whiteSpace: "nowrap",
              transform: start_text ? "translateY(0)" : "translateY(100%)",
              transition: "0.5s ease",
            }}
            className={`uppercase overflow-hidden md:hidden inline-block bg-[white]   md:p-[0.4vw] p-[1.3vw] group hover:[#103210] duration-[1s] md:rounded-[1.5vw] rounded-[8vw]  backdrop-blur-2xl bg-opacity-[20%] `}
          >
            <div
              className={` bg-white group-hover:bg-white md:rounded-[1.3vw] rounded-[7vw] flex justify-center items-center   md:h-auto md:w-auto w-[25vw]  h-[10vw]   md:py-[0.7vw] md:px-[1.5vw]`}
            >
              <p className=" md:text-[0.8vw] text-[#103210] group-hover:text-[#440C0C] flex items-center justify-center gap-[15%] text-[3.5vw]">
                <Image
                  src={exit}
                  alt="hamburger img"
                  className=" w-[25%]  h-fit"
                />
                close
              </p>
            </div>
          </button>
        </div>

        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full py-[12vw] bg-opacity-[40%] backdrop-blur-[60px]  justify-center items-center bg-black  md:hidden flex flex-col px-[5%] gap-[5vw] rounded-t-[5vw] overflow-hidden"
          style={{
            transform: start_anime ? "" : "translateY(100%)",
            // transformOrigin: "top left",
            transition: " 0.3s ease",
          }}
        >
          <div className="flex flex-col w-full  ">
            {/* this is for the items  */}
            {items.map((e: any, index: any) => {
              return (
                <div
                  className="overflow-hidden  flex w-full h-fit "
                  key={index}
                >
                  <Link
                    href={e.link}
                    style={{
                      transform: start_text
                        ? "translateY(0)"
                        : "translateY(100%)",
                      transition: `transform 0.5s ease ${index * 0.06}s`,
                    }}
                    className={` ${
                      e.link == pathname ? "bg-[black]" : "bg-[white]"
                    } uppercase overflow-hidden  h-[15vw] w-full  p-[1.8vw] group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  rounded-[10vw]  backdrop-blur-2xl bg-opacity-[20%] ${
                      Bt_Beau_Regualr.className
                    } `}
                  >
                    <div
                      className={`w-full  ${
                        e.link == pathname ? "bg-[#103210]" : "bg-white"
                      } h-full  group-hover:bg-[#103210] rounded-[9vw] flex justify-center items-center  w-full`}
                    >
                      <p
                        className={`inline-block  ${
                          e.link == pathname ? "text-white" : "text-[#103210]"
                        }   text-[#103210] text-[3.7vw] group-hover:text-white`}
                      >
                        {e.text}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* for the buttons below */}
          <div className=" w-full   flex">
            {mobile_nav.map((e: any, index: any) => {
              return (
                <div
                  className="overflow-hidden  flex w-full h-fit "
                  key={index}
                >
                  <Link
                    href={e.href}
                    target="_blank"
                    style={{
                      transform: start_text
                        ? "translateY(0)"
                        : "translateY(100%)",
                      transition: `transform 0.4s ease 0.4s`,
                    }}
                    className={` ${
                      e.link == pathname ? "bg-[black]" : "bg-[white]"
                    } uppercase overflow-hidden  h-[15vw] w-full  p-[1.8vw] group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  rounded-[10vw]  backdrop-blur-2xl bg-opacity-[20%] ${
                      Bt_Beau_Regualr.className
                    } `}
                  >
                    <div
                      className={`w-full  ${
                        e.link == pathname ? "bg-[#103210]" : "bg-[#440C0C]"
                      } h-full  group-hover:bg-[#103210] rounded-[9vw] flex justify-center items-center  w-full`}
                    >
                      <p
                        className={`inline-block text-white
                        text-[3.7vw] group-hover:text-white`}
                      >
                        {e.text}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile_nav;
