import { useState } from "react";
import emailjs from 'emailjs-com';
import "./contact.scss";

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mw96vwq', 'template_7j7u1zd', e.target, 'user_G0gHK2FJGn3KFJ9N511Fv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact">
      <h1>Contact</h1>

    <div className="container" id="contact">
      <form onSubmit={sendEmail}>
      <input name="name" type="text" class="feedback-input" placeholder="Name" />
      <input name="email" type="text" class="feedback-input" placeholder="Email" />
      <textarea name="message" class="feedback-input" placeholder="Comment"></textarea>
      <input type="submit" value="Send"/>
      </form>
    </div>
    </div>
  );
}
