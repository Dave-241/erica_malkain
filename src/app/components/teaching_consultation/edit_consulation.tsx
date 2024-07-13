"use client";

const Edit_each_consulation = ({
  setdelete_consulation,
  setconsultation_title,
  title,
  body,
  view_data,
  pdf_data,
  edit_each_publication_modal_param,
}: any) => {
  return (
    <>
      <div className="w-full edit_border absolute flex-col top-0 left-0 h-full flex justify-center items-end md:p-[0.5vw] md:gap-[1.5vw] capitalize bg-black bg-opacity-[30%] z-[100] md:text-[1.5vw]">
        <button
          className=" md:w-[10vw] md:h-[4vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center border-red-500 border"
          onClick={() => {
            edit_each_publication_modal_param(title, body, view_data, pdf_data);
          }}
        >
          edit
        </button>
        <button
          className=" md:w-[10vw] md:h-[4vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center border-red-500 border"
          onClick={() => {
            setconsultation_title(title);
            setdelete_consulation(true);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default Edit_each_consulation;
