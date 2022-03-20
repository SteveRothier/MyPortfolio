import './Footer.css';
import { BiCopyright } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";

function Footer() {
  return (
    <>
        <div className='FooterBox'>
            <div className='reseaux'>
                <li>
                  <a href='https://iut-info.univ-reims.fr/gitlab/roth0003'>
                    <FaGitlab className='ReseauLogo gitlab'/>
                  </a>
                </li>
                <li>
                  <a href='https://github.com/SteveRothier'>
                    <FaGithub className='ReseauLogo github'/>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/steverothier/'>
                    <FaLinkedin className='ReseauLogo inkedin'/>
                  </a>
                </li>
                <li>
                  <a href='mailto:Steve.rothier77@gmail.com'>
                    <MdEmail className='ReseauLogo email'/>
                  </a>
                </li>
                <li>
                  <a href='https://discordapp.com/users/278852177034739712/'>
                    <FaDiscord className='ReseauLogo discord'/>
                  </a>
                </li>
            </div>
            <div className='copyright'>
              <div className='copyrightYear'>
                <BiCopyright />
                2022
              </div>
              <a href='steverothier.com'>Steve Rothier</a> Tous droits réservés.
            </div>
        </div>
    </>
  );
}

export default Footer;
