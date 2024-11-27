import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="container mx-auto p-4 bg-white my-5">
      <div className="wrapper flex">
        <div className="">
          <h1 className="text-[48px] font-mulish font-[700] mt-10 w-[652px] leading-[56px] text-[#3C567B]">
            Virtual healthcare Saviour for you
          </h1>
          <p className="text-[19px] font-[500] font-roboto leading-[27px] text-[#93C1F9]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <button className="">Consult today</button>
        </div>
        <div>
          <img className="w-full object-cover" src={hero} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;