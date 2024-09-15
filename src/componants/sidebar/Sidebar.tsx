import NestedList from './NestedList';
import logo from '../../assets/Logo.png' 
const Sidebar = () => {
  return (
    <div  className="py-8 px-6 bg-white   rounded-md">
      <img src={logo} alt="logo-img " className='mb-6' />
      <NestedList/>
    </div>
  )
}

export default Sidebar