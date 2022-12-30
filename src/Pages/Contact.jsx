import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faInstagram} from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
    const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return (
        <div>
        <div className="contactForm">
    <h1 >Pour collaborer, <br/> envoyez-moi un message ici :</h1>



<form className='contactFormLabel' ref={form} onSubmit={sendEmail}>
      <label >Nom</label>
      <input placeholder="Votre Nom Prénom"type="text" name="user_name" />
      <label>Email</label>
      <input placeholder="votre@mail"type="email" name="user_email" />
      <label>Message</label>
      <textarea placeholder="Votre message" name="message" />
      <input id="sendButton"type="submit" value="Send" />
    </form>
    </div>

<a href="https://www.instagram.com/lana.duval/?hl=fr" rel='noopener noreferrer' target="_blank"><FontAwesomeIcon className='fab fa-react fa-2x'style={{color: "#FFF", marginInline:"3rem", marginTop:"0", paddingBlock:"1rem", alignItems:"center", opacity:"0.7"}} icon={faInstagram} /></a>
<a href="https://twitter.com/Sisslug" rel='noopener noreferrer' target="_blank"><FontAwesomeIcon className='fab fa-react fa-2x' style={{color: "#FFF", marginInline:"2rem", paddingBlock:"1rem", opacity:"0.7"}}icon={faTwitter} /></a>
</div>

    
    );
}





