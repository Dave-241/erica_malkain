"use client";

import {
  Helvetica_light,
  Helvetica_medium,
  spline_font,
} from "@/app/utils/fonts";

const Individual_research = ({ text }: any) => {
  return (
    <>
      <div className=" md:pt-[8vw] pt-[25vw] p-4  bg-white ">
        <div className="w-full md:container md:flex-row flex-col mx-auto  bg-white flex md:justify-between md:gap-[10%] gap-[2rem]">
          <h1
            className={`${spline_font.className} text-4xl  w-full md:text-5xl lg:text-6xl font-bold`}
          >
            Do we know what people think of us?
          </h1>

          <p
            className={`${Helvetica_medium.className} w-full text-[1rem] md:text-xl  `}
          >
            Having conversations with new people is an important and rewarding
            part of social life. Yet conversations are also intimidating and
            anxiety provoking, and people wonder and worry about what their
            conversation partners really think of them. Are people accurate in
            their estimates?
          </p>
        </div>
        <div
          className={` ${Helvetica_light.className} md:container flex flex-col items-center mx-auto  pt-6 md:p-6 lg:p-12 bg-transparent text-dark-blue dark:text-white 
            [&_p]:text-[1rem] [&_p_md]:text-xl  [&_p]:leading-relaxed [&_p]:mb-4 
            [&_h1]:text-3xl [&_h1]:w-full [&_h1_md]:text-4xl [&_h1_lg]:text-5xl [&_h1]:font-bold [&_h1]:mb-4 
            [&_h2]:text-2xl [&_h2]:w-full [&_h2_md]:text-3xl [&_h2_lg]:text-4xl [&_h2]:font-bold [&_h2]:mb-4 
            [&_h3]:text-xl [&_h3]:w-full [&_h3_md]:text-2xl [&_h3_lg]:text-3xl [&_h3]:font-bold [&_h3]:mb-4 
            [&_h4]:text-lg [&_h4]:w-full [&_h4_md]:text-xl [&_h4_lg]:text-2xl [&_h4]:font-bold [&_h4]:mb-4 
            [&_h5]:text-base [&_h5]:w-full [&_h5_md]:text-lg [&_h5_lg]:text-xl [&_h5]:font-bold [&_h5]:mb-4 
            [&_h6]:text-sm [&_h6]:w-full [&_h6_md]:text-base [&_h6_lg]:text-lg [&_h6]:font-bold [&_h6]:mb-4 
            [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:mb-4 
            [&_ol]:list-decimal [&_ol]:pl-4 [&_ol]:mb-4 
            [&_li]:mb-2 
            [&_table]:w-full [&_table]:border-collapse [&_table]:border 
            [&_th]:border [&_th]:px-4 [&_th]:py-2 [&_th]:bg-gray-200 [&_th]:text-left 
            [&_td]:border [&_td]:px-4 [&_td]:py-2
            [&_img]:inline [&_img]:m-2
            [&_a]:underline [&_a]:underline-offset-[5px] [&_a]:text-[#440C0C]
            `}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>{" "}
    </>
  );
};

export default Individual_research;
// ${CabinetGrotesk_medium.className}
