"use client";

const Edit_each_consulation = ({
  setdelete_publication,
  setpublication_title,
  title,
  body,
  view_data,
  pdf_data,
  edit_each_publication_modal_param,
}: any) => {
  return (
    <>
      <div className="w-full edit_border absolute flex-col top-0 left-0 h-full flex justify-center items-end md:p-[0.5vw] md:gap-[1.5vw] capitalize bg-black bg-opacity-[30%]">
        <button
          className=" md:w-[8vw] md:h-[2vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center border-red-500 border"
          onClick={() => {
            edit_each_publication_modal_param(title, body, view_data, pdf_data);
          }}
        >
          edit
        </button>
        <button
          className=" md:w-[8vw] md:h-[2vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center border-red-500 border"
          onClick={() => {
            setpublication_title(
              "Theory of collective mind. Trends in Cognitive Sciences.",
            );
            setdelete_publication(true);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default Edit_each_consulation;
