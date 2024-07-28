"use client";

import { supabase } from "@/app/utils/supabaseClient";

const Edit_each_category = ({ setopen_edit, id }: any) => {
  const deleteMediapost = async (id: any) => {
    try {
      console.log(id);
      // Make sure to confirm the action with the user before proceeding
      if (window.confirm("Are you sure you want to delete this Media post?")) {
        // Perform the delete operation
        const { data, error } = await supabase
          .from("media")
          .delete()
          .eq("id", id); // Filter by id

        if (error) {
          throw new Error(error.message);
        }

        console.log("Media post has been deleted.");
        // Optionally, reload the page or update the UI
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting Media post:", error);
    }
  };

  return (
    <>
      <div className="w-full  absolute  rounded-[5vw] md:rounded-[1.5vw] flex-col top-0 left-0 h-full flex justify-center items-end md:p-[0.5vw] md:gap-[1.5vw] capitalize bg-black bg-opacity-[30%] z-[60] md:text-[1.5vw] p-[5vw] text-[3.5vw] gap-[5vw]">
        <button
          className=" md:w-[10vw]  h-[10vw] w-[30vw] md:h-[4vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center "
          onClick={() => {
            setopen_edit(true);
          }}
        >
          edit
        </button>
        <button
          className=" md:w-[10vw] md:h-[4vw]  h-[10vw] w-[30vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center "
          onClick={() => {
            deleteMediapost(id);
          }}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default Edit_each_category;
