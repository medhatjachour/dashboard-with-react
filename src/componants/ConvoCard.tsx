import { GrMail } from "react-icons/gr";
import { FC } from "react";

interface cardInterface {
  id:number;
  img:string;
  name:string;
  status:string;
  
} 
const ConvoCard = ({ convDetails }:{convDetails: FC<cardInterface>}) => {
  return (
    <div className=" flex items-center justify-between mb-2">
      <div className=" flex items-center justify-between gap-4">
        <img
          src={convDetails.img}
          alt={convDetails.name}
          className=" w-10 h-10 rounded-full "
        />
        <div>
          <h2 className="text-[#050F24] text-lg"> {convDetails.name} </h2>
          <span className="text-[#6F757E] text-sm">{convDetails.status}</span>
        </div>
      </div>
      <div className="text-[#FF8E29] text-xl">
        <GrMail />
      </div>
    </div>
  );
};

export default ConvoCard;
