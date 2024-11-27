import React from "react";
import { LINKS } from "../static";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const links = LINKS.map((link) => (
    <li key={link.id} className="mx-5">
      <a
        href="#"
        className="text-primary font-medium opacity-50 hover:font-medium hover:opacity-100 leading-normal transition-opacity relative text-lg after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full focus:after:w-full focus:after:bg-blue-700 focus:opacity-100"
      >
        {link.link}
      </a>
    </li>
  ));

  return (
    <header>
      <div className="container mx-auto p-4 bg-white my-5">
        <nav className="flex px-20">
          <div className="w-full flex gap-5 items-center">
            <span className="w-10 h-10 bg-indigo-500 rounded-full grid place-content-center font-mulish">
              <img src={logo} alt="logo.svg" />
            </span>
            <p className="text-xl font-bold">Saviour Care</p>
          </div>
          <div className="w-full flex items-center justify-end">
            <ul className="flex">{links}</ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
