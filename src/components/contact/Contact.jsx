import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';
import {useTranslation} from 'react-i18next';

export default function Contact() {

  const {t} = useTranslation();

  const Result =() =>{
    return(
      <p>{t('Contact.5')}</p>
    )
  }

  const [result,showResult] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mw96vwq', 'template_7j7u1zd', e.target, 'user_G0gHK2FJGn3KFJ9N511Fv').then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    e.target.reset();
    showResult(true);
  }

  return (<div className="contact">
    <h1 className="title">{t('Contact.1')}</h1>
    <div className="container" id="contact">
      <form onSubmit={sendEmail}>
        <input name="name" type="text" className="feedback-input" placeholder={t('Contact.2')} required="required"/>
        <input name="email" type="email" className="feedback-input" placeholder="Email" required="required"/>
        <textarea name="message" className="feedback-input" placeholder={t('Contact.3')} required="required"/>
        <input type="submit" value={t('Contact.4')}/>
        <div className="show_message">{result ? <Result /> : null}</div>
      </form>
    </div>
  </div>);
}
