"use client";

import { Bt_Beau_Regualr } from "@/app/utils/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ham from "../../../../public/images/general/ham.png";
import Image from "next/image";
import Mobile_nav from "./mobile_nav";

const Nav = () => {
  const items = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Publications",
      link: "/publications",
    },
    {
      text: "RESEARCH",
      link: "/research",
    },
    {
      text: "teaching & consultation",
      link: "/consultation",
    },

    {
      text: "MEDIA",
      link: "/media",
    },
  ];
  const items_right = [
    {
      text: "about me",
      link: "/about",
    },
    {
      text: "contact ",
      link: "/contact",
    },
  ];

  const mobile_nav = [
    {
      text: "View CV",
      // link: "/",
      button: true,
    },
    {
      text: "WORKSHOP ",
      link: "/workshop",
    },
  ];

  const pathname = usePathname();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Your code that uses the window object
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [open_menu, setopen_menu] = useState(false);
  return (
    <>
      <nav
        className={`${Bt_Beau_Regualr.className} flex  justify-between md:w-[80vw] w-full md:px-0 px-[3%] top-[5vw] z-[100]  items-center md:top-[2vw] fixed left-[50%] translate-x-[-50%]  `}
      >
        {/* desktop left section */}
        <div className=" md:flex hidden  ">
          {items.map((e: any, index: any) => {
            return (
              <Link
                href={e.link}
                style={{ whiteSpace: "nowrap" }}
                key={index}
                className={` ${
                  e.link == pathname ? "bg-[black]" : "bg-[white]"
                } uppercase overflow-hidden  md:p-[0.5vw] group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[1.5vw]  backdrop-blur-2xl bg-opacity-[20%] `}
              >
                <div
                  className={`w-full  ${
                    e.link == pathname ? "bg-[#103210]" : "bg-white"
                  } h-full  group-hover:bg-[#103210] md:rounded-[1.3vw] flex justify-center items-center  md:py-[0.6vw] md:px-[1.5vw]`}
                >
                  <p
                    className={`inline-block  ${
                      e.link == pathname ? "text-white" : "text-[#103210]"
                    }  md:text-[0.8vw] text-[#103210] group-hover:text-white`}
                  >
                    {e.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        {/* this is mobile ham buger */}
        <button
          onClick={() => {
            setopen_menu(true);
          }}
          style={{ whiteSpace: "nowrap" }}
          className={`uppercase overflow-hidden md:hidden inline-block bg-[white]   md:p-[0.4vw] p-[1.3vw] group hover:[#103210] duration-[1s] md:rounded-[1.5vw] rounded-[8vw]  backdrop-blur-2xl bg-opacity-[20%] `}
        >
          <div
            className={` bg-white group-hover:bg-white md:rounded-[1.3vw] rounded-[7vw] flex justify-center items-center   md:h-auto md:w-auto w-[25vw]  h-[10vw]   md:py-[0.7vw] md:px-[1.5vw]`}
          >
            <p className=" md:text-[0.8vw] text-[#103210] group-hover:text-[#440C0C] flex items-center justify-center gap-[10%] text-[3vw]">
              <Image
                src={ham}
                alt="hamburger img"
                className=" w-[40%]  h-fit"
              />
              Menu
            </p>
          </div>
        </button>

        <div className=" flex ">
          {items_right.map((e: any, index: any) => {
            return (
              <Link
                href={e.link}
                style={{ whiteSpace: "nowrap" }}
                key={index}
                className={`uppercase overflow-hidden  ${
                  e.link == pathname ? " bg-[#440C0C] " : " bg-[#440C0C] "
                }   md:p-[0.4vw] p-[1.3vw] group hover:[#103210] duration-[1s] md:rounded-[1.5vw] rounded-[8vw]  backdrop-blur-2xl bg-opacity-[10%] `}
              >
                <div
                  className={`  ${
                    e.link == pathname ? "bg-[#103210]" : "bg-[#440C0C] "
                  } group-hover:bg-white md:rounded-[1.3vw] rounded-[7vw] flex justify-center items-center  md:h-auto md:w-auto w-[25vw]  h-[10vw]  md:py-[0.7vw] md:px-[1.5vw]`}
                >
                  <p className="inline-block md:text-[0.8vw] text-[white] group-hover:text-[#440C0C] text-[3vw]">
                    {e.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
      {open_menu && (
        <Mobile_nav
          setopen_menu={setopen_menu}
          items={items}
          mobile_nav={mobile_nav}
        />
      )}
    </>
  );
};

export default Nav;
