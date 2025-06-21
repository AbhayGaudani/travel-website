import img from "../assets/Image.png";
import img1 from "../assets/Image1.png";
import img2 from "../assets/Image2.png";
import { FaStar } from "react-icons/fa";
import { TiStarOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";

const CabinCards = () => {
  return (
    <>
      <div className="w-full h-[580px]">
        <h1 className="ml-[17%] mt-[114px] font-SourceSerif text-[28px] font-bold">
          Discover our idyllic countryside cabins
        </h1>
        <div className="w-[122px] h-[2px] bg-[#F5B963] ml-[17%]"></div>
        <p className="ml-[17%] font-Poppins text-[16px] mt-[33px]">
          Fully equipped kitchen and bathroom with plenty of walking and cycling
          routes to explore.
        </p>
        <h3 className="font-Poppins font-medium text-[16px] ml-[1177px] mt-[-25px] underline">
          View all cabins
        </h3>
        <div className="flex ml-[260px] mt-[40px] justify-between gap-[10px] mr-[222px]">
          <div className="h-[489px] w-[339px] relative  bg-[#2B3030] rounded-[4px] basis-[50%] ">
            <img src={img} alt="" />
            <div className="bg-[#000000] rounded-[4px] h-12 w-12  opacity-[70%] absolute left-0 right-0 top-0 bottom-0 ml-[283px] mt-2 ">
              <FaRegHeart className=" text-white h-6 w-6 bg-transparent left-[12px] top-[12px] absolute" />
            </div>
            <div className="pt-[13px] pb-[13px] pr-[18px] pl-[18px] text-white">
              <h3 className="font-Poppins text-[12px] text-[#D7FFF1]">
                HAMPSHIRE - ENGLAND
              </h3>
              <h1 className="font-SourceSerif font-bold text-[20px]">
                Rustic country retreat{" "}
                <span className="ml-[27px] font-semibold">
                  £210<span className="text-[12px] align-top">pp</span>
                </span>
              </h1>
              <p className="mt-[20px] text-[#E0F2EB] text-[14px] font-Poppins text-base/6">
                Step outside and take in the stunning views. Our cabin sits on a
                quiet and secluded property, providing the perfect setting for a
                peaceful retreat.
              </p>
              <div className="flex gap-[3px]">
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <TiStarOutline className="mt-[19px] outline-none text-[#D7FFF1] text-[19px]" />
                <h1 className="mt-[16px] ml-[10px]">82 reviews</h1>
              </div>
            </div>
          </div>
          <div className="h-[489px] w-[339px] relative bg-[#2B3030] rounded-[4px] basis-[50%]">
            <img src={img1} alt="" />
            <div className="bg-[#000000] rounded-[4px] h-12 w-12  opacity-[70%] absolute left-0 right-0 top-0 bottom-0 ml-[283px] mt-2 ">
              <FaRegHeart className=" text-white h-6 w-6 bg-transparent left-[12px] top-[12px] absolute" />
            </div>
            <div className="pt-[13px] pb-[13px] pr-[18px] pl-[18px] text-white">
              <h3 className="font-Poppins text-[12px] text-[#D7FFF1]">
                NORFOLK - ENGLAND
              </h3>
              <h1 className="font-SourceSerif font-bold text-[20px]">
                Cozy getaway cabin{" "}
                <span className="ml-[50px] font-semibold">
                  £312<span className="text-[12px] align-top">pp</span>
                </span>
              </h1>
              <p className="mt-[20px] text-[#E0F2EB] text-[14px] font-Poppins text-base/6">
                Step outside and take in the stunning views. Our cabin sits on a
                quiet and secluded property, providing the perfect setting for a
                peaceful retreat.
              </p>
              <div className="flex gap-[3px]">
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <TiStarOutline className="mt-[19px] outline-none text-[#D7FFF1] text-[19px]" />
                <h1 className="mt-[16px] ml-[10px]">102 reviews</h1>
              </div>
            </div>
          </div>
          <div className="h-[489px] w-[339px] relative bg-[#2B3030] rounded-[4px] basis-[50%]">
            <img src={img2} alt="" />
            <div className="bg-[#000000] rounded-[4px] h-12 w-12  opacity-[70%] absolute left-0 right-0 top-0 bottom-0 ml-[283px] mt-2 ">
              <FaRegHeart className=" text-white h-6 w-6 bg-transparent left-[12px] top-[12px] absolute" />
            </div>
            <div className="pt-[13px] pb-[13px] pr-[18px] pl-[18px] text-white">
              <h3 className="font-Poppins text-[12px] text-[#D7FFF1]">
                HAMPSHIRE - ENGLAND
              </h3>
              <h1 className="font-SourceSerif font-bold text-[20px]">
                Rustic country retreat{" "}
                <span className="ml-[27px] font-semibold">
                  £215<span className="text-[12px] align-top">pp</span>
                </span>
              </h1>
              <p className="mt-[20px] text-[#E0F2EB] text-[14px] font-Poppins text-base/6">
                Step outside and take in the stunning views. Our cabin sits on a
                quiet and secluded property, providing the perfect setting for a
                peaceful retreat.
              </p>
              <div className="flex gap-[3px]">
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <FaStar className="mt-[20px] text-[#D7FFF1]" />
                <TiStarOutline className="mt-[19px] outline-none text-[#D7FFF1] text-[19px]" />
                <h1 className="mt-[16px] ml-[10px]">75 reviews</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CabinCards;
