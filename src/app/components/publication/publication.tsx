"use client";

import {
  Bt_Beau_Regualr,
  Helvetica_bold,
  Helvetica_light,
  Helvetica_medium,
} from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";

const Publication = () => {
  const items = ["", "", "", "", "", ""];
  const [start_anime, setstart_anime] = useState(false);

  useEffect(() => {
    setstart_anime(true);
  }, []);
  return (
    <>
      <div className="w-full  md:py-[5vw]  md:px-[10%]">
        <div className=" w-full flex flex-col md:gap-[1.5vw]">
          {items.map((e: any, index: any) => {
            return (
              <>
                <div className="w-full  flex justify-between md:rounded-[1vw] md:px-[3vw] md:py-[1.5vw] bg-[#FEFAFA] bg-opacity-[62%] items-center">
                  {/* the first section */}
                  <div className="flex flex-col md:w-[50%] md:gap-[0.5vw]">
                    <h2
                      //   ref={hero_ref}
                      className={`${Helvetica_bold.className} md:text-[1.3vw] uppercase text-[#440C0C]`}
                    >
                      Theory of collective mind. Trends in Cognitive Sciences.
                    </h2>

                    <p
                      className={`${Helvetica_light.className} md:text-[1.1vw] text-[#C1A391]`}
                    >
                      Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A.,
                      Boothby, E. J., Colman, A. M., Echterhoff, G., &
                      Rossignac-Milon, M. 2023.
                    </p>
                  </div>

                  <div
                    className={`${Bt_Beau_Regualr.className} flex capitalize md:gap-[1vw]  items-center`}
                  >
                    {" "}
                    <button className=" md:rounded-[1.7vw] md:text-[1vw] border-[#440C0C] md:border-[0.1vw] bg-[#FEF6F6] flex justify-center items-center md:py-[0.8vw] md:px-[1vw] text-[#440C0C]  hover:bg-[white]">
                      View DATA
                    </button>
                    <button className=" md:rounded-[1.7vw] border-[#440C0C] md:text-[1vw] md:border-[0.1vw] bg-[#440C0C] flex justify-center items-center md:py-[0.8vw] md:px-[1vw] text-white hover:bg-[#C1A391] hover:border-[#C1A391]">
                      View PDF
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Publication;
