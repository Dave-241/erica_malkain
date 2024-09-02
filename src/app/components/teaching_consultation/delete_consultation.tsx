"use client";

import { supabase } from "@/app/utils/supabaseClient";

const Delete_consultation = ({ setdelete_consulation, title }: any) => {
  return (
    <>
      <div
        onClick={() => {
          setdelete_consulation(false);
        }}
        className="w-full border2 fixed h-full bg-black bg-opacity-[50%] flex justify-center items-center  top-0 left-0 z-[1000] overflow-hidden  "
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="md:w-[40vw] md:px-[10%] md:rounded-[1vw] md:gap-[2vw] md:text-[1vw] md:h-[20vw] items-center justify-center bg-white flex flex-col "
        >
          <p className="text-center">
            {title
              ? `     Are you sure you want to delete this consulation? `
              : "Are you sure you want to delete all consulations"}{" "}
            <span className="text-red-500 uppercase">{title && title}</span>
          </p>

          <div className="w-full  flex justify-between">
            <button
              className=" md:px-[2vw] md:py-[0.5vw]capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] backdrop-blur-2xl text-center border-red-500 border"
              onClick={() => {
                setdelete_consulation(false);
              }}
            >
              Cancel
            </button>
            <button className=" md:px-[2vw] md:py-[0.5vw] capitalize text-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] backdrop-blur-2xl text-center bg-red-500 border">
              confirm delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete_consultation;
