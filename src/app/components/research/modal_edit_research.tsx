"use client";

import { supabase } from "@/app/utils/supabaseClient";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import example2 from "../../../../public/images/consultation/example2.png";
import { v4 } from "uuid";
import Image_list from "../general-component/image";
import { plugins, toolbars } from "./tinymce";

const Modal_edit_research = ({ setopen_edit, setText, text, edit_ID }: any) => {
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState(""); // State for dropdown
  const [error, setError] = useState("");
  const [caption, setcaption] = useState("");
  const [article_link, setarticle_link] = useState("");
  //   const [category, setcategory] = useState("");

  useEffect(() => {
    const fetchInitialData = async () => {
      if (edit_ID) {
        const { data, error } = await supabase

          .from("media")
          .select("*")
          .eq("id", edit_ID) // Filter by id
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching initial data:", error);
        } else {
          // setdata(data);
          console.log(data);
          setarticle_link(data[0].link);
          setimage_link(data[0].img);
          setSelectedType(data[0].type);
          setcaption(data[0].caption);
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
    // console.log(caption, article_link, selectedType);
    if (!caption || !article_link || !selectedType || !image_link) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    let result;
    if (edit_ID) {
      // Update existing publication
      result = await supabase
        .from("media")
        .update({
          caption: caption,
          img: image_link,
          link: article_link,
          type: selectedType,
        })
        .eq("id", edit_ID);

      console.log(edit_ID);
    } else {
      console.log("its adding");
      // Add new publication
      result = await supabase.from("media").insert([
        {
          caption: caption,
          img: image_link,
          link: article_link,
          type: selectedType,
        },
      ]);
    }

    const { data, error } = result;
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setopen_edit(false);
      window.location.reload();
      // Optionally reset the form fields if adding a new publication

      //   setpublication_title("");
      //   setpublication_body("");
      //   setpublication_data_link("");
      //   setpublication_pdf_link("");
    }
  };

  const [open_img, setopen_img] = useState(false);
  const [image_link, setimage_link] = useState("");

  //   THIS IS FOR THE TINY MCE EDITOR
  //   THIS IS FOR THE TINY MCE EDITOR
  //   THIS IS FOR THE TINY MCE EDITOR
  //   THIS IS FOR THE TINY MCE EDITOR
  const [value, setValue] = useState("");
  //   const [text, setText] = useState("");

  const onEditorInputChange = (newValue: any, editor: any) => {
    setValue(newValue);
    setText(editor.getContent());
  };

  useEffect(() => {
    console.log(text);
  }, [text]);
  const [editorKey, setEditorKey] = useState(0);
  useEffect(() => {
    // Update the key to force reinitialization
    setEditorKey((prevKey) => prevKey + 1);
  }, [open_img]);
  return (
    <>
      {open_img && (
        <Image_list setopen_img={setopen_img} setimage_link={setimage_link} />
      )}

      <div className="w-full h-full fixed top-0 left-0  bg-white bg-opacity-[80%] md:bg-opacity-[100%] overflow-x-hidden overflow-y-scroll z-[1000] flex justify-center  items-center">
        <div className="bg-white md:px-[5%] justify-center md:rounded-[1vw]  md:py-[3vw] py-[10vw] w-[95%] px-[3%] md:w-[30vw]  rounded-[5vw] flex md:gap-[1vw] capitalize flex-col gap-[6vw]">
          {!edit_ID || (edit_ID && article_link) ? (
            <>
              {" "}
              <p className="md:text-[2vw] text-[8vw] text-center">
                {" "}
                {edit_ID ? "edit" : "Add "} Research here
              </p>
              {/* title and image section */}
              <div className="md:flex-row gap-[4vw] flex-col flex md:items-end justify-center md:gap-[1vw]">
                <div className="flex w-full  md:gap-[1vw] gap-[5%] ">
                  <button
                    style={{ whiteSpace: "nowrap" }}
                    className="  md:h-[3vw]  h-[13vw] w-full md:text-[0.9vw] md:px-[1.3vw] bg-[#103210] text-white md:rounded-[0.5vw] hover:bg-white hover:text-black  rounded-[2vw] hover:border-black border-[#103210] border"
                    onClick={() => {
                      setopen_img(true);
                    }}
                  >
                    {image_link ? "Replace" : "Choose"} research Image
                  </button>
                  {image_link && (
                    <div className="md:h-[5vw]   h-[13vw] w-full md:rounded-[0.5vw] rounded-[2vw] relative overflow-hidden">
                      <Image
                        src={image_link}
                        unoptimized
                        width="0"
                        height="0"
                        alt="image link"
                        className="w-full  absolute  absolute_center h-fit"
                      />
                    </div>
                  )}
                </div>
              </div>
              {/* the links for viewing */}
              <div className="w-full flex md:gap-[2vw] gap-[5%]  justify-between">
                {/* the download link */}
                <div className="flex flex-col md:gap-[0.3vw] gap-[2vw] w-full">
                  <label
                    className="capitalize md:text-[1vw] text-[3.5vw]"
                    htmlFor="pdf_link"
                  >
                    Research title
                  </label>
                  <input
                    type="text"
                    id="pdf_link"
                    onChange={(e) => {
                      setarticle_link(e.target.value);
                    }}
                    value={article_link || ""}
                    className="border md:rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white md:h-[3vw] w-full h-[10vw] rounded-[1.5vw] px-[3%] md:text-[1vw] text-[3.5vw]"
                    placeholder="input your Research title here .."
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-[0.3vw] gap-[2vw]">
                <label
                  className="capitalize md:text-[1vw] text-[3.5vw]"
                  htmlFor="description"
                >
                  Research caption
                </label>
                <textarea
                  //   type="text"
                  id="description"
                  rows={4}
                  //   rows={50}
                  value={caption || ""}
                  onChange={(e) => {
                    setcaption(e.target.value);
                  }}
                  className="border  md:rounded-[1vw] rounded-[1.5vw]  outline-none bg-[black] bg-opacity-[70%] placeholder:text-white capitalize text-white resize-none p-[2%] md:text-[1vw] text-[3.5vw]"
                  placeholder="input Research caption here .."
                />
              </div>
              {error && (
                <p className="text-red-500 md:text-[1vw] text-[3.5vw]">
                  {error}
                </p>
              )}
              <div className="w-full md:pt-[2vw] flex justify-center gap-[5%]  md:gap-[2vw] ">
                <button
                  className=" w-full py-[2.6vw]  md:py-[0.5vw] capitalize bg-white  rounded-[2.5vw] md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] text-[3.5vw] backdrop-blur-2xl text-center border-red-500 border"
                  onClick={() => {
                    setopen_edit(false);
                  }}
                >
                  close editor
                </button>
                <button
                  onClick={submit_form}
                  disabled={loading}
                  type="submit"
                  className=" w-full py-[2.6vw]  md:py-[0.5vw] capitalize text-white  rounded-[2.5vw] md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] backdrop-blur-2xl text-center bg-red-500 border"
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
        {/* this is for the editor  */}
        <Editor
          key={editorKey}
          apiKey={"o6poh8mrrg3olm60uzci8redu8zma5ystr23b8f78hku2msu"} // your api key here
          onEditorChange={(newValue, editor) =>
            onEditorInputChange(newValue, editor)
          }
          onInit={(evt, editor) => setText(editor.getContent())}
          value={value}
          init={{
            height: "80vh",
            width: "60vw",
            plugins: plugins,
            toolbar: toolbars,
          }}
          initialValue={"Write your research here..."}
        />{" "}
      </div>
    </>
  );
};

export default Modal_edit_research;
