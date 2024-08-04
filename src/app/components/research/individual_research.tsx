"use client";

const Individual_research = ({ text }: any) => {
  return (
    <>
      <div className="mt-4 p-4 border2 ">
        <h2>HTML Content from Editor</h2>
        <div
          className={`md:container flex flex-col items-center mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-transparent text-dark-blue dark:text-white 
            [&_p]:text-lg [&_p_md]:text-xl [&_p_lg]:text-2xl [&_p]:leading-relaxed [&_p]:mb-4 
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
            `}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>{" "}
    </>
  );
};

export default Individual_research;
// ${CabinetGrotesk_medium.className}
