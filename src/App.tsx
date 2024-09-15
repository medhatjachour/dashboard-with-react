import MainSection from "./componants/MainSection";
import Sidebar from "./componants/sidebar/Sidebar";

function App() {
  return (
    <div className="p-[10px] md:p-[30px] bg-[#FFF4EA] h-[100vh] grid grid-cols-6 gap-6">
      <Sidebar />
      <div className="col-span-6 lg:col-span-5">
        <MainSection />
      </div>
    </div>
  );
}

export default App;
