import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Logo, bgPattern } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={"sm:px-32 px-8 w-full bg-red flex flex-row items-center justify-between sm:gap-3 sm:pt-[70px] pt-16 relative top-0 z-20 "}>
      <img src={bgPattern} alt="" className="absolute top-0 left-0 -z-10" />
      <div className="flex flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div
          className="flex items-center mx-auto max-w-7xl "
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Logo />
        </div>

        {/* Search Component */}
        <label class="hidden relative md:block">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <BiSearch className="w-[21px] h-[21px]" />
          </span>
          <input
            className="placeholder:text-sm placeholder:text-[#616161] block bg-white w-full border border-black  py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>

      <div className="flex flex-row justify-between items-center gap-24">
        {/* NavLinks */}
        <ul className="hidden list-none sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              id={nav.id}
              className={`${active === nav.id ? "text-black" : "text-[#616161]"} hover:text-black text-[15px] font-bold cursor-pointer`}
              onClick={() => setActive("Random1")}
            >
              <a href={`#${nav.id}`}>{nav.name}</a>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <div className="w-[132px] h-[39px] bg-black hidden sm:block relative">
          <button className="absolute w-full h-full text-center bg-[#d73032] text-white border border-black top-2 right-2">Login</button>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle && <AiOutlineClose className="w-5 h-5" onClick={() => setToggle(!toggle)} />}
          {!toggle && <AiOutlineMenu className="w-5 h-5" onClick={() => setToggle(!toggle)} />}

          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-[#d73032] border border-black absolute top-24 right-0 mx-4 my-2 min-w-[140px] z-10`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  id={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.id ? "text-white" : "text-white"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("Random1");
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.name}</a>
                </li>
              ))}

              <li>
                <button className="w-[100%] p-2 h-[30px] flex items-center bg-white text-[[#d73032]] border border-black text-center">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
