import NestedList from './NestedList';
import logo from '../../assets/Logo.png' 
const Sidebar = ({ menuOpened }: { menuOpened: boolean }) => {
  console.log('///////');
  console.log("menuOpened",menuOpened);
  
  return (
    <div  className={`${menuOpened?" block w-full py-8 px-6 bg-white col-span-6 absolute top-24 left-0 h-[99vh]  z-10":"hidden" + "py-8 px-6 bg-white hidden lg:block rounded-md" }`}>
      <img src={logo} alt="logo-img " className='mb-6' />
      <NestedList/>
    </div>
  )
}

export default Sidebar