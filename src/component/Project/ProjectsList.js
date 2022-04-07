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
                            <p>Ce portfolio me permet de montrer mon 
                                profil en tant que developpeur.
                            </p> 
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
                                Dernier projet du DUT consistait 
                                à réaliser une application en
                                javascript suite à l'option .Web .
                            </p>
                            <p>
                                Cela consistait à réaliser 
                                un gestionnaire de note 
                                permettant de voir la notation du semestre en cours.
                            </p>
                            <p>
                                Projet réaliser en ReactJs et d'une API 
                                comme base de données pour les étudiants et 
                                les notes.
                            </p>
                            <p>
                                <div>
                                    <a href={ProjetS4} className='firstLink pdf ReseauLogo'>
                                        <BsFileEarmarkPdfFill/>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://github.com/SteveRothier/ProjetS4' className='secondLink github ReseauLogo'>
                                        <FaGithub/>
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
                                Projet en deux parties sur 
                                le thème de la Communication 
                                dans les organisation dont un
                                dossier documentaire avec 
                                problèmatique Teams dans le 
                                mileu scolaire et oral de 10
                                minutes sur le même sujet.
                            </p>
                            <p>
                                Avoir une bonne connaissance sur 
                                le sujet m'a permit de me
                                présenter l'oral sans préparation
                                en toute improvisiation grâce
                                au support visuel.
                            </p>
                            <p>
                                <div>
                                    <a href={Dossier_documentaire} className='firstLink pdf ReseauLogo'>
                                        <BsFileEarmarkPdfFill/>
                                    </a>
                                </div>
                                <div>
                                    <a href={Teams} className='secondLink pdf ReseauLogo'>
                                        <BsFileEarmarkPdfFill/>
                                    </a>
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
                                <p>
                                    Projet de groupe sur une création
                                    d'entreprise dans un dossier
                                    structuré par des consignes en 
                                    plusieurs étapes ainsi de sa 
                                    viabilité dans le futur.
                                </p>
                                <div>
                                    <a href={TPGestion} className='firstLink pdf ReseauLogo'>
                                        <BsFileEarmarkPdfFill/>
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
                                Nous avons utlisé la méthode 
                                agile Scrum pour progresser 
                                dans l'avancement du projet
                                tout en utilisant l'outil
                                <a 
                                    className='websiteLink'
                                    href='https://trello.com/'
                                >
                                    Trello
                                </a>
                                pour nous répartir les 
                                tâches.
                            </p>
                            <p>
                                <div>
                                    <a href={vet_consut} className='firstLink pdf ReseauLogo'>
                                        <BsFileEarmarkPdfFill />
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
                                    <p>
                                        Projet de groupe sur une analyse 
                                        de l'application dans le cadre d'une 
                                        situation juridique.
                                    </p>
                                    <p>
                                        Nous devions trouver un arrêt de justice
                                        pour réaliser un dossier synthétique dans
                                        une analyse avec premièrement la situation
                                        de la situation puis l'analyse méthodique 
                                        en plusieurs partie :
                                    <p>
                                        résumé,
                                        déroulement de la procédure,
                                        enoncé du problème,
                                        moyens des parties,
                                        dispositif de la décision,
                                        motifs de la décision
                                    </p>                                            
                                    </p>
                                    <a href={TPDroit} className='firstLink pdf ReseauLogo'>
                                        <BsFileEarmarkPdfFill/>
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
                            <p>
                                Ce projet de deux semaines basé 
                                sur de la base de données.
                                Avec comme premier objectif de 
                                réaliser un bot discord afin d'afficher
                                des caractéristiques d'un film.
                            </p>
                            <p>
                                Nous nous sommes tournés sur l'affichage
                                des données sur une page web en php.
                                Cette base de données devait être 
                                alimenter par un formulaire avec 
                                l'utilisation de PhpMyAdmin.
                            </p>
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
                                Dans le cadre du concours 
                                    <a 
                                        className='websiteLink'
                                        href='https://jefilmelemetierquimeplait.tv'
                                    >
                                        Je filme
                                        le métier qui me plaît 
                                    </a>péconisé dans 
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
                                Premier projet de création de site web
                                en HTML et CSS tout en utilisant
                                le framework 
                                    <a 
                                        className='websiteLink'
                                        href='https://getbootstrap.com'
                                    >
                                        Bootstrap.
                                    </a>
                            </p>
                            <p>
                                <a href='https://github.com/SteveRothier/ProjetS1' className='firstLink'> 
                                    <FaGithub className='github ReseauLogo'/>
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
                                    <a href={terminal} className='firstLink pdf ReseauLogo'>
                                        <BsFileEarmarkPdfFill/>
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
                                Le 
                                    <a 
                                        className='websiteLink' 
                                        href='https://ville-tandem.eu/projet/construction-dune-eolienne-par-une-classe-de-lyceens/'>
                                            projet TANDEM
                                    </a> 
                                est un projet d'échange scolaire entre le lycée Stephen Hessel d'Epernay
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
