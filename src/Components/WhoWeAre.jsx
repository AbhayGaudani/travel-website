import React from "react";
import img from "../assets/Rectangle 52.png";
import vbgimg from "../assets/BG detail.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";

const WhoWeAre = () => {
  return (
    <>
      <div className="w-full h-[500px] relative">
        <div>
          <img
            src={img}
            alt=""
            className="mt-[106px] ml-[684.84px] h-[375px] w-[615px] shadow-lg"
          />
          <FaCirclePlay className="h-[98px] w-[98px] absolute top-0 ml-[937px] mt-[131px] bg-transparent text-white opacity-[47%]" />
          <img
            src={vbgimg}
            alt=""
            className="top-0 right-0 left-0 bottom-0 absolute ml-[1186px] -z-1 mt-[-40px]"
          />
          <h1 className="ml-[17%]  font-SourceSerif text-[28px] font-bold mt-[-370px]">
            Get ready to unwind
          </h1>
          <div className="w-[122px] h-[2px] bg-[#F5B963] ml-[17%]"></div>
          <p className="absolute font-normal text-[14px] font-Poppins text-[#606872] top-0 mt-[75px] ml-[17%] text-base/6 w-[354px]">
            A cabin getaway can be a wonderful way to relax and reconnect with
            nature. Many cabin rentals are located in beautiful, secluded areas,
            surrounded by trees and other natural beauty. <br />
            <br /> A cabin getaway can be a wonderful way to escape the hustle
            and bustle of daily life and reconnect with nature. <br />
            <br />
            <span className="font-semibold flex">
              Learn more
              <IoIosArrowForward className="text-[#606872] text-[16px] mt-[4px] ml-[5px]" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
