import MyImg from "../assets/11635109631.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Intro = () => {
  return (
    <div className="mt-10 grid grid-cols-6 gap-4 p-8 bg-white rounded-xl mb-8 shadow-sm">
      <div className="col-span-6 md:col-span-3  md:border-r border-gray-400">
        <div className=" flex items-start gap-5">
          <img
            src={MyImg}
            alt="medhat"
            className="rounded-full w-[100px] h-[100px] "
          />
          <h2 className="text-[#050F24] text-lg mt-4">
            medhat j Achour
            <p className="text-[#6F757E]">CEO / Co-Founder </p>
          </h2>
        </div>
        <p className="text-[#6F757E] mt-8 text-[14px] w-3/5">
          Hi, I’m Medhat j Achour: If you can’t decide, the answer is no. If two
          equally difficult paths, choose the one more painful in the short term
          pain avoidance is creating an illusion of equality.
        </p>
      </div>
      <div className="col-span-6 md:col-span-2 grid grid-cols-4 gap-6 justify-between pb-6">
        <div>
          <h3>Email:</h3>
        </div>
        <div className="col-span-3">Medhatashour19"gmail.com</div>
        <div>
          <h3>Mobile:</h3>
        </div>
        <div className="col-span-3">+201015683986</div>
        <div>
          <h3>Age:</h3>
        </div>
        <div className="col-span-3">25</div>
        <div>
          <h3>Location:</h3>
        </div>
        <div className="col-span-3">kafr elshiekh egypt</div>
        <div>
          <h3>Social:</h3>
        </div>
        <div className="col-span-3 flex justify-start items-center gap-4 text-xl text-[#FF8E29]">
          <FaFacebook /> <FaInstagramSquare /> <FaTwitter />
        </div>
      </div>
      <div className="flex items-end">
        <button className="bg-[#FF8E29] text-white rounded-full px-6 py-2 hover:border hover:text-[#FF8E29] hover:bg-white hover:border-[#FF8E29] transition-all">
          Edit info
        </button>
      </div>
    </div>
  );
};

export default Intro;
