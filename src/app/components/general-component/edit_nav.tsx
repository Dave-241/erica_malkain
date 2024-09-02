"use client";

import { supabase } from "@/app/utils/supabaseClient";
import { useState } from "react";

const Edit_nav = ({ setopen_edit }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedType, setselectedType] = useState("");
  //  const [text, settext] = useState(edit_text);

  const submit_form = async () => {
    // Validation check
    const updateData = { ["media"]: selectedType };
    if (!selectedType) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    let result;
    //  console.log("its adding");
    // Add new publication
    // console.log(edit_text, record_Name);
    const { data, error } = await supabase
      .from("nav")
      .update(updateData)
      .eq("id", "1"); // Replace 'your_record_id' with the actual ID of the record you want to update

    // const { data, error } = result;
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      //    setedit_text("");
      window.location.reload();
    }
  };

  return (
    <>
      <div
        className={`w-full h-full bg-black bg-opacity-[60%]  z-[100] fixed flex justify-center items-center`}
      >
        <div className="md:p-[2vw] md:w-auto w-[90%] flex flex-col md:gap-[0.4vw] gap-[5vw] md:py-[2vw] p-[5%] rounded-[4vw] bg-white md:rounded-[2vw]">
          {/* DROPDOWN HERE  */}
          <div className="flex flex-col md:gap-[0.3vw] gap-[2vw] w-full">
            <label
              className="capitalize md:text-[1vw] text-[3.5vw]"
              htmlFor="type"
            >
              Show media option
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setselectedType(e.target.value)}
              className="border md:rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white md:h-[3vw] w-full h-[10vw] rounded-[1.5vw] px-[3%] md:text-[1vw] text-[3.5vw]"
            >
              <option value="">Show Media</option>
              <option value="True">True</option>
              <option value="False">False</option>
            </select>
          </div>

          {/* the links for viewing */}
          {error && (
            <p className="text-red-500 md:text-[1vw] text-[3.5vw]">{error}</p>
          )}
          <div className="w-full md:pt-[2vw] flex justify-center gap-[5%]  md:gap-[4vw] ">
            <button
              className=" md:px-[4vw] md:w-auto w-full py-[2.6vw]  md:py-[0.5vw] capitalize bg-white  rounded-[2.5vw] md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] text-[3.5vw] backdrop-blur-2xl text-center border-red-500 border"
              onClick={() => {
                setopen_edit(false);
              }}
            >
              Cancel
            </button>
            <button
              onClick={submit_form}
              disabled={loading}
              type="submit"
              className=" md:px-[4vw] md:w-auto w-full py-[2.6vw]  md:py-[0.5vw] capitalize text-white  rounded-[2.5vw] md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] backdrop-blur-2xl text-center bg-red-500 border"
            >
              {loading ? "Updating ..." : "Confirm Update"}{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Edit_nav;
