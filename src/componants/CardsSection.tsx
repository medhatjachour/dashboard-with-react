import ToggleBtn from "./ToggleBtn";
import ConvoCard from "./ConvoCard";
const convoData = [
  {
        id:1,
        name:"medhat j achour",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fportrait-people&psig=AOvVaw16putxlJYXA_PAGPmf77VD&ust=1726518166868000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC-xsHjxYgDFQAAAAAdAAAAABAE",
        status:"Hi i need a help"
    },
   {
        id:2,
        name:"medhat j achour",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dperson&psig=AOvVaw16putxlJYXA_PAGPmf77VD&ust=1726518166868000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC-xsHjxYgDFQAAAAAdAAAAABAa",
        status:"Hi i need a help"
    }
 ]
const CardsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
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
