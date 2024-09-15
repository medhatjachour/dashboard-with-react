
const ConvoCard = ( { convDetails }: { convDetails: Array<string> }) => {
  return (
    <div className=" flex items-center justify-between ">
      <img src={convDetails?.img} alt={convDetails.name} className=" w-10 h-10 rounded-full "/>
      <div><h2> {convDetails.name} </h2>
      <span>{convDetails.status}</span></div>
      <div></div>
    </div>
  );
};

export default ConvoCard;
