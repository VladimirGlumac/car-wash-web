"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { servicesData, aboutUsData } from "./NavMenuData";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [dropdownAboutUs, setDropdownAboutUs] = useState(false);
  const [dropdownService, setDropdownService] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 w-full h-[80px] bg-[#1c1c1c] md:backdrop-blur-lg border-b-gray-400 border-b-[1px] z-40">
      <div className="w-full h-full flex flex-row justify-evenly items-center">
        <div className="flex w-full items-center justify-start md:justify-center gap-8">
          <a href="/" className="w-[80px] ml-2">
            <img
              src="/carwashlogo.png"
              alt="logo image"
              width={120}
              height={100}
            />
          </a>
          <ul className="hidden md:flex gap-x-6">
            <li>
              <a href="/">Home</a>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDropdownAboutUs(true)}
              onMouseLeave={() => setDropdownAboutUs(false)}
            >
              <a href="/" className="flex flex-row justify-center items-center">
                About Us
                <MdKeyboardArrowDown size={20} />
              </a>
              {dropdownAboutUs && (
                <ul className="w-[150px] absolute flex flex-col gap-y-2 items-start p-4 top-full left-0 bg-red-800 shadow-md py-2">
                  {aboutUsData.map((service, index) => (
                    <li
                      key={index}
                      className="transition-transform duration-300 hover:translate-x-2 hover:text-black"
                    >
                      <a href={service.link}>{service.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDropdownService(true)}
              onMouseLeave={() => setDropdownService(false)}
            >
              <a
                href="/"
                className="flex flex-row justify-center items-center "
              >
                Services
                <MdKeyboardArrowDown size={20} />
              </a>
              {dropdownService && (
                <ul className="w-[180px] absolute flex flex-col items-start gap-y-2 p-4  top-full left-0 bg-red-800 shadow-md py-2">
                  {servicesData.map((service, index) => (
                    <li
                      key={index}
                      className="transition-transform duration-300 hover:translate-x-2 hover:text-black"
                    >
                      <a href={service.link}>{service.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center justify-center w-[80%]">
          <button className="border-2 border-red-800 font-bold hover:bg-red-800 p-3 rounded-full transition duration-300">
            REQUEST A QUOTE
          </button>
        </div>

        <div className="flex items-center justify-end">
          <button className="md:hidden text-xl p-4" onClick={toggleMenu}>
            {showMenu ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="h-screen md:hidden w-full bg-[#1c1c1c] p-4">
          <ul className="flex flex-col items-start">
            <li>
              <a href="/">Home</a>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDropdownService(true)}
              onMouseLeave={() => setDropdownService(false)}
            >
              <a
                href="/"
                className="flex flex-row justify-center items-center "
              >
                About Us
                <MdKeyboardArrowDown size={20} />
              </a>
              {dropdownAboutUs && (
                <ul className="w-full flex flex-col gap-y-2 items-start pl-6 top-full left-0 py-2 transition duration-100 ease-in-out ">
                  {aboutUsData.map((service, index) => (
                    <li key={index} className="hover:text-red-800">
                      <a href={service.link}>{service.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => setDropdownAboutUs(true)}
              onMouseLeave={() => setDropdownAboutUs(false)}
            >
              <a
                href="/"
                className="flex flex-row justify-center items-center "
              >
                Services
                <MdKeyboardArrowDown size={20} />
              </a>
              {dropdownAboutUs && (
                <ul className="w-full flex flex-col gap-y-2 items-start pl-6 top-full left-0 py-2 transition duration-100 ease-in-out ">
                  {servicesData.map((service, index) => (
                    <li key={index} className="hover:text-red-800">
                      <a href={service.link}>{service.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
          <div className="w-full flex justify-center items-center pt-4">
            <button className="border-2 border-red-800 font-bold hover:bg-red-800 p-3 rounded-full transition duration-300">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
