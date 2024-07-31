"use client";

import { supabase } from "@/app/utils/supabaseClient";
import Image from "next/image";
import { useEffect, useState } from "react";
import example2 from "../../../../public/images/consultation/example2.png";
import { v4 } from "uuid";
import Image_list from "../general-component/image";

const Modal_edit_reiview = ({ setopen_edit, edit_ID }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [comment, setcomment] = useState("");
  const [name, setname] = useState("");
  const [postion, setpostion] = useState(""); // State for dropdown

  //   const [category, setcategory] = useState("");

  useEffect(() => {
    const fetchInitialData = async () => {
      if (edit_ID) {
        const { data, error } = await supabase

          .from("review")
          .select("*")
          .eq("id", edit_ID) // Filter by id
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching initial data:", error);
        } else {
          // setdata(data);
          console.log(data);
          setname(data[0].name);
          setpostion(data[0].position);
          setcomment(data[0].comment);
        }
      } else {
        // setdaa;
        return;
      }
    };

    fetchInitialData();
  }, []);

  const submit_form = async () => {
    // Validation check
    // console.log(comment, name, postion);
    if (!comment || !name || !postion) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    let result;
    if (edit_ID) {
      // Update existing publication
      result = await supabase
        .from("review")
        .update({
          comment: comment,
          name: name,
          position: postion,
        })
        .eq("id", edit_ID);

      console.log(edit_ID);
    } else {
      console.log("its adding");
      // Add new publication
      result = await supabase.from("review").insert([
        {
          comment: comment,
          name: name,
          position: postion,
        },
      ]);
    }

    const { data, error } = result;
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setopen_edit(false);
      // window.location.reload();
      // Optionally reset the form fields if adding a new publication
    }
  };

  return (
    <>
      <div className="w-full h-full fixed top-0 left-0  bg-black bg-opacity-[80%] md:bg-opacity-[50%] overflow-x-hidden overflow-y-scroll z-[1000] flex justify-center  items-center">
        <div className="bg-white md:px-[5%] justify-center md:rounded-[1vw]  md:py-[3vw] py-[10vw] w-[95%] px-[3%] md:w-[50vw]  rounded-[5vw] flex md:gap-[1vw] capitalize flex-col gap-[6vw]">
          {!edit_ID || (edit_ID && name) ? (
            <>
              {" "}
              <p className="md:text-[2vw] text-[8vw] text-center">
                {" "}
                {edit_ID ? "edit" : "Add new"} review here
              </p>
              {/* title and image section */}
              <div className="md:flex-row gap-[4vw] flex-col flex md:items-end justify-center md:gap-[1vw]">
                {/* <div className="border2"></div> */}
              </div>
              {/* the links for viewing */}
              <div className="w-full flex md:gap-[2vw] gap-[5%]  justify-between">
                {/* the name  */}
                <div className="flex flex-col md:gap-[0.3vw] gap-[2vw] w-full">
                  <label
                    className="capitalize md:text-[1vw] text-[3.5vw]"
                    htmlFor="pdf_link"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="pdf_link"
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                    value={name || ""}
                    className="border md:rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white md:h-[3vw] w-full h-[10vw] rounded-[1.5vw] px-[3%] md:text-[1vw] text-[3.5vw]"
                    placeholder="input name here .."
                  />
                </div>

                {/* the download link */}
                <div className="flex flex-col md:gap-[0.3vw] gap-[2vw] w-full">
                  <label
                    className="capitalize md:text-[1vw] text-[3.5vw]"
                    htmlFor="position"
                  >
                    position
                  </label>
                  <input
                    type="text"
                    id="position"
                    onChange={(e) => {
                      setpostion(e.target.value);
                    }}
                    value={postion || ""}
                    className="border md:rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white md:h-[3vw] w-full h-[10vw] rounded-[1.5vw] px-[3%] md:text-[1vw] text-[3.5vw]"
                    placeholder="input position here .."
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-[0.3vw] gap-[2vw]">
                <label
                  className="capitalize md:text-[1vw] text-[3.5vw]"
                  htmlFor="description"
                >
                  comment
                </label>
                <textarea
                  //   type="text"
                  id="description"
                  rows={4}
                  //   rows={50}
                  value={comment || ""}
                  onChange={(e) => {
                    setcomment(e.target.value);
                  }}
                  className="border  md:rounded-[1vw] rounded-[1.5vw]  outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white resize-none p-[2%] md:text-[1vw] text-[3.5vw]"
                  placeholder="input comment here .."
                />
              </div>
              {error && (
                <p className="text-red-500 md:text-[1vw] text-[3.5vw]">
                  {error}
                </p>
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
                  {loading ? "Uploading..." : "Confirm Upload"}{" "}
                </button>
              </div>
            </>
          ) : (
            <>
              <p>loading ...</p>
              <button
                className=" md:px-[4vw] md:w-auto w-full py-[2.6vw]  md:py-[0.5vw] capitalize bg-white  rounded-[2.5vw] md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] text-[3.5vw] backdrop-blur-2xl text-center border-red-500 border"
                onClick={() => {
                  setopen_edit(false);
                }}
              >
                Cancel
              </button>
            </>
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default Modal_edit_reiview;
