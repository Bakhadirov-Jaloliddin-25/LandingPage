import React from "react";
import { CARD } from "../static";

const Main = () => {
  const productItem = CARD?.map((item, inx) => (
    <>
      <div
        key={inx}
        className="card__item grid items-center justify-center gap-6 rounded-lg shadow-[0px_8px_20px_-2px_rgba(17,_12,_46,_0.15)] p-10 cursor-pointer duration-500 hover:scale-110"
      >
        <img src={item.url} alt="" className="mx-auto " />
        <h2 className="mx-auto text-[24px] text-black font-mulish">
          {item.title}
        </h2>
        <p className="text-[16px] max-w-[270px] text-[#7D7987] font-mulish font-[300] leading-[28px] w-[266px] px-5">
          {item.desc}
        </p>
      </div>
    </>
  ));

  return (
    <>
      <div className="container min-w-[1280px] w-[100%] mx-auto flex flex-col mt-5 justify-center items-center gap-4 mb-[80px]">
        <h2 className="text-[45px] text-[#462E6A]">Services we Offer</h2>
        <p className="font-bold">____________</p>
        <p className="text-[19px] text-[#CCD2E9] max-w-[70%] flex justify-center items-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <div className="grid grid-cols-3 gap-20 my-10">{productItem}</div>
        <button className="w-[200px] h-[60px] rounded-full font-mulish font-[700] bg-white border-2 border-[#458FF6] text-[#458FF6] duration-500 hover:bg-slate-800">
          Learn more
        </button>
      </div>
    </>
  );
};

export default Main;
