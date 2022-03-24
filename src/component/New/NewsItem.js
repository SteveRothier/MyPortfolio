import './News.css';
import Popup from 'reactjs-popup';
import { ImCross } from 'react-icons/im';

function NewsItem({titre, image, date, actif, description, imageModal}) {
  return (
    <>
        <Popup
          trigger={
            <button className='triggerButton'>
              <div className='NewsItemBox'>
                <div className='title'>{titre}</div>
                <img src={image} alt=''></img>
                <div className='date'>{date}</div>
                <div className='bar'></div>
                <div className='actifClass'>Actif= 
                  <p className='actif'>{actif}</p>
                </div>
              </div>
            </button>
            }
          modal
          nested
        >
            {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      <ImCross />
                    </button>
                    <div className="header">
                      {titre}
                    </div>
                    <div className="content">
                      <img src={imageModal} alt=''></img>
                      <div className='description'>
                        {description}
                      </div>
                    </div>
                  </div>
              )
            }
        </Popup>
    </>
  );
}

export default NewsItem;
