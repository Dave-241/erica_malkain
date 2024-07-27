"use client";

import { supabase } from "@/app/utils/supabaseClient";
import { useState } from "react";
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
      <div className="w-full h-full fixed top-0 left-0  bg-black bg-opacity-[50%] z-[1000] flex justify-center items-center">
        <div className="bg-white md:px-[5%] justify-center md:rounded-[1vw] md:h-[35vw] md:w-[50vw] flex md:gap-[1vw] capitalize flex-col">
          <p className="md:text-[2vw] text-center">
            {" "}
            {edit_ID ? "edit" : "Add new"} publication here
          </p>
          <div className="flex flex-col md:gap-[0.3vw]">
            <label className="capitalize md:text-[1vw]" htmlFor="title">
              Publication title
            </label>
            <input
              type="text"
              id="title"
              value={publication_title || ""}
              onChange={(e) => {
                setpublication_title(e.target.value);
              }}
              className="border rounded-[1vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white md:h-[3vw] md:px-[3%] md:text-[1vw]"
              placeholder="type in publication title here .."
            />
          </div>
          <div className="flex flex-col md:gap-[0.3vw]">
            <label className="capitalize md:text-[1vw]" htmlFor="description">
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
              className="border  rounded-[1vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white  md:p-[2%] md:text-[1vw]"
              placeholder="input publication description here .."
            />
          </div>

          {/* the links for viewing */}
          <div className="w-full flex md:gap-[2vw]  justify-between">
            {/* the data link */}
            <div className="flex flex-col md:gap-[0.3vw] w-full">
              <label className="capitalize md:text-[1vw]" htmlFor="data_link">
                view data link
              </label>
              <input
                type="text"
                value={publication_data_link || ""}
                id="data_link"
                onChange={(e) => {
                  setpublication_data_link(e.target.value);
                }}
                className="border rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white md:h-[3vw] md:px-[3%] md:text-[1vw]"
                placeholder="input your data link here .."
              />
            </div>
            {/* the download link */}
            <div className="flex flex-col md:gap-[0.3vw] w-full">
              <label className="capitalize md:text-[1vw]" htmlFor="pdf_link">
                view pdf link
              </label>
              <input
                type="text"
                id="pdf_link"
                onChange={(e) => {
                  setpublication_pdf_link(e.target.value);
                }}
                value={publication_pdf_link || ""}
                className="border rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white md:h-[3vw] md:px-[3%] md:text-[1vw]"
                placeholder="input your pdf download link here .."
              />
            </div>
          </div>

          {error && <p className="text-red-500 md:text-[1vw]">{error}</p>}
          <div className="w-full md:pt-[2vw] flex justify-center  md:gap-[4vw] ">
            <button
              className=" md:px-[4vw] md:py-[0.5vw]capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] backdrop-blur-2xl text-center border-red-500 border"
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
              className=" md:px-[4vw] md:py-[0.5vw] capitalize text-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] backdrop-blur-2xl text-center bg-red-500 border"
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
