import React from "react";
import Main from "../assets/images/main1.png";

const Footer = () => {
  return (
    <div className="container mx-auto p-4 bg-white my-5">
      <div className="wrapper flex my-20">
        <div>
          <img
            className="w-full object-cover pr-20"
            src={Main}
            alt="Hero Image"
          />
        </div>
        <div className="flex flex-col pl-28">
          <h1 className="text-[48px] font-mulish font-[700] mt-10 w-[481px] leading-[56px] text-[#3C567B] mb-10">
            Leading healthcare providers
          </h1>
          <p className="text-[19px] font-[500] font-roboto w-[450px] leading-[27px] text-[#93C1F9] mb-20">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="w-[200px] h-[60px] rounded-full font-mulish font-[700] bg-white border-2 border-[#458FF6] text-[#458FF6] duration-500 hover:bg-slate-800">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
