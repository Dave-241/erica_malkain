"use client";

const Order_consultation_modal = ({ setopen_order_consultation }: any) => {
  return (
    <>
      <div className="fixed z-[100000] flex justify-center items-center top-0 left-0 h-full w-full bg-black bg-opacity-80">
        <div className="bg-white rounded-[2rem] w-[50%] h-[75%] flex flex-col">
          <div className="border2 h-full "></div>
          <div className="border2 flex gap-[5%] px-[5%]">
            <button className="py-[0.5rem] w-full border-b-red-600">
              Cancel{" "}
            </button>
            <button className="py-[0.5rem] w-full bg-red-600 text-white">
              Update{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order_consultation_modal;
