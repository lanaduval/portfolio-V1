import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter , faInstagram} from '@fortawesome/free-brands-svg-icons'


export default function Contact() {
    const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, 'hwUq8GgAWjZG7M4DT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return (
        <div>
    <h1>Contact form</h1>

<FontAwesomeIcon className='fab fa-react fa-beat  fa-2x' icon={faBell} />
<FontAwesomeIcon className='fab fa-react fa-fade  fa-2x' icon={faEnvelope} />
<FontAwesomeIcon icon={faTwitter} />
<FontAwesomeIcon icon={faInstagram} />

<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone</label>
      <input type="email" name="user_phone" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    </div>
    );
}





