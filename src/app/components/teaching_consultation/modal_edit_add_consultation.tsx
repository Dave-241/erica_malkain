"use client";

const Modal_edit_consulation = () => {
  // title, background color, heading color , body, image
  return (
    <>
      <div className="w-full border2 h-full flex justify-center items-center z-[1000] fixed top-0 left-0 bg-black bg-opacity-[60%]">
        <div
          className="md:w-[70vw] bg-white md:h-[35vw] md:rounded-[2vw]
        "
        >
          {/* the buttons for call to action */}
          <div className="w-full md:pt-[2vw] flex justify-center  md:gap-[4vw] ">
            <button
              className=" md:px-[4vw] md:py-[0.5vw]capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] md:text-[1vw] backdrop-blur-2xl text-center border-red-500 border"
              onClick={() => {
                // setadd_publdcication(false);
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
    </>
  );
};

export default Modal_edit_consulation;
