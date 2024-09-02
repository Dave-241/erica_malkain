"use client";

import { supabase } from "@/app/utils/supabaseClient";

const Edit_each_consulation = ({
  setdelete_consulation,
  title,
  body,
  bg,
  text_color,
  img,
  read_more,
  institue,
  year,
  edit_each_consulation_modal_param,
  bg_img,
  id,
}: any) => {
  const deleteconsultationById = async (id: number) => {
    try {
      // Perform the delete operation
      const { error } = await supabase
        .from("consultation")
        .delete()
        .eq("id", id);

      if (error) {
        throw new Error(error.message);
      }

      // Optionally: Update the UI state after deletion
      // setProductData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting publication:", error);
    }
  };

  // Example of using the delete function in the component
  const handleDeleteClick = (id: number) => {
    console.log(id);
    // Confirm delete action
    if (
      window.confirm(
        "Are you sure you want to delete this consultation ? Note : This can't be undone",
      )
    ) {
      deleteconsultationById(id);
      window.location.reload();
    }
  };

  return (
    <>
      <div className="w-full  absolute flex-col top-0 left-0 h-full flex justify-center items-end md:p-[0.5vw] md:gap-[1.5vw] capitalize bg-black bg-opacity-[30%] z-[100] md:text-[1.5vw] p-[5vw] text-[3.5vw] gap-[5vw]">
        <button
          className=" md:w-[10vw]  h-[10vw] w-[30vw] md:h-[4vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center "
          onClick={() => {
            edit_each_consulation_modal_param(
              title,
              body,
              institue,
              year,
              read_more,
              img,
              bg,
              text_color,
              id,
              bg_img,
            );
          }}
        >
          edit
        </button>
        <button
          className=" md:w-[10vw] md:h-[4vw]  h-[10vw] w-[30vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center "
          onClick={() => {
            // setdelete_consulation(true);
            handleDeleteClick(id);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default Edit_each_consulation;
