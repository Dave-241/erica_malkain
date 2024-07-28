"use client";

import { spline_font } from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";
import example from "../../../../public/images/media/example.webp";
import Image from "next/image";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Edit_each_category from "./edit_each_catgory";
import Modal_edit_category from "./modal_edit_category";
import Add_media from "./add_media";
import { supabase } from "@/app/utils/supabaseClient";
// import { useRouter } from "next/router";

const Categories = ({ product_data }: any) => {
  const [groupedItems, setGroupedItems] = useState<any>([]);

  useEffect(() => {
    const groupByCategory = (items: any, categories: any) => {
      return categories.map((category: any) => ({
        title: category,
        body: items.filter((item: any) => item.type == category),
      }));
    };

    const categories = ["podcast", "News Article", "Media Outlet"];
    const grouped = groupByCategory(product_data, categories);
    setGroupedItems(grouped);

    console.log(grouped);
  }, []);
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

  // THE CMS LOGIC STARTS FROM HERE
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
  }, [router]);

  return (
    <>
      {/* add publication */}
      {open_edit && (
        <Modal_edit_category edit_ID={edit_ID} setopen_edit={setopen_edit} />
      )}
      {/* <div className="h-[30vw]"></div> */}
      <div className="w-full md:gap-0 gap-[15vw]  md:pb-[10vw] md:mt-[-5vw] md:flex-row flex-col  relative flex  ">
        {isloggedin && (
          <Add_media setedit_ID={setedit_ID} setopen_edit={setopen_edit} />
        )}

        <div className=" md:h-[100vh] md:w-[30vw] flex items-center md:justify-start justify-between md:px-0 px-[3%] sticky  md:bg-transparent bg-[#DFE4DF] bg-opacity-[10%] backdrop-blur-2xl md:backdrop-blur-none z-[10] top-0 pt-[25vw] left-0 md:pt-[8vw] md:pb-0 pb-[5vw] md:gap-[2vw] md:flex-col ">
          {groupedItems.map((e: any, index: any) => {
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
                    : "md:opacity-[40%] opacity-[60%] hover:opacity-[100%]"
                } ${
                  spline_font.className
                } bg-[black] font-semibold uppercase overflow-hidden  md:w-[13vw] w-[29vw] h-[10vw] rounded-[3vw] p-[1.1vw] md:h-[4.9vw] md:p-[0.6vw]  group hover:[#103210]  hover:bg-[black] hover:bg-opacity-[20%]  md:rounded-[1.8vw]  backdrop-blur-2xl bg-opacity-[20%] `}
              >
                <div
                  className={`w-full   h-full bg-white  group-hover:bg-[#103210] md:rounded-[1.3vw] flex justify-center items-center rounded-[2.3vw]  md:py-[0.6vw] md:px-[1.5vw]`}
                >
                  <p
                    className={`inline-block  md:text-[1.1vw] text-[3vw] text-[#103210]  group-hover:text-white`}
                  >
                    {e.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="md:w-[69vw] md:px-0 gap-[15vw] px-[3%] flex flex-col md:gap-[3vw] justify-center ">
          {groupedItems.map((e: any, index: any) => {
            return (
              <>
                {e.body.length > 0 && (
                  <div
                    key={index}
                    id={e.title}
                    ref={(ref) => {
                      if (ref) {
                        itemsRefs.current[index] = ref;
                      }
                    }}
                    className=" md:gap-[0vw] gap-[5vw]  md:w-[100%] flex flex-col"
                  >
                    <h2
                      className={`uppercase text-[#4F0A19] md:text-start text-center font-semibold ${spline_font.className} text-[10vw] leading-[11vw] md:text-[4vw]`}
                    >
                      {e.title}
                    </h2>
                    <div className=" flex  flex-wrap gap-[5vw] md:gap-[1.7vw]">
                      {e.body.map((internal: any, internal_index: any) => {
                        return (
                          <div className="md:w-[30.6vw] relative  rounded-[5vw] p-[2vw]  md:rounded-[1.5vw] md:gap-0 gap-[3vw] flex flex-col md:p-[0.5vw] group md:mt-[0.4vw] bg-white">
                            {" "}
                            <Edit_each_category
                              setopen_edit={setopen_edit}
                              id={internal.id}
                            />
                            <Link
                              href={internal.link}
                              key={internal_index}
                              className={``}
                            >
                              <div className="overflow-hidden rounded-[4vw] md:rounded-[1vw]">
                                <Image
                                  src={internal.img}
                                  alt={internal.caption}
                                  unoptimized
                                  width="0"
                                  height="0"
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
                                    subItemsRefs.current[index][
                                      internal_index
                                    ] = el;
                                  }}
                                  className={` md:p-[1.5vw] p-[3vw]   ${spline_font.className} font-medium md:text-[1vw] text-[4vw] md:leading-[1.4vw] leading-[5vw]`}
                                >
                                  {internal.caption}
                                </p>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
