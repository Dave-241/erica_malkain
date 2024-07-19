"use client";

import {
  Bt_Beau_Regualr,
  Helvetica_bold,
  Helvetica_light,
  Helvetica_medium,
} from "@/app/utils/fonts";
import { useEffect, useRef, useState } from "react";
import Edit_each_publication from "./edit_each_publication";
import Add_publication from "./add_publication";
import Delete_publication from "./delete_publication";
import Link from "next/link";
import Modal_add_publication from "./modal_add_publication";

const Publication = () => {
  const items = [
    {
      title: " first THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023. ",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/firs_data",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/data",
      pdf_link: "malkain.com/pdf",
    },
    {
      title: "THEORY OF COLLECTIVE MIND. TRENDS IN COGNITIVE SCIENCES.",
      body: "Shteynberg, G., Hirsh, J. B., Wolf, W., Bargh, J. A., Boothby, E. J., Colman, A. M., Echterhoff, G., & Rossignac-Milon, M. 2023.",
      data_link: "malkain.com/last_dat",
      pdf_link: "malkain.com/pdf",
    },
  ];
  const [start_anime, setstart_anime] = useState(false);
  const [isloggedin, setisloggedin] = useState(false);
  const [delete_publication, setdelete_publication] = useState(false);
  const [publication_title, setpublication_title] = useState("");
  const [publication_body, setpublication_body] = useState("");
  const [publication_data_link, setpublication_data_link] = useState("");
  const [publication_pdf_link, setpublication_pdf_link] = useState(" ");
  const [add_publication, setadd_publication] = useState(false);

  useEffect(() => {
    setstart_anime(true);
  }, []);

  const itemsRefs = useRef<any>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("comeup");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 },
    );

    itemsRefs.current.forEach((ref: any) => {
      observer.observe(ref);
    });

    return () => {
      itemsRefs.current.forEach((ref: any) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const edit_each_publication_modal_param = (
    title: any,
    body: any,
    view_data: any,
    pdf_link: any,
  ) => {
    setpublication_title(title);
    setpublication_body(body);
    setpublication_data_link(view_data);
    setpublication_pdf_link(pdf_link);
    setadd_publication(true);
  };

  const refresh_all_params = () => {
    setpublication_title("");
    setpublication_body("");
    setpublication_data_link("");
    setpublication_pdf_link("");
    setadd_publication(true);
  };

  return (
    <>
      {/* add publication */}
      {isloggedin && (
        <Add_publication
          refresh_all_params={refresh_all_params}
          setpublication_title={setpublication_title}
          setdelete_publication={setdelete_publication}
        />
      )}
      {/* delete publications */}
      {delete_publication && (
        <Delete_publication
          setdelete_publication={setdelete_publication}
          title={publication_title}
        />
      )}
      {/* modal to add publications */}
      {add_publication && (
        <Modal_add_publication
          setadd_publdcication={setadd_publication}
          publication_title={publication_title}
          publication_body={publication_body}
          publication_data_link={publication_data_link}
          publication_pdf_link={publication_pdf_link}
          setpublication_title={setpublication_title}
          setpublication_body={setpublication_body}
          setpublication_data_link={setpublication_data_link}
          setpublication_pdf_link={setpublication_pdf_link}
        />
      )}

      <div className="w-full  md:py-[5vw]  md:px-[10%]">
        <div className=" w-full flex flex-col md:gap-[1.5vw]">
          {items.map((e: any, index: any) => {
            return (
              <>
                <div
                  ref={(ref) => {
                    if (ref) {
                      itemsRefs.current[index] = ref;
                    }
                  }}
                  key={index}
                  className="w-full initial flex justify-between md:rounded-[1vw] md:px-[3vw] relative md:py-[1.5vw] bg-[#FEFAFA] bg-opacity-[62%] items-center"
                >
                  {isloggedin && (
                    <Edit_each_publication
                      setpublication_title={setpublication_title}
                      setdelete_publication={setdelete_publication}
                      edit_each_publication_modal_param={
                        edit_each_publication_modal_param
                      }
                      title={e.title}
                      body={e.body}
                      view_data={e.data_link}
                      pdf_data={e.pdf_link}
                      setadd_publdcication={setadd_publication}
                    />
                  )}
                  {/* the first section */}
                  <div className="flex flex-col md:w-[50%] md:gap-[0.5vw]">
                    <h2
                      //   ref={hero_ref}
                      className={`${Helvetica_bold.className} md:text-[1.3vw] uppercase text-[#440C0C]`}
                    >
                      {e.title}
                    </h2>

                    <p
                      className={`${Helvetica_light.className} md:text-[1.1vw] text-[#a46035]`}
                    >
                      {e.body}
                    </p>
                  </div>

                  <div
                    className={`${Bt_Beau_Regualr.className} flex capitalize md:gap-[1vw]  items-center`}
                  >
                    {" "}
                    <Link
                      href={e.data_link}
                      className=" md:rounded-[1.7vw] md:text-[1vw] border-[#440C0C] md:border-[0.1vw] bg-[#FEF6F6] flex justify-center items-center md:py-[0.8vw] md:px-[2vw] text-[#440C0C]  hover:bg-[white]"
                    >
                      DATA
                    </Link>
                    <Link
                      href={e.pdf_link}
                      className=" md:rounded-[1.7vw] border-[#440C0C] md:text-[1vw] md:border-[0.1vw] bg-[#440C0C] flex justify-center items-center md:py-[0.8vw] md:px-[2vw] text-white hover:bg-[#C1A391] hover:border-[#C1A391]"
                    >
                      PDF
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Publication;
