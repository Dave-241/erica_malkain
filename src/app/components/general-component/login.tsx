"use client";

import { Bt_Beau_Regualr } from "@/app/utils/fonts";
import { useState } from "react";

const Login = () => {
  const [showpassword, setshowpassword] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <div className="w-full flex-col md:gap-[4vw]  h-[100vh] flex justify-center items-center">
        <h1
          className={`${Bt_Beau_Regualr.className} md:text-[4vw] text-[#103210]`}
        >
          WELCOME ERICA
        </h1>

        <div className="md:w-[25vw]  text-[1vw] flex flex-col md:gap-[2vw] ">
          <input
            type="text"
            placeholder="Username or email here . . ."
            autoComplete="email"
            value={username || ""}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            className=" md:h-[3.5vw] bg-white w-full focus:border-black focus:border transition duration-[0.6s] md:px-[3%] md:rounded-[1vw] border outline-none "
          />
          <div className="flex flex-col items-start md:gap-[0.3vw] w-full">
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Password here . . ."
              autoComplete="password"
              value={password || ""}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className=" md:h-[3.5vw] bg-white focus:border w-full md:px-[3%] md:rounded-[1vw] transition duration-[0.6s] focus:border-black outline-none "
            />
            <div className="flex justify-between w-full">
              <button
                onClick={() => {
                  setshowpassword(!showpassword);
                }}
              >
                {showpassword ? "hide" : "show"} password
              </button>

              <button className="underline hover:text-[#103210] capitalize underline-offset-4">
                forgotten password ?
              </button>
            </div>
          </div>

          <button className="w-full md:h-[5vw] bg-[#103210] text-white md:rounded-[1vw] text-center capitalize md:text-[1.5vw]">
            sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
