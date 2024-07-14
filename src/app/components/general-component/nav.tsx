"use client";

import { Bt_Beau_Regualr } from "@/app/utils/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      text: "WORKSHOP",
      link: "/workshop",
    },
    {
      text: "MEDIA",
      link: "/media",
    },
  ];
  const items_right = [
    {
      text: "contact",
      link: "/contact",
    },
    {
      text: "about us",
      link: "/about",
    },
  ];

  const pathname = usePathname();
  return (
    <>
      <nav
        className={`${Bt_Beau_Regualr.className} md:flex hidden justify-between md:w-[80vw] z-[50]  items-center md:top-[2vw] fixed left-[50%] translate-x-[-50%]  `}
      >
        {/* desktop left section */}
        <div className=" flex">
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
        <div className=" flex">
          {items_right.map((e: any, index: any) => {
            return (
              <Link
                href={"/"}
                style={{ whiteSpace: "nowrap" }}
                key={index}
                className="uppercase overflow-hidden  md:p-[0.4vw] group hover:[#103210] duration-[1s] md:rounded-[1.5vw]  bg-[white] backdrop-blur-2xl bg-opacity-[20%] "
              >
                <div className="w-full h-full bg-[#440C0C] group-hover:bg-white md:rounded-[1.3vw] flex justify-center items-center  md:py-[0.7vw] md:px-[1.5vw]">
                  <p className="inline-block md:text-[0.8vw] text-[white] group-hover:text-[#440C0C]">
                    {e.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Nav;
