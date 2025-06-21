import React from "react";
import bgImg from "../assets/Hero section.png";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-linear-to-r from-[#000B02] to-[#2F2E36] basis-[50%]"></div>

        <h1 className="z-5 text-white text-[44px] absolute mt-[200px] left-[17%] font-SourceSerif font-bold text-base/13">
          Leave the office behind <br />
          and <span className="text-[#F5B963]">unwind</span>
        </h1>
        <p className="absolute text-white font-Poppins text-[16px] mt-[320px] font-light left-[17%]">
          Welcome to our cozy cabin nestled in the heart of the mountains!{" "}
          <br />
          Our cabin is the perfect getaway for those seeking peace <br /> and
          relaxation in a natural setting.
        </p>

        <div>
          <img src={bgImg} alt="" className="h-[500px] w-[927px] basis-[50%]" />
        </div>
      </div>
    </>
  );
};

export default Home;
