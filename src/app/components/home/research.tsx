"use client";

const Home_research = () => {
  const items = ["", "", "", "", "", ""];
  return (
    <>
      <div className="w-full border2">
        {/* this is the section for the scrollable elements */}
        <div className="w-full md:min-h-[35vw] overflow-hidden relative border2">
          <div className="absolute boder2 flex top-0 left-0">
            {items.map(() => {
              return <div className={`md:w-[30vw] md:h-[20vw] border2`}></div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_research;
