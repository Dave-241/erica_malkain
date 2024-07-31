"use client";

import { supabase } from "@/app/utils/supabaseClient";

const Edit_img = ({
  setedit_img,
  btn_text,
  text,
  setbtn_text,
  setrecord_Name,
  record,
  zzz,
}: any) => {
  return (
    <>
      <div className="w-full  absolute   flex-col top-0 left-0 h-full flex justify-center items-end md:p-[0.5vw] md:gap-[1.5vw] capitalize bg-black bg-opacity-[30%] z-[60] md:text-[1vw] p-[5vw] text-[3.5vw] gap-[5vw]">
        <button
          className=" md:w-[8vw]  h-[10vw] w-[30vw] md:h-[2.3vw] capitalize bg-white text-black  hover:bg-opacity-[60%] backdrop-blur-2xl text-center "
          onClick={() => {
            // setedit_ID(id);
            setbtn_text && setbtn_text(btn_text);
            setrecord_Name(record);
            setedit_img(text);
          }}
        >
          edit {btn_text && btn_text}
        </button>
      </div>
    </>
  );
};

export default Edit_img;