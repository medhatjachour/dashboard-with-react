import ToggleBtn from "./ToggleBtn";
import ConvoCard from "./ConvoCard";
const convoData = [
  {
        id:1,
        name:"medhat j achour",
        img:"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
        status:"Hi i need a help"
    },
   {
        id:2,
        name:"medhat j achour",
        img:"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
        status:"Hi i need a help"
    }
 ]
const CardsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="col-span-3 md:col-span-1 h-48  rounded-lg shadow-sm bg-white p-3">
        <h2 className="mb-4">Accounts</h2>
        <div className=" pb-6">
            <ToggleBtn title="Email me when someone follow me"/>
            <ToggleBtn title="Email me when someone follow me"/>
            <ToggleBtn title="Email me when someone follow me"/>
       
        </div>
      </div>
      <div className="col-span-3 md:col-span-1 h-48 rounded-lg shadow-sm bg-white p-3">
        <h2 className="mb-4">Applications</h2>
        <div className=" pb-6">
            <ToggleBtn title="New launches and project"/>
            <ToggleBtn title="Monthly product update"/>
            <ToggleBtn title="Subscribe to newsletter"/>
       
        </div>
      </div><div className="col-span-3 md:col-span-1 h-48 rounded-lg shadow-sm bg-white p-3">
        <h2 className="mb-4">Accounts</h2>
        <div className=" pb-6">
        {convoData.map((convDetails, index) => (
            <ConvoCard key={index} convDetails = {convDetails}/>
            ))}
       
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
