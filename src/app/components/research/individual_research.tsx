"use client";

const Individual_research = ({ text }: any) => {
  return (
    <>
      <div className="mt-4 p-4 border2 ">
        <h2>HTML Content from Editor</h2>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>{" "}
    </>
  );
};

export default Individual_research;
