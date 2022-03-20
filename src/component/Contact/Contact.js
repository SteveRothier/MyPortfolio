import './Contact.css';

function Contact() {
  return (
    <>
        <div className='ContactBox' id='#contact'>
            <diV>
                <form className='formContact'>
                    <div>
                        <input 
                            className='inputSize'
                            type='text' 
                            name='nom' 
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
                            id='submit'
                            value='Me contacter'
                            required
                        >
                        </input>
                    </div>
                </form>
            </diV>
        </div>
    </>
  );
}

export default Contact;
