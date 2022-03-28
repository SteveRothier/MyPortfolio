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


function ProjectsList() {
  return (
    <>
        <div className='ProjectsListBox'>
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
                            <p>Le but de ce projet est de réaliser un site Web pour un vétérinaire
afin d’améliorer l’optimisation de son emploi du temps.</p>
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
