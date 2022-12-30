import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faInstagram} from '@fortawesome/free-brands-svg-icons'


export default function Contact() {

    const form = useRef();
    const notify = () => {
        toast.dark(" Message envoyé ! ✅ ");

        };  
 const emptyNotify =()=>{
    toast.dark(" Message envoyé ! ✅ ");

    };  
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
};
    
const handleMessageChange = (e) => {
        setMessage(e.target.value);
      };
      
const submitMsg = (e) => { e.preventDefault();
if (name !==('') && message !==('')){ notify();}
    
} else 

  
  const sendEmail = (e) => {
 

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

    <ToastContainer
        autoClose={2000}
        position="bottom-center"
        className="toast-container"
        toastClassName="dark-toast" >
     </ToastContainer>

<form className='contactFormLabel' ref={form} onSubmit={sendEmail && submitMsg}>
      <label >Nom</label>
      <input placeholder="Votre Nom Prénom"type="text" name="user_name" onChange={handleNameChange}/>
      <label>Email</label>
      <input placeholder="votre@mail"type="email" name="user_email" />
      <label>Message</label>
      <textarea placeholder="Votre message" name="message" onChange={handleMessageChange}/>
      <input id="sendButton"type="submit"  value="Send"/>
    </form>
    </div>

<a href="https://www.instagram.com/lana.duval/?hl=fr" rel='noopener noreferrer' target="_blank"><FontAwesomeIcon className='fab fa-react fa-2x'style={{color: "#FFF", marginInline:"3rem", marginTop:"0", paddingBlock:"1rem", alignItems:"center", opacity:"0.7"}} icon={faInstagram} /></a>
<a href="https://twitter.com/Sisslug" rel='noopener noreferrer' target="_blank"><FontAwesomeIcon className='fab fa-react fa-2x' style={{color: "#FFF", marginInline:"2rem", paddingBlock:"1rem", opacity:"0.7"}}icon={faTwitter} /></a>

</div>

    
    );
}