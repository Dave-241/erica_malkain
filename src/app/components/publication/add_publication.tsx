"use client";

import { useState } from "react";
import Modal_add_publication from "./modal_add_publication";

const Add_publication = ({
  setpublication_title,
  setdelete_publication,
  refresh_all_params,
}: any) => {
  const [add_publication, setadd_publication] = useState(false);

  return (
    <>
      <div className="w-full  md:py-[2vw] md:px-[10vw] flex md:gap-[2vw]">
        <button
          className=" md:px-[3vw] md:py-[1vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center border-red-500 border"
          onClick={refresh_all_params}
        >
          Add new publication
        </button>
        <button
          className=" md:px-[3vw] md:py-[1vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center border-red-500 border"
          onClick={() => {
            setpublication_title("");
            setdelete_publication(true);
          }}
        >
          delete all publications
        </button>
      </div>
    </>
  );
};

export default Add_publication;
