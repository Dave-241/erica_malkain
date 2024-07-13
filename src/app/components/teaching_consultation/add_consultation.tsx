"use client";

import { useState } from "react";

const Add_consultation = ({
  setconsultation_title,
  setdelete_consulation,
  refresh_all_params,
}: any) => {
  const [add_publication, setadd_publication] = useState(false);

  return (
    <>
      <div className="w-full  md:py-[2vw] md:px-[10vw] flex md:gap-[2vw]">
        <button
          className=" md:px-[3vw] md:py-[1vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center border-red-500 border"
          //   onClick={refresh_all_params}
        >
          Add new Consulation
        </button>
        <button
          className=" md:px-[3vw] md:py-[1vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center border-red-500 border"
          onClick={() => {
            setconsultation_title("");
            setdelete_consulation(true);
          }}
        >
          delete all Consulations
        </button>
      </div>
    </>
  );
};

export default Add_consultation;
