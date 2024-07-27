"use client";

import { useState } from "react";
import Modal_add_publication from "./modal_add_publication";
import { supabase } from "@/app/utils/supabaseClient";

const Add_publication = ({
  setpublication_title,
  setdelete_publication,
  refresh_all_params,
}: any) => {
  const [add_publication, setadd_publication] = useState(false);

  const deleteAllPublications = async () => {
    try {
      // Make sure to confirm the action with the user before proceeding
      if (window.confirm("Are you sure you want to delete all publications?")) {
        // Perform the delete operation
        const { data, error } = await supabase
          .from("publication")
          .delete()
          .neq("id", 0); // Assuming 'id' is a non-nullable primary key

        if (error) {
          throw new Error(error.message);
        }

        console.log("All publications have been deleted.");
        // Optionally, reload the page or update the UI
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting publications:", error);
    }
  };

  return (
    <>
      <div className="w-full  md:py-[2vw] md:px-[10vw] flex md:gap-[2vw]">
        <button
          className=" md:px-[3vw] md:py-[1vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center border-red-500 border"
          onClick={refresh_all_params}
        >
          Add new publication
        </button>
        <button
          className=" md:px-[3vw] md:py-[1vw] capitalize bg-white  md:rounded-[0.5vw] hover:bg-opacity-[60%] backdrop-blur-2xl text-center border-red-500 border"
          onClick={() => {
            setpublication_title("");
            // setdelete_publication(true);
            deleteAllPublications();
          }}
        >
          delete all publications
        </button>
      </div>
    </>
  );
};

export default Add_publication;
