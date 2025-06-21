import v1 from "../assets/Vector.png";
import v2 from "../assets/Vector1.png";
import v3 from "../assets/Vector2.png";

const SearchBar = () => {
  return (
    <>
      <div className="shadow-2xl bg-white h-[120px] w-[1041px] ml-[17%] rounded-[5px] mt-[-60px] absolute z-20">
        <div className="flex bg-[#EAEAEA] w-[296px] h-[54px] rounded-[5px] p-[8px] absolute mt-[33px] ml-[27.5px]">
          <img
            src={v1}
            alt=""
            className="h-[15px] w-[15px] items-center mt-[11px] ml-[15px]"
          />
          <input
            type="text"
            placeholder="I want to go"
            className="font-Poppins text[16px] bg-transparent border-none outline-none pl-[15px]"
          />
        </div>
        <div className="flex bg-[#EAEAEA] w-[140px] h-[54px] rounded-[5px] p-[8px] absolute mt-[33px] ml-[331.5px]">
          <img
            src={v2}
            alt=""
            className="h-[15px] w-[15px] items-center mt-[11px] ml-[10px]"
          />
          <input
            type="text"
            placeholder="Check in"
            className="font-Poppins text[16px]  bg-transparent border-none outline-none pl-[10px]"
          />
        </div>
        <div className="flex bg-[#EAEAEA] w-[140px] h-[54px] rounded-[5px] p-[8px] absolute mt-[33px] ml-[479.5px] ">
          <img
            src={v2}
            alt=""
            className="h-[15px] w-[15px] items-center mt-[11px] ml-[10px]"
          />
          <input
            type="text"
            placeholder="Check out"
            className="font-Poppins text[16px] bg-transparent border-none outline-none pl-[10px]"
          />
        </div>
        <div className="flex bg-[#EAEAEA] w-[140px] h-[54px] rounded-[5px] p-[8px] absolute mt-[33px] ml-[627.5px]">
          <img
            src={v3}
            alt=""
            className="h-[15px] w-[15px] items-center mt-[11px] ml-[10px]"
          />
          <input
            type="text"
            placeholder="Travellers"
            className="font-Poppins text[16px] bg-transparent border-none outline-none pl-[10px]"
          />
        </div>
        <div className="flex w-[236px] h-[54px] rounded-[5px] absolute mt-[33px] ml-[775.5px]">
          <button className="bg-[#233D2C] h-[54px] w-[236px] text-white rounded-[5px] font-Poppins text-[16px]">
            Find available cabins
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
