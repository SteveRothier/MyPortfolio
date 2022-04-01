import './Projects.css';
import webnot from '../../assets/WebNot.png';
import portfolio from '../../assets/portfolio.png';
import teamsLogo from '../../assets/teamsLogo.png';
import gestion from '../../assets/gestion.png';
import droit from '../../assets/droit.png';
import vet_consult from '../../assets/vet_consult.png';
import filmBot from '../../assets/filmBot.png';
import metier from '../../assets/metier.png';
import tandem from '../../assets/tandem.png';
import visuel from '../../assets/visuel.png';

import { FaGithub } from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";


import terminal from '../../assets/terminal.pdf#toolbar=0';
import TPDroit from '../../assets/TPDroit.pdf#toolbar=0';
import TPGestion from '../../assets/TPGestion.pdf#toolbar=0';
import vet_consut from '../../assets/vet_consut.pdf#toolbar=0';
import Dossier_documentaire from '../../assets/Dossier_documentaire.pdf#toolbar=0';
import Teams from '../../assets/Teams.pdf#toolbar=0';
import ProjetS4 from '../../assets/ProjetS4.pdf#toolbar=0';


function ProjectsList() {
  return (
    <>
        <div className='ProjectsListBox' id='project'>
            <div className='ProjectsZone'>
                <div className='ProjectsStyle'>
                    Projets
                </div>
                <div className='questionStyle'>
                    Mes réalisations
                </div>
            </div>
            <div className='ProjectsItemsList'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='projectsTitle'>Mon Portfolio</div>
                            <div className='type'>Personnel</div>
                            <div className='matiere'>ㅤ</div>
                            <div className='projectImage'>
                                <img src={portfolio} alt=''></img>
                            </div>
                            <div className='date'>21/03/2022</div>
                            </div>
                        <div className="flip-card-back">
                            <p>Ce portfolio me permet de montrer mon profil en tant que developpeur</p> 
                            <p>Créer entierement en ReactJS</p>
                            <p>
                                <a href='https://github.com/SteveRothier/myPortfolio' className='firstLink'> 
                                    <FaGithub className='ReseauLogo github'/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='projectsTitle'>WebNot</div>
                            <div className='type'>Scolaire</div>
                            <div className='matiere'>Projet 4</div>
                            <div className='projectImage'>
                                <img src={webnot} alt=''></img>
                            </div>
                            <div className='date'>17/03/2022</div>
                            </div>
                        <div className="flip-card-back">
                            <p>
                                <div>
                                    <a href={ProjetS4} className='firstLink'>
                                        <BsFileEarmarkPdfFill className='pdf ReseauLogo'/>
                                    </a>
                                </div>
                                <div>
                                    <a href={ProjetS4} className='lastLink' download>
                                      <FaFileDownload className='download ReseauLogo'/>
                                    </a>                                
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='projectsTitle'>Teams Education</div>
                            <div className='type'>Scolaire</div>
                            <div className='matiere'>Expression-Communication</div>
                            <div className='projectImage'>
                                <img src={teamsLogo} alt=''></img>
                            </div>
                            <div className='date'>08/03/2022</div>
                            </div>
                        <div className="flip-card-back">
                            <p>
                                full impro blabla
                            </p>
                            <p>
                                <div>
                                    Voir le pdf 
                                    <a href={Dossier_documentaire} className='firstLink'>
                                        <BsFileEarmarkPdfFill className='pdf ReseauLogo'/>
                                    </a>
                                </div>
                                <div>
                                  Télécharger le pdf
                                  <a href={Dossier_documentaire} className='lastLink' download>ici.</a>                                
                                </div>
                                <div>
                                    Voir le pdf 
                                    <a href={Teams}>ici.</a>
                                </div>
                                <div>
                                  Télécharger le pdf
                                  <a href={Teams} className='lastLink' download>ici.</a>                                
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='projectsTitle'>Gestion d'entreprise</div>
                            <div className='type'>Scolaire</div>
                            <div className='matiere'>Gestion des systèmes d'information</div>
                            <div className='projectImage'>
                                <img src={gestion} alt=''></img>
                            </div>
                            <div className='date'>05/01/2022</div>
                            </div>
                        <div className="flip-card-back">
                            <p>
                                <div>
                                    <a href={TPGestion} className='firstLink'>
                                        <BsFileEarmarkPdfFill className='pdf ReseauLogo'/>
                                    </a>
                                </div>
                                <div>
                                    <a href={TPGestion} className='lastLink' download>
                                        <FaFileDownload className='download ReseauLogo'/>
                                    </a>                                
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='projectsTitle'>Vet' consult</div>
                            <div className='type'>Scolaire</div>
                            <div className='matiere'>Projet 3</div>
                            <div className='projectImage'>
                                <img src={vet_consult} alt=''></img>
                            </div>
                            <div className='date'>17/12/2021</div>
                            </div>
                        <div className="flip-card-back">
                            <p>
                                Le but de ce projet est de réaliser
                                un site Web pour un vétérinaire
                                afin d’améliorer l’optimisation 
                                de son emploi du temps.
                            </p>
                            <p>
                                <div>
                                    <a href={vet_consut} className='firstLink'>
                                        <BsFileEarmarkPdfFill className='pdf ReseauLogo'/>
                                    </a>
                                </div>
                                <div>
                                    <a href={vet_consut} className='lastLink' download>
                                        <FaFileDownload className='download ReseauLogo'/>   
                                    </a>                                
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='projectsTitle'>Droit des Technologies</div>
                            <div className='type'>Scolaire</div>
                            <div className='matiere'>Gestion des systèmes d'information</div>
                            <div className='projectImage'>
                                <img src={droit} alt=''></img>
                            </div>
                            <div className='date'>14/12/2021</div>
                            </div>
                        <div className="flip-card-back">
                        <p>
                                <div>
                                    <a href={TPDroit} className='firstLink'>
                                        <BsFileEarmarkPdfFill className='pdf ReseauLogo'/>
                                    </a>
                                </div>
                                <div>
                                    <a href={TPDroit} className='lastLink' download>
                                        <FaFileDownload className='download ReseauLogo'/>
                                    </a>                                
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='projectsTitle'>FilmBot</div>
                            <div className='type'>Scolaire</div>
                            <div className='matiere'>Projet 2/ base de données</div>
                            <div className='projectImage'>
                                <img src={filmBot} alt=''></img>
                            </div>
                            <div className='date'>10/06/2021</div>
                            </div>
                        <div className="flip-card-back">

                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='projectsTitle'>Le métier qui me plaît</div>
                            <div className='type'>Scolaire</div>
                            <div className='matiere'>Projet 1/ concours</div>
                            <div className='projectImage'>
                                <img src={metier} alt=''></img>
                            </div>
                            <div className='date'>15/12/2020</div>
                            </div>
                        <div className="flip-card-back">
                            <p>
                                Dans le cadre du concours Je filme
                                le métier qui me plaît péconisé dans 
                                Parcours Avenir,
                                ce projet a pour objectif 
                                principal de réaliser une vidéo 
                                présentant un métier lié à 
                                l’informatique où nous devions 
                                filmer le métier qui nous plaît 
                                ainsi que de réaliser une 
                                interview d'une personne 
                                travaillant dans le métier 
                                choisi.
                            </p>
                            <p>
                                <a href='https://github.com/SteveRothier/ProjetS1' className='firstLink'> 
                                    <FaGithub className='ReseauLogo github'/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='projectsTitle'>App pour aveugle</div>
                            <div className='type'>Scolaire</div>
                            <div className='matiere'>Projet Terminal STI2D</div>
                            <div className='projectImage'>
                                <img src={visuel} alt=''></img>
                            </div>
                            <div className='date'>05/06/2020</div>
                            </div>
                        <div className="flip-card-back">
                            <p>
                                Le but de ce projet était d'orienter
                                une personne à accuité visuel
                                réduit pendant l'interclass et entre les 
                                deux sites du lycée en créant un 
                                emploi du temps modifiable par lui même
                                tout dans une application mobile android
                                simple d'utilisation.
                            </p>
                            <p>
                                Réaliser sous MIT App Inventor afin de faire
                                une application android et d'un site web permettant
                                d'interagir avec l'emploi du temps de l'appication.
                            </p>
                            <p>
                                <div>
                                    <a href={terminal} className='firstLink'>
                                        <BsFileEarmarkPdfFill className='pdf ReseauLogo'/>
                                    </a>
                                </div>
                                <div>
                                    <a href={terminal} className='lastLink' download>
                                        <FaFileDownload className='download ReseauLogo'/>
                                    </a>                                
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className='projectsTitle'>Projet Tandem</div>
                            <div className='type'>Scolaire</div>
                            <div className='matiere'>Projet d'échange scolaire</div>
                            <div className='projectImage'>
                                <img src={tandem} alt=''></img>
                            </div>
                            <div className='date'>15/01/2019</div>
                            </div>
                        <div className="flip-card-back">
                            <p>
                                Un projet d'échange scolaire entre le lycée Stephen Hessel d'Epernay
                                et les élèves de la Realschule Anne Frank 
                                et du Gymnasium Albertus d’Ettlingen.
                            </p>
                            <p>
                                Le but était, pour chaque classe, de construire une 
                                éolienne d’1m30 en utilisant des matériaux fabriqués, 
                                récupérés, transformés ou détournés.
                            </p>
                            <p>
                                Notre groupe de STI2D avait pour but de réaliser le système 
                                capable de recharger des appareils électroniques 
                                sous Arduino.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default ProjectsList;
