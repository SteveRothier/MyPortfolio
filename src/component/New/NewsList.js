import './News.css';
import intership from '../../assets/intership.jpg';
import iut from '../../assets/iut.png';
import dut from '../../assets/dut.jpg';
import NewsItem from './NewsItem';

const stageDescription =    "Je suis à la recherche d'un stage en informatique pour valider ma derrière année de DUT informatique à l'IUT de Reims. " +
                            " Ce stage de 10 à 12 semaines à pour but de m'initier dans ma vie professionnel avec un projet à la réalisation.";

const dutDescription =  "Ui " +
                        ""

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
            <NewsItem 
                titre='Recherche de stage'
                image={intership}
                date='21/03/2022'
                actif='True'
                description={stageDescription}
                imageModal={intership}
            />
            <NewsItem 
                titre='DUT informatique'
                image={iut}
                date='01/09/2020'
                actif='True'
                description={dutDescription}
                imageModal={dut}
            />
            </div>
        </div>
    </>
  );
}

export default NewsList;
