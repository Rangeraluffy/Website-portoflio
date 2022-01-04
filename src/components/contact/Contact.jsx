import React from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';
import { useTranslation } from 'react-i18next';

export default function Contact() {

  const { t } = useTranslation();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_mw96vwq', 'template_7j7u1zd', e.target, 'user_G0gHK2FJGn3KFJ9N511Fv')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className="contact">
      <h1 className="title">{t('Contact.1')}</h1>

      <div className="container" id="contact">
        <form onSubmit={sendEmail}>
          <input name="name" type="text" className="feedback-input" placeholder={t('Contact.2')} required />
          <input name="email" type="text" className="feedback-input" placeholder="Email" required />
          <textarea name="message" className="feedback-input" placeholder={t('Contact.3')} required/>
          <input type="submit" value={t('Contact.4')} />
        </form>
      </div>
    </div>
  );
}
