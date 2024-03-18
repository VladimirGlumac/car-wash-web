import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";

const Main = () => {
  return (
    <div className="w-full h-[100vh] bg-white flex">
      <div
        className=" w-full h-screen flex flex-col justify-start items-center pt-[140px]  z-20"
        style={{
          backgroundImage: `url('/MainImg.png')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[80%] flex justify-evenly gap-x-3 border-b-[1px] pb-8">
          <p className="flex justify-center items-center gap-x-1">
            <HiOutlineMapPin size={20} /> 6391 Elgin St. Celina, Delaware 10299
          </p>
          <p className="flex justify-center items-center gap-x-1">
            <FiPhone size={20} /> (406) 555-0120
          </p>
          <p className="flex justify-center items-center gap-x-1">
            <GoMail size={20} /> carwash@example.com
          </p>
          <p className="flex justify-center items-center gap-x-1">
            <CiClock2 size={20} /> Mon - Sun: Open 27/7
          </p>
        </div>
        <div className="w-[80%] flex flex-col pt-4 gap-y-4">
          <p>#1 Detailing Car Services in Colorado</p>
          <h1 className="font-bold text-8xl">
            KEEP YOUR CAR
            <br /> CLEAN ALWAYS
          </h1>
          <p>
            Car Was is a brand which is literally going to change the people
            think car cleaning.
          </p>
          <button className="font-bold bg-red-800 border-2 border-red-800 hover:bg-white hover:text-red-800 w-[200px] h-[50px] rounded-full transition duration-300">
            GET AN APPOINTMENT
          </button>
        </div>
      </div>
      <div
        className=" w-full h-[95%] absolute top-0 right-0 z-10"
        style={{
          backgroundImage: `url('/Subtract.png')`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className=" w-full h-[91%] absolute top-0 right-0 "
        style={{
          backgroundImage: `url('/Subtract-two.png')`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Main;
