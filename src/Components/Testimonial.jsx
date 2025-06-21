import React from "react";
import bgImg from "../assets/Purple woman.png";
import { IoStar } from "react-icons/io5";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-[663px] relative"
      >
        <img src={bgImg} alt="" className="w-full h-[663px] relative" />
        <h1 className="absolute font-bold text-[44px] font-SourceSerif text-white top-0 mt-[148px] ml-[884px] text-base/13">
          A truly wonderful <br /> experience
        </h1>
        <p className="absolute font-normal text-[16px] font-SourceSerif text-white top-0 mt-[276px] ml-[884px] text-base/7 mr-[200px]">
          Brilliant for anyone looking to get away from the hustle and bustle of
          city life or detox from their tech for a few days. I could have stayed
          another week! <br />
          <br />
          They really have thought about everything here down to the finest
          details.
        </p>
        <div className="flex absolute ml-[884px] top-0 mt-[474px] w-[210px] gap-0.5 h-[21.31px] bg-transparent">
          <IoStar className="text-white h-[21px] w-[21px] p-1 bg-[#1BB580]" />
          <IoStar className="text-white h-[21px] w-[21px] p-1 bg-[#1BB580]" />
          <IoStar className="text-white h-[21px] w-[21px] p-1 bg-[#1BB580]" />
          <IoStar className="text-white h-[21px] w-[21px] p-1 bg-[#1BB580]" />
          <IoStar className="text-white h-[21px] w-[21px] p-1 bg-[#1BB580]" />
          <p className="font-Poppins text-[14px] text-white ml-[5px]">
            01 Jan 2025
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Testimonial;
