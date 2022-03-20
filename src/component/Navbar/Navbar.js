import './Navbar.css';
import { GiScorpion } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { SiAboutdotme } from "react-icons/si";
import { AiOutlineProject } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";

function Navbar() {
  return (
    <>
      <div className='NavbarBox'>
        <div className='MyTitleName'>
          <div className='MyNameLogo'>
            <a href='#home' className='MyNameAlign'>
              <div>
                <GiScorpion className='MyNameLogo'/>
              </div>
              <span className='MyNameAdress'>
                <b className='StyleName'>steverothier</b>.com
              </span>
            </a>
          </div>
        </div>
        <div className='NavbarList'>
          <div className='NavbarListAlign'>
            <HiHome className='NavbarListLogo'/>
            <a href='#acceuil'>Acceuil</a>
          </div>
          <div className='NavbarListAlign'>
            <SiAboutdotme className='NavbarListLogo'/>
            <a href='#propos'> À propos</a>
          </div>
          <div className='NavbarListAlign'>
            <AiOutlineProject className='NavbarListLogo'/>
            <a href='#projets'>Projets</a>
          </div>
          <div className='NavbarListAlign'>
            <RiContactsLine className='NavbarListLogo'/>
            <a href='#contact'>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
