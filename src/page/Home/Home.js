import './Home.css';
import { GiScorpion } from "react-icons/gi";


function Home() {
  return (
    <>
        <div className='HomeBox'>
            <GiScorpion className='homeLogo'/>
            <button className='startedButton'>
                <a href='/portfolio'>
                    Get started
                </a>
            </button>
            <div className='name'>
                <div className='nickname'>STEVE</div>
                <div className='lastname'>ROTHIER</div>
            </div>
        </div>
    </>
  );
}

export default Home;
