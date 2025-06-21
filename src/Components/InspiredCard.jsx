import React from "react";
import { FaRegHeart } from "react-icons/fa";
import img from "../assets/img.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { motion } from "framer-motion";

const InspiredCard = () => {
  return (
    <>
      <div className="w-full h-[741px] mt-[114px] bg-[#F2FAF9]">
        <h1 className="ml-[17%] pt-[56px] font-SourceSerif text-[28px] font-bold">
          Inspiration for your next getaway
        </h1>
        <div className="w-[122px] h-[2px] bg-[#F5B963] ml-[17%]"></div>
        <p className="ml-[17%] font-Poppins text-[16px] mt-[33px]">
          We’ve curated some amazing experiences to help you find your next
          getaway.
        </p>
        <h3 className="font-Poppins font-medium text-[16px] ml-[1136px] mt-[-25px] underline">
          View all experiences
        </h3>
        <motion.div
          initial={{ opacity: 0, translateX: "100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex ml-[260px] justify-between mr-[222px]"
        >
          <div className="  mt-[40px]">
            <div className="h-[488px] w-[334px]  bg-[#596363] rounded-[4px] basis-[50%] ">
              <img src={img} alt="" />
              <div className="pt-[13px] pb-[13px] pr-[18px] pl-[18px] text-white">
                <h3 className="font-Poppins text-[12px] text-[#D7FFF1]">
                  FOR THOSE WHO LOVE
                </h3>
                <h1 className="font-SourceSerif font-bold text-[20px]">
                  To Explore nature
                </h1>
                <p className="mt-[20px] text-[#E0F2EB] text-[14px] font-Poppins text-base/6">
                  Discover some of the most beautiful scenery – from the wonders
                  of Snowdonia to the famous beauty of the Scottish Highlands.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <div className="h-[488px] w-[334px]  bg-[#596363] rounded-[4px] basis-[50%] ">
              <img src={img1} alt="" />
              <div className="pt-[13px] pb-[13px] pr-[18px] pl-[18px] text-white">
                <h3 className="font-Poppins text-[12px] text-[#D7FFF1]">
                  FOR THOSE WHO WANT
                </h3>
                <h1 className="font-SourceSerif font-bold text-[20px]">
                  To Relax, rest & re-set
                </h1>
                <p className="mt-[20px] text-[#E0F2EB] text-[14px] font-Poppins text-base/6">
                  Experience mind and body connection through breathing
                  exercises and relaxation with our Yoga inspired get away for
                  you and the family.
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-[40px] gap-[10px]">
            <div className="h-[488px] w-[334px]  bg-[#596363] rounded-[4px] basis-[50%] ">
              <img src={img2} alt="" />
              <div className="pt-[13px] pb-[13px] pr-[18px] pl-[18px] text-white">
                <h3 className="font-Poppins text-[12px] text-[#D7FFF1]">
                  FOR THOSE WHO HAVE
                </h3>
                <h1 className="font-SourceSerif font-bold text-[20px]">
                  Four-legged friends
                </h1>
                <p className="mt-[20px] text-[#E0F2EB] text-[14px] font-Poppins text-base/6">
                  When going on holiday nobody wants to put their dog in a
                  kennel. So, lets keep the family together with our pet
                  friendly cabins.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default InspiredCard;
