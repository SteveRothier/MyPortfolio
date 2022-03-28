import './LeftNavbar.css';
import { GiScorpion } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { SiAboutdotme } from "react-icons/si";
import { AiOutlineProject } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";

function LeftNavbar() {
  return (
    <>
      <div className='LeftNavbarBox'>
        <div className='ligne'></div>
        <div className='NavbarList'>
          <GiScorpion className='myLogo'/>
          <div className='myLogoHover'>
            <b className='StyleName'>steverothier</b>.com
          </div>
          <HiHome className='homeLink'/>  
          <div className='homeHover'>
            <p className='typeHover'>Acceuil</p>
          </div>   
          <SiAboutdotme className='aboutLink'/>
          <div className='aboutHover'>
            <div className='proposAlign typeHover'>
              <div>À-</div> 
              <div>propos</div>
            </div>
          </div>
          <AiOutlineProject  className='projectLink'/>
          <div className='projectHover'>
            <p className='typeHover'>Projets</p>
          </div>  
          <RiContactsLine className='contactLink'/>
          <div className='contactHover'>
            <p className='typeHover'>Contact</p>
          </div>  
        </div>
        <div className='ligne'></div>
      </div>
    </>
  );
}

export default LeftNavbar;
