import img1 from "../assets/11635109631.png";
import { FC } from "react";

interface cardInterface {
  name:string,
  Description:string,
  img:string,
  
} 

const Card = ({ cardData }:{cardData: FC<cardInterface>}) => {
  return (
    <div className="col-span-4 md:col-span-1 rounded-tr-lg rounded-tl-lg ">
      <img
        src={cardData.img}
        alt={cardData.name}
        className="w-full h-48   rounded-tr-lg rounded-tl-lg "
      />
      <div className="px-4 py-5 shadow-sm border border-t-0 mt-5 ">
        <h2 className=" font-bold text-lg text-[#050F24]">{cardData.name}</h2>
        <p className="  text-[#6F757E]">{cardData.Description}</p>
        <div className="mt-5 pt-3 pb-5 flex">
          <div className=" relative w-full">
            <img
              src={img1}
              alt=""
              className="w-[30px] h-[30px] rounded-full border-2 border-white absolute"
            />
            <img
              src={img1}
              alt=""
              className="w-[30px] h-[30px] rounded-full  border-2 border-white absolute left-[24px]"
            />
            <img
              src={img1}
              alt=""
              className="w-[30px] h-[30px] rounded-full  border-2 border-white absolute left-[48px]"
            />
            <img
              src={img1}
              alt=""
              className="w-[30px] h-[30px] rounded-full  border-2 border-white absolute left-[70px]"
            />
          </div>
          <button className="text-sm right-0 w-full md:text-lg text-[#FF8E29]  md:px-2 py-2  cursor-pointer hover:border-[#FF8E29]">View project</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
