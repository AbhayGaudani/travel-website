import logo from "../assets/UnwindCabins.png";

const Navbar = () => {
  return (
    <div className="h-[100px] w-full items-center justify-center pl-[17%] bg-white shadow-md fixed z-100">
      <div className="w-[1044px] h-[48px] flex justify-between items-center mt-[25px] ">
        <img
          src={logo}
          alt=""
          className="h-[20px] w-[190px] justify-center items-center"
        />
        <ul className="flex gap-[25px] justify-center items-center text-[16px] font-medium font-Poppins">
          <li>Our cabins</li>
          <li>Get inspired</li>
          <li>Gift a stay</li>
          <li>About us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
