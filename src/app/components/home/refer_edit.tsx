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
      <div className="w-full  absolute   flex-col top-0 left-0 h-full flex justify-center items-center md:p-[0.5vw] md:gap-[1.5vw] capitalize bg-black bg-opacity-[50%] z-[60] md:text-[1vw] leading-none font-normal p-[5vw] text-[3.5vw] gap-[5vw]">
        <Link
          href={`/${text}`}
          className=" md:px-[3vw] md:h-auto md:w-auto h-[10vw] w-[30vw] md:py-[0.6vw] capitalize bg-white text-black flex justify-center items-center  hover:bg-opacity-[60%] backdrop-blur-2xl text-center "
          onClick={() => {
            // setedit_ID(id);
            setrecord_Name(record);
            setedit_text(text);
          }}
        >
          edit on the {text} page
        </Link>
      </div>
    </>
  );
};

export default Refer_edit;
