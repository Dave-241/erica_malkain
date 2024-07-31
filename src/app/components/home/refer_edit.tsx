"use client";

import { supabase } from "@/app/utils/supabaseClient";
import Link from "next/link";

const Refer_edit = ({
  setedit_text,
  id,
  text,
  text_color,
  setrecord_Name,
  record,
}: any) => {
  return (
    <>
      <div className="w-full  absolute   flex-col top-0 left-0 h-full flex justify-center items-center md:p-[0.5vw] md:gap-[1.5vw] capitalize bg-black bg-opacity-[50%] z-[60] md:text-[1.2vw] leading-none font-normal p-[5vw] text-[4vw] gap-[5vw]">
        <Link
          href={`/${text}`}
          className=" md:px-[5vw] px-[10vw] py-[5vw] md:py-[1vw] capitalize bg-[#103210] text-white flex justify-center items-center  hover:bg-opacity-[60%] backdrop-blur-2xl text-center "
          onClick={() => {
            // setedit_ID(id);
            setrecord_Name(record);
            setedit_text(text);
          }}
        >
          edit on {text} page
        </Link>
      </div>
    </>
  );
};

export default Refer_edit;
