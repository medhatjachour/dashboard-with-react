import Header from './Header';
import Intro from './Intro';
import CardsSection from './CardsSection';
import ProjectsSection from './ProjectsSection';
import { FC } from "react";

interface MainInterface {
  toggleMenu: () => void;
}

const MainSection: FC<MainInterface> = ({ toggleMenu }) => {
  return (
    <div className=''>
        <Header toggleMenu={toggleMenu}/>
        <Intro/>
        <CardsSection/> 
        <ProjectsSection/>
    </div>
  )
}

export default MainSection