import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/waruna.png"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  console.log(toggle)
  return (
    <>
      <div className="bg-white z-40 w-screen fixed drop-shadow-lg">
        <div className=" flex justify-between items-center p-3 mx-2 md:mx-10 ">
          <img src={logo} className='h-12'/>
          <div className="md:flex flex-row gap-4 text-xl text-[#3D0C11] hidden ">
            <p className="hover:text-[#D80032]">Home</p>
            <p className="hover:text-[#D80032]">Services</p>
            <p className="hover:text-[#D80032]">Project</p>
            <p className="hover:text-[#D80032]">Pricing</p>
            <p className="hover:text-[#D80032]">Feedback</p>
            <p className="hover:text-[#D80032]">Contact Us</p>
          </div>
          <button className="bg-[#D80032] hover:opacity-80 py-2 px-6 rounded-full font-bold text-white hidden lg:block">
            CALL NOW
          </button>
          <div onClick={handleToggle} className="md:hidden">
            {toggle ? (
              <HiX size={35} className="hover:text-[#D80032]  text-[#3D0C11]" />
              ) : (
                <HiMenu
                  size={35}
                  className="hover:text-[#D80032] text-[#3D0C11]"
                />
            )}
          </div>
        </div>
      </div>

      <div className={toggle ? "fixed z-50 bg-white h-screen w-[260px] transition-all": "fixed z-50 bg-white h-screen w-[260px] translate-x-[-100%] transition-all"}>
        <div className="py-4 drop-shadow-lg px-3 flex justify-between">
        <img src={logo} className='h-9'/>
          <HiX size={35} className="hover:text-[#D80032] text-[#3D0C11]" onClick={handleToggle} />
        </div>
        <div className="flex flex-col gap-2 p-3 px-5 text-xl font-semibold">
          <p className="hover:text-[#D80032] text-[#3D0C11] border-b">Home</p>
          <p className="hover:text-[#D80032] text-[#3D0C11] border-b hover:tracking-wider transition-all">Services</p>
          <p className="hover:text-[#D80032] text-[#3D0C11] border-b hover:tracking-wider transition-all">Project</p>
          <p className="hover:text-[#D80032] text-[#3D0C11] border-b hover:tracking-wider transition-all">Pricing</p>
          <p className="hover:text-[#D80032] text-[#3D0C11] border-b hover:tracking-wider transition-all">Feedback</p>
          <p className="hover:text-[#D80032] text-[#3D0C11]  hover:tracking-wider transition-all">Contact Us</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
