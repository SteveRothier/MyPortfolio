import './Contact.css';
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_csvh8ir', 'template_sjd80k4', form.current, 'LQF0mQVul7QjpAFC7')
          .then((result) => {
              console.log(result.text, 'email send');
              alert('email envoyé !');  
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
    }

    return (
        <>
            <div className='ContactBox' id='#contact'>
                <div className='contactZone'>
                    <div className='contactStyle'>
                        Contact
                    </div>
                    <div className='questionStyle'>
                        Une question ? Contacter moi.
                    </div>
                </div>
                <form className='formContact' ref={form} onSubmit={sendEmail}>
                    <div>
                        <input 
                            className='inputSize'
                            type='text' 
                            name='name' 
                            id='nom'
                            placeholder='Nom'
                            required
                        >
                        </input>
                    </div>
                    <div>
                        <input 
                            className='inputSize'
                            type='email' 
                            name='email' 
                            id='email'
                            placeholder='Adresse e-mail'
                            required
                        >
                        </input>
                    </div>
                    <div>
                        <textarea 
                            className='textareaSize'
                            name="message"
                            id="message" 
                            placeholder='Votre message'
                        >
                        </textarea>
                    </div>
                    <div>
                        <input 
                            className='submitInputSize'
                            type='submit' 
                            name='submit' 
                            id='button'
                            value='Me contacter'
                        >
                        </input>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;
