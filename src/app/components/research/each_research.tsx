"use client";

import { Helvetica_light, spline_font } from "@/app/utils/fonts";
import example from "../../../../public/images/research/example.webp";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Modal_edit_research from "./modal_edit_research";
import { supabase } from "@/app/utils/supabaseClient";
import { useRouter } from "next/navigation";
import Edit_each_research from "./edit_each_research";

const Each_research = () => {
  const itemsRefs = useRef<any>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("research_comeup");
            observer.unobserve(entry.target);
          }
        });
      },
      //   { threshold: 0.1 },
    );

    itemsRefs.current.forEach((ref: any) => {
      observer.observe(ref);
    });

    return () => {
      itemsRefs.current.forEach((ref: any) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const items = ["", "", "", "", "", ""];
  const [text, setText] = useState("");
  const [open_edit, setopen_edit] = useState(false);
  const [isloggedin, setisloggedin] = useState(false);
  const [edit_ID, setedit_ID] = useState<any>(1);

  // check if logged in
  useEffect(() => {
    // Check initial session
    const checkInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setisloggedin(true);
      }
    };

    checkInitialSession();
  }, [useRouter]);

  return (
    <>
      {open_edit && (
        <Modal_edit_research
          setopen_edit={setopen_edit}
          text={text}
          setText={setText}
        />
      )}
      {/* <div className="mt-4 p-4 border2 ">
        <h2>HTML Content from Editor</h2>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>{" "} */}
      <div className="w-full flex flex-col md:gap-0 gap-[7.5vw]  md:px-0 px-[3%]">
        {items.map((e: any, index: any) => {
          return (
            <div
              key={index}
              className="w-full  border-none md:border-t border-[#9CA09C] md:py-[5vw] md:gap-[6vw] flex  justify-center md:rounded-none rounded-[5vw] overflow-hidden md:bg-transparent bg-[#F2F2F0] md:flex-row flex-col items-start px-[4%] py-[6%] gap-[3vw] relative"
            >
              {/* CMS LOGIC */}
              {isloggedin && (
                <Edit_each_research
                  setedit_ID={setedit_ID}
                  setopen_edit={setopen_edit}
                />
              )}
              {/* the details */}
              <div className="  overflow-hidden">
                <div
                  ref={(ref) => {
                    if (ref) {
                      itemsRefs.current[index] = ref;
                    }
                  }}
                  className="md:w-[22vw] w-full  research_initial flex flex-col md:gap-[1vw] gap-[3vw]"
                >
                  <h3
                    className={`${spline_font.className} uppercase  md:text-[2vw]  font-medium md:leading-[2.2vw] text-[7vw] leading-[7.8vw]`}
                  >
                    Do we know what people think of us?
                  </h3>
                  <p
                    className={`${Helvetica_light.className} md:text-[1vw] text-[#707270] text-[4vw] leading-[4.8vw] md:leading-[1.3vw]`}
                  >
                    Beliefs about whether our colleagues like us affect our
                    sense of belonging in the workplace and how{" "}
                  </p>
                  <Link
                    href={"/"}
                    className={`uppercase md:w-[8.6vw] md:h-[2.9vw] md:rounded-[2vw]  md:text-[1.1vw]  group overflow-hidden relative items-center justify-center  ${Helvetica_light.className} bg-white uppercase md:flex hidden `}
                  >
                    <p
                      style={{ transition: "0.5s ease" }}
                      className="group-hover:text-white text-[#000000] z-[10] "
                    >
                      Read more
                    </p>

                    <div
                      className="w-full h-full bg-[#440C0C] absolute left-0 top-[100%] group-hover:top-0 "
                      style={{ transition: "0.5s ease" }}
                    ></div>
                  </Link>
                </div>
              </div>
              {/* the picture */}
              <div className="md:w-[45vw]  ">
                <Image
                  src={example}
                  alt="example blog"
                  className="w-full h-fit md:rounded-none rounded-[3vw]"
                />
              </div>

              <Link
                href={"/"}
                className={`uppercase w-full h-[12vw] border-[#440C0C] border md:rounded-[2vw] flex md:hidden md:text-[1.1vw]  group overflow-hidden relative items-center text-[#440C0C] rounded-[5vw] justify-center  ${Helvetica_light.className} bg-[#FEF6F6] uppercase`}
              >
                <p
                  style={{ transition: "0.5s ease" }}
                  className="group-hover:text-white  text-[#000000] z-[10] "
                >
                  Read more
                </p>

                <div
                  className="w-full h-full bg-[#440C0C] absolute left-0 top-[100%] group-hover:top-0 "
                  style={{ transition: "0.5s ease" }}
                ></div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Each_research;
