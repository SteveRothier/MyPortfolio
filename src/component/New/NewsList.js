import './News.css';
import intership from '../../assets/intership.jpg';
import iut from '../../assets/iut.png';

function NewsList() {
  return (
    <>
        <div className='NewsListBox'>
            <div className='newsZone'>
                <div className='newsStyle'>
                    Actualités
                </div>
                <div className='questionStyle'>
                    Qu'en est-il ?
                </div>
            </div>
            <div className='newsItemsList'>

                <div className='NewsItemBox'>
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div className='newsTitle'>Recherche de stage</div>
                            <img src={intership} alt=''></img>
                            <div className='date'>21/03/2022</div>
                            <div className='bar'></div>
                            <div className='actifClass'>Actif= 
                                <p className='actif'>True</p>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <p>
                                Je suis à la recherche d'un stage en informatique 
                                pour valider ma derrière année de DUT informatique 
                                à l'IUT de Reims. Ce stage de 10 à 12 semaines à pour but 
                                de m'initier dans ma vie professionnel avec un projet à 
                                la réalisation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='NewsItemBox'>
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div className='newsTitle'>DUT informatique</div>
                            <img src={iut} alt=''></img>
                            <div className='date'>01/09/2020</div>
                            <div className='bar'></div>
                            <div className='actifClass'>Actif= 
                                <p className='actif'>True</p>
                            </div>
                        </div>
                        <div class="flip-card-back">
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

export default NewsList;
