"use client";

import { supabase } from "@/app/utils/supabaseClient";

const Edit_text = ({
  setedit_text,
  id,
  text,
  text_color,
  setrecord_Name,
  record,
}: any) => {
  return (
    <>
      <div className="w-full  absolute   flex-col top-0 left-0 h-full flex justify-center items-end md:p-[0.5vw] md:gap-[1.5vw] capitalize bg-black bg-opacity-[30%] z-[60] md:text-[1vw] p-[5vw] text-[3.5vw] gap-[5vw]">
        <button
          className=" md:w-[8vw]  h-[10vw] w-[30vw] md:h-[2.3vw] capitalize bg-white text-black  hover:bg-opacity-[60%] backdrop-blur-2xl text-center "
          onClick={() => {
            // setedit_ID(id);
            setrecord_Name(record);
            setedit_text(text);
          }}
        >
          edit
        </button>
      </div>
    </>
  );
};

export default Edit_text;
