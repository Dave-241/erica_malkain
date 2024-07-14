"use client";

import { spline_font } from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";
import example from "../../../../public/images/media/example.webp";
import Image from "next/image";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get("id");

  const handleClick = (id: any) => {
    router.push(`media/?id=${id}`);
  };

  useEffect(() => {
    // const { scrollTo } = router.;

    if (search) {
      const element = document.getElementById(search);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [search]);

  const [active, setactive] = useState(0);
  const items = [
    {
      title: "podcast",
      body: [
        {
          img: example,
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
          link: "/",
        },
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
      ],
    },
    {
      title: "NEWS ARTICLE",
      body: [
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
      ],
    },
    {
      title: "MEDIA OUTLET",
      body: [
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
        {
          img: example,
          link: "/",
          caption:
            "Professor Erica Boothbys graduate seminar on the Ethica Implications of AI was both thought-provoking and enlightening",
        },
      ],
    },
  ];

  //   for tracking the major categories
  const itemsRefs = useRef<any>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemsRefs.current.findIndex(
            (ref: any) => ref === entry.target,
          );
          if (entry.isIntersecting && index !== -1) {
            // console.log("Item is in view, Index:", index);
            setactive(index);
            // Perform any action you need here when item comes into view
          }
        });
      },
      { threshold: 0.1 },
    );

    itemsRefs.current.forEach((ref: any) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemsRefs.current.forEach((ref: any) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  //   for tracking minor categories
  const subItemsRefs = useRef<any[]>([]);

  useEffect(() => {
    subItemsRefs.current.forEach((subItemRefs) => {
      subItemRefs.forEach((ref: any) => {
        if (ref) {
          const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              ref.classList.add("media_comeup");
              observer.unobserve(ref);
            }
          }, {});

          observer.observe(ref);
        }
      });
    });
  }, [subItemsRefs]);
  return (
    <>
      <div className="w-full  md:pb-[10vw] relative flex  ">
        <div className=" md:h-[100vh] md:w-[30vw] flex items-center justify-start sticky top-0 left-0 md:pt-[8vw] md:gap-[2vw] flex-col">
          {items.map((e: any, index: any) => {
            return (
              <button
                key={index}
                onClick={() => {
                  handleClick(e.title);
                }}
                style={{ transition: "0.8s ease" }}
                className={` ${
                  active == index
                    ? "scale-[1.05]"
                    : "opacity-[40%] hover:opacity-[100%]"
                } ${
                  spline_font.className
                } bg-[black] font-semibold uppercase overflow-hidden  md:w-[13vw] md:h-[4.9vw] md:p-[0.6vw]  group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[1.8vw]  backdrop-blur-2xl bg-opacity-[20%] `}
              >
                <div
                  className={`w-full   h-full bg-white  group-hover:bg-[#103210] md:rounded-[1.3vw] flex justify-center items-center  md:py-[0.6vw] md:px-[1.5vw]`}
                >
                  <p
                    className={`inline-block  md:text-[1.1vw] text-[#103210]  group-hover:text-white`}
                  >
                    {e.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="md:w-[69vw]  flex flex-col md:gap-[6vw] justify-center ">
          {items.map((e: any, index: any) => {
            return (
              <div
                key={index}
                id={e.title}
                ref={(ref) => {
                  if (ref) {
                    itemsRefs.current[index] = ref;
                  }
                }}
                className=" md:gap-[1.35vw]  md:w-[100%] flex flex-col"
              >
                <h2
                  className={`uppercase text-[#4F0A19] font-semibold ${spline_font.className} md:text-[4vw]`}
                >
                  {e.title}
                </h2>
                <div className=" flex flex-wrap md:gap-[1.7vw]">
                  {e.body.map((internal: any, internal_index: any) => {
                    return (
                      <Link
                        href={internal.link}
                        key={internal_index}
                        className={`md:w-[30.6vw]  md:rounded-[1.5vw] flex flex-col md:p-[0.5vw] group md:mt-[0.4vw] bg-white`}
                      >
                        <div className="overflow-hidden md:rounded-[1vw]">
                          <Image
                            src={internal.img}
                            alt={internal.caption}
                            style={{ transition: "0.8s ease" }}
                            className="w-full scale-[1.1] group-hover:scale-[1] h-fit"
                          />
                        </div>

                        <div className="overflow-hidden">
                          <p
                            ref={(el) => {
                              if (!subItemsRefs.current[index]) {
                                subItemsRefs.current[index] = [];
                              }
                              subItemsRefs.current[index][internal_index] = el;
                            }}
                            className={` md:p-[1.5vw] research_initial  ${spline_font.className} font-medium md:text-[1vw]`}
                          >
                            {internal.caption}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
