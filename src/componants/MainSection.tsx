import Header from './Header';
import Intro from './Intro';
import CardsSection from './CardsSection';
import ProjectsSection from './ProjectsSection';
const MainSection = ({ toggleMenu }: { toggleMenu: Function }) => {
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