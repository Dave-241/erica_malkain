"use client";

import { supabase } from "@/app/utils/supabaseClient";
import Image from "next/image";
import { useState } from "react";
import example2 from "../../../../public/images/consultation/example2.png";
import { v4 } from "uuid";

const Modal_add_publication = ({
  setadd_publdcication,
  publication_title,
  publication_body,
  publication_data_link,
  publication_pdf_link,
  setpublication_title,
  setpublication_body,
  setpublication_data_link,
  setpublication_pdf_link,
  edit_ID,
}: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit_form = async () => {
    // Validation check
    if (
      !publication_title ||
      !publication_body ||
      !publication_data_link ||
      !publication_pdf_link
    ) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    let result;
    if (edit_ID) {
      // Update existing publication
      result = await supabase
        .from("publication")
        .update({
          title: publication_title,
          description: publication_body,
          data_link: publication_data_link,
          pdf_link: publication_pdf_link,
          image: "PLACEHOLDER",
        })
        .eq("id", edit_ID);

      console.log(edit_ID);
    } else {
      console.log("its adding");
      // Add new publication
      result = await supabase.from("publication").insert([
        {
          title: publication_title,
          description: publication_body,
          data_link: publication_data_link,
          pdf_link: publication_pdf_link,
          image: "PLACEHOLDER",
        },
      ]);
    }

    const { data, error } = result;
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setadd_publdcication(false);
      // Optionally reset the form fields if adding a new publication

      setpublication_title("");
      setpublication_body("");
      setpublication_data_link("");
      setpublication_pdf_link("");
    }
  };
  return (
    <>
      <div className="w-full h-full fixed top-0 left-0  bg-black bg-opacity-[80%] md:bg-opacity-[50%] z-[1000] flex justify-center  items-center">
        <div className="bg-white md:px-[5%] justify-center md:rounded-[1vw] md:h-[35vw] md:py-0 py-[10vw] w-[95%] px-[3%] md:w-[50vw]  rounded-[2vw] flex md:gap-[1vw] capitalize flex-col gap-[6vw]">
          <p className="md:text-[2vw] text-[8vw] text-center">
            {" "}
            {edit_ID ? "edit" : "Add new"} publication here
          </p>
          {/* title and image section */}
          <div className="md:flex-row gap-[4vw] flex-col flex md:items-end justify-center md:gap-[1vw]">
            <div className="flex flex-col w-full md:gap-[0.3vw] gap-[2vw]">
              <label
                className="capitalize md:text-[1vw]  text-[3.5vw]"
                htmlFor="title"
              >
                Publication title
              </label>
              <input
                type="text"
                id="title"
                value={publication_title || ""}
                onChange={(e) => {
                  setpublication_title(e.target.value);
                }}
                className="border md:rounded-[1vw] outline-none bg-[black] bg-opacity-[70%] h-[10vw] rounded-[1.5vw]  placeholder:text-white capitalize text-white md:h-[3vw] px-[3%] md:text-[1vw] text-[3.5vw]"
                placeholder="type in publication title here .."
              />
            </div>{" "}
            <div className="flex w-full md:h-[3vw]  h-[13vw] md:gap-[1vw] gap-[5%] ">
              <button
                style={{ whiteSpace: "nowrap" }}
                className="  h-full w-full md:text-[0.9vw] md:px-[1.3vw] bg-[#103210] text-white md:rounded-[0.5vw] hover:bg-white hover:text-black  rounded-[2vw] hover:border-black border-[#103210] border"
              >
                {example2 ? "Replace" : "Choose"} Image
              </button>
              {example2 && (
                <div className="h-full w-full md:rounded-[0.5vw] rounded-[2vw] relative overflow-hidden">
                  <Image
                    src={example2}
                    alt="image link"
                    className="w-full  absolute  absolute_center h-fit"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col md:gap-[0.3vw] gap-[2vw]">
            <label
              className="capitalize md:text-[1vw] text-[3.5vw]"
              htmlFor="description"
            >
              Publication description
            </label>
            <textarea
              //   type="text"
              id="description"
              rows={4}
              //   rows={50}
              value={publication_body || ""}
              onChange={(e) => {
                setpublication_body(e.target.value);
              }}
              className="border  md:rounded-[1vw] rounded-[1.5vw]  outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white resize-none p-[2%] md:text-[1vw] text-[3.5vw]"
              placeholder="input publication description here .."
            />
          </div>
          {/* the links for viewing */}
          <div className="w-full flex md:gap-[2vw]  justify-between">
            {/* the data link */}
            <div className="flex flex-col md:gap-[0.3vw] gap-[2vw] w-full">
              <label
                className="capitalize md:text-[1vw] text-[3.5vw]"
                htmlFor="data_link"
              >
                view data link
              </label>
              <input
                type="text"
                value={publication_data_link || ""}
                id="data_link"
                onChange={(e) => {
                  setpublication_data_link(e.target.value);
                }}
                className="border md:rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white md:h-[3vw] w-full h-[10vw] rounded-[1.5vw] px-[3%] md:text-[1vw] text-[3.5vw]"
                placeholder="input your data link here .."
              />
            </div>
            {/* the download link */}
            <div className="flex flex-col md:gap-[0.3vw] gap-[2vw] w-full">
              <label
                className="capitalize md:text-[1vw] text-[3.5vw]"
                htmlFor="pdf_link"
              >
                view pdf link
              </label>
              <input
                type="text"
                id="pdf_link"
                onChange={(e) => {
                  setpublication_pdf_link(e.target.value);
                }}
                value={publication_pdf_link || ""}
                className="border md:rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white md:h-[3vw] w-full h-[10vw] rounded-[1.5vw] px-[3%] md:text-[1vw] text-[3.5vw]"
                placeholder="input your pdf download link here .."
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 md:text-[1vw] text-[3.5vw]">{error}</p>
          )}
          <div className="w-full md:pt-[2vw] flex justify-center gap-[5%]  md:gap-[4vw] ">
            <button
              className=" md:px-[4vw] md:w-auto w-full py-[2.6vw]  md:py-[0.5vw] capitalize bg-white  rounded-[2.5vw] md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] text-[3.5vw] backdrop-blur-2xl text-center border-red-500 border"
              onClick={() => {
                setadd_publdcication(false);
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
        </div>
      </div>
    </>
  );
};

export default Modal_add_publication;
