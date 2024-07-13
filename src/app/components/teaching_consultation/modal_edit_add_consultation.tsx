"use client";

import Image from "next/image";
import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
const Modal_edit_consulation = ({
  setadd_consulation,
  consultation_title,
  setconsultation_title,
  consultation_body,
  setconsultation_body,
  consultation_institute,
  setconsultation_institute,
  consultation_year,
  setconsultation_year,
  consultation_image_link,
  setconsultation_image_link,
  setconsulation_readmore_link,
  consulation_readmore_link,
  consultation_bg_color,
  setconsultation_bg_color,
  consultation_heading_text_color,
  setconsultation_heading_text_color,
}: any) => {
  // title, background color, heading color , body, image
  // const [bg_color, setbg_color] = useColor("#000000");
  // const [textc_color, settextc_color] = useColor("#000000");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log(consultation_bg_color);
  return (
    <>
      <div className="w-full border2 h-full flex justify-center items-center z-[1000] fixed top-0 left-0 bg-black bg-opacity-[60%]">
        <div
          className="md:w-[75vw] bg-white md:p-[2vw] justify-between flex flex-col md:h-[40vw] md:rounded-[2vw]
        "
        >
          <p className="md:text-[2vw] capitalize text-center">
            {" "}
            {consultation_title ? "edit" : "Add new"} publication here
          </p>{" "}
          <div className=" w-full flex justify-center md:gap-[3vw]">
            {/* the color section */}
            <div className="flex   w-[40vw] capitalize md:gap-[2vw]">
              <div className="flex flex-col md:gap-[1vw] text-center">
                <p className="md:text-[1vw]">select backgroundColor here</p>
                <ColorPicker
                  hideInput={["rgb", "hsv"]}
                  height={200}
                  color={consultation_bg_color}
                  onChange={setconsultation_bg_color}
                />
              </div>
              <div className="flex flex-col md:gap-[1vw] text-center">
                <p className="md:text-[1vw]">select title color here </p>
                <ColorPicker
                  hideInput={["rgb", "hsv"]}
                  color={consultation_heading_text_color}
                  height={200}
                  onChange={setconsultation_heading_text_color}
                />
              </div>
            </div>

            {/* the text section */}
            <div className=" flex w-full flex-col md:gap-[1.5vw]">
              <div className=" flex items-end justify-center md:gap-[1.5vw]">
                <div className="flex w-full flex-col md:gap-[0.3vw]">
                  <label htmlFor="title" className="capitalize md:text-[1vw]">
                    consulation title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={consultation_title || ""}
                    onChange={(e) => {
                      setconsultation_title(e.target.value);
                    }}
                    className="border rounded-[1vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white placeholder:text-opacity-[50%] capitalize text-white md:h-[3vw] md:px-[3%] md:text-[1vw]"
                    placeholder="Eg : NEGOTIATION COURSE , WORKSHOPS . . ."
                  />
                </div>
                <button
                  style={{ whiteSpace: "nowrap" }}
                  className=" md:h-[80%] md:text-[0.9vw] md:px-[1.3vw] bg-[#103210] text-white md:rounded-[1vw] hover:bg-white hover:text-black hover:border-black border-[#103210] border"
                >
                  {consultation_image_link ? "Replace" : "Choose"} Image
                </button>
                {consultation_image_link && (
                  <Image
                    src={consultation_image_link}
                    alt="image link"
                    className="w-[20%] h-fit"
                  />
                )}
              </div>
              <div className="flex flex-col md:gap-[0.3vw]">
                <label
                  htmlFor="description"
                  className="capitalize md:text-[1vw]"
                >
                  Consultation Description
                  <br />
                  <button
                    onClick={handleOpenModal}
                    className="ml-2 text-blue-500 underline"
                  >
                    Click here for instructions
                  </button>
                </label>

                <textarea
                  //   type="text"
                  id="description"
                  rows={5}
                  //   rows={50}
                  value={consultation_body || ""}
                  onChange={(e) => {
                    setconsultation_body(e.target.value);
                  }}
                  className="border resize-none rounded-[1vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white placeholder:text-opacity-[50%]  capitalize text-white  md:p-[2%] md:text-[1vw]"
                  placeholder="Eg : Erica is a consultant with <a href='Link_To_Behavioralize'> Behavioralize </a> , a data-driven company that applies behavioral science to understand and influence customer and managerial decision making, helping companies drive growth by identifying and solving their key behavioral challenges .."
                />
              </div>

              {/*  the read more link, the institute and the year */}
              <div className="w-full flex md:gap-[2vw]  justify-between">
                {/* the institure link */}
                <div className="flex flex-col md:gap-[0.3vw] w-full">
                  <label
                    htmlFor="institute"
                    className="capitalize md:text-[1vw]"
                  >
                    Institute
                  </label>
                  <input
                    type="text"
                    value={consultation_institute || ""}
                    id="institute"
                    onChange={(e) => {
                      setconsultation_institute(e.target.value);
                    }}
                    className="border rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white placeholder:text-opacity-[50%] capitalize text-white md:h-[3vw] md:px-[3%] md:text-[1vw]"
                    placeholder="Eg : Wharton University, Wet Cement  .."
                  />
                </div>
                {/* the year  */}
                <div className="flex flex-col md:gap-[0.3vw] w-full">
                  <label htmlFor="year" className="capitalize md:text-[1vw]">
                    year
                  </label>
                  <input
                    type="text"
                    id="year"
                    onChange={(e) => {
                      setconsultation_year(e.target.value);
                    }}
                    value={consultation_year || ""}
                    className="border rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white placeholder:text-opacity-[50%] capitalize text-white md:h-[3vw] md:px-[3%] md:text-[1vw]"
                    placeholder="Eg : 2023, 2024.."
                  />
                </div>
                {/* the readmore link */}
                <div className="flex flex-col md:gap-[0.3vw] w-full">
                  <label htmlFor="year" className="capitalize md:text-[1vw]">
                    Read more link
                  </label>
                  <input
                    type="text"
                    id="year"
                    onChange={(e) => {
                      setconsulation_readmore_link(e.target.value);
                    }}
                    value={consulation_readmore_link || ""}
                    className="border rounded-[0.5vw] outline-none bg-[black] bg-opacity-[70%] placeholder:text-white placeholder:text-opacity-[50%] normal-case text-white md:h-[3vw] md:px-[3%] md:text-[1vw]"
                    placeholder="Eg : https://www.eric.com/consulation "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* the buttons for call to action */}
          <div className="w-full md:pt-[2vw] flex justify-center  md:gap-[4vw] ">
            <button
              className=" md:px-[4vw] md:py-[0.5vw]capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] backdrop-blur-2xl text-center border-red-500 border"
              onClick={() => {
                // setadd_publdcication(false);
                setadd_consulation(false);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" md:px-[4vw] md:py-[0.5vw] capitalize text-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] backdrop-blur-2xl text-center bg-red-500 border"
            >
              upload consulation
            </button>
          </div>
        </div>
      </div>

      {/* more instructions modal */}
      {isModalOpen && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 flex items-center justify-center z-[2000] bg-gray-900 bg-opacity-50  top-0 left-0"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white p-6 rounded-md shadow-md w-11/12 md:w-1/2"
          >
            <h2 className=" font-bold mb-4 md:text-[1.2vw]">
              How to Add Links
            </h2>
            <p className="text-red-500 md:text-[1vw]">Note:</p>
            <p className="md:text-[0.9vw]">
              Please use the following HTML tag to add hyperlinks within your
              description.
            </p>
            <p className="md:text-[0.9vw] normal-case mt-2">
              Example:
              <br />
              {'<a href="LINK_TO_WET_CEMENT">Wet Cement</a>'}
              <br />
              In this example, {'"Wet Cement"'} will appear as a clickable link
              that redirects to the specified URL.
            </p>
            <p className=" normal-case md:text-[0.9vw] mt-2">
              To add your own link, replace {'"ADD_LINK_HERE"'} with the desired
              URL and {'"ADD_TEXT_HERE"'} with the text you want to display.
              <br />
              <span className="font-bold">
                {'<a href="ADD_LINK_HERE">ADD_TEXT_HERE</a>'}
              </span>
            </p>
            <button
              onClick={handleCloseModal}
              className="md:mt-[1vw] md:px-[2.3vw] md:py-[0.7vw] bg-red-500 text-white md:rounded-[1vw]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal_edit_consulation;
