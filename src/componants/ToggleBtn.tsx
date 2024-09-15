import { useState } from "react";

const ToggleBtn = ({ title }: { title: string }) => {
    const [checked,setChecked] = useState(false)
    const toggleCheck=()=>{
        setChecked(!checked)
    }
  return (
    <div className="col-span-6 md:col-span-2 grid grid-cols-4 gap-4 justify-between mt-2">
      <div>
        {" "}
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-[#FF8E29] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#FF8E29]" onClick={toggleCheck}></div>
        </label>
      </div>
      <div className="col-span-3"><p className={`${!checked?"text-gray-500":"text-black"}`}>{title}</p></div>
    </div>
  );
};

export default ToggleBtn;
