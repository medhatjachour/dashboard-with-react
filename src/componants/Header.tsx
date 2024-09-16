import { IoSearchOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import myImg from "../assets/11635109631.png";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Header = ({ toggleMenu }: { toggleMenu: Function }) => {
  const [dropOpen, setDropOpen] = useState<boolean>(false)
  const handleDropDown =()=>{
    setDropOpen(!dropOpen )
  }
  return (
    <div className="flex justify-between  relative">
      <div className="flex justify-center items-center gap-9">
        <MdMenu onClick={toggleMenu} className=" text-2xl block cursor-pointer transition-all  lg:hidden hover:text-[#FF8E29]"/>
        <span className="font-bold text-xl ">Pagination</span>
        <div className="bg-white flex justify-center items-center  rounded-full px-5 py-2">
          <input
            type="text"
            placeholder="Search"
            className="md:w-72 w-0   focus:outline-none  bg-transparent border-none h-10"
          />{" "}
          <IoSearchOutline className="text-2xl to-gray-500" />
        </div>{" "}
      </div>
      <div>
        <div className="flex justify-between items-center gap-4 cursor-pointer" onClick={handleDropDown}>
          <img
            src={myImg}
            alt="medhatjachour"
            className="w-12 h-12 rounded-full "
          />
          <a href="https://github.com/medhatjachour" target="blank" className="md:block hidden">
            Medhat j achour
          </a>
          {dropOpen ?  <TiArrowSortedUp className="text-xl" />:  <TiArrowSortedDown className="text-xl" />}
        </div>
        <div id="dropDown" className={`absolute bg-white rounded-md shadow-md w-56  p-3 mt-2 ${!dropOpen?"invisible":"block"}`}>
          <ul>
            <li className="mb-2 py-1 px-2 rounded-md hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="mb-2  py-1 px-2 rounded-md hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="mb-2  py-1 px-2 rounded-md hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
