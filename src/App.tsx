import { useState } from "react";
import MainSection from "./componants/MainSection";
import Sidebar from "./componants/sidebar/Sidebar";

function App() {
  const [menuOpened,setMenuOpened]  = useState(false);
  const toggleMenu =()=>{
    setMenuOpened(!menuOpened)
    console.log(menuOpened);
  }
  return (
    <div className="p-[10px] md:p-[30px] bg-[#FFF4EA]  grid grid-cols-6 gap-6">
      <Sidebar menuOpened={menuOpened}/>
      <div className="col-span-6 lg:col-span-5">
        <MainSection  toggleMenu={toggleMenu}/>
      </div>
    </div>
  );
}

export default App;
