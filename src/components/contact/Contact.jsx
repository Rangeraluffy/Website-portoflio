import React from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';

export default function Contact() {
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
      <h1 className="title">Contact</h1>

      <div className="container" id="contact">
        <form onSubmit={sendEmail}>
          <input name="name" type="text" className="feedback-input" placeholder="Name" />
          <input name="email" type="text" className="feedback-input" placeholder="Email" />
          <textarea name="message" className="feedback-input" placeholder="Comment" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
