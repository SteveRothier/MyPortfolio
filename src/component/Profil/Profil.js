import './Profil.css';
import myHead from '../../assets/myHead.png';
import cv from '../../assets/CV.pdf#toolbar=0';
import { AiOutlineDownload } from "react-icons/ai";

function Profil() {
  return (
    <>
        <div className='ProfilBox' id='propos'>
            <div className='proposZone'>
                <div className='proposStyle'>
                    À propos
                </div>
                <div className='questionStyle'>
                    Qui suis-je ?
                </div>
            </div>
            <div className='myProfil'>
                <div className='myStatus'>
                    <div className='myName'>Steve ROTHIER</div>
                    <img className='myHead' src={myHead} alt=''></img>
                    <div className='status'>Etudiant en DUT informatique</div>
                </div>
                <div>
                    <div className='statusBlock'>                        
                        Passionné par l’informatique depuis 
                        que l’ai découverts, je suis curieux d'acquérir de nouvelles 
                        connaissances. Dans ce domaine plusieurs thèmes m'intéresse 
                        comme le développement Web, la cybersécurité, 
                        le montage photo comme vidéo ou encore le design.
                    </div>
                    <div className='myCv'>
                        <p>Vous souhaitez avoir mon CV au format PDF c'est par </p>
                        <a href={cv}>ici.</a> | 
                        <a href={cv} download> <AiOutlineDownload className='myCvDownload'/></a>
                    </div>
                </div>
            </div>
            <div className='myCvNone'>
                <p>Vous souhaitez avoir mon CV au format PDF c'est par </p>
                <a href={cv}>ici.</a> |
                <div>
                    <a href={cv} download> <AiOutlineDownload className='myCvDownload'/></a>
                </div>
            </div>
            <div className='myCvNonePhone'>
                <div>Vous souhaitez avoir mon CV au format PDF </div>
                <a href={cv} download> <AiOutlineDownload className='myCvDownload'/></a>
            </div>
        </div>
    </>
  );
}

export default Profil;
