import React from 'react'
import data from "../db/contact.json";

export default function Contact() {
  return (
    <div className="contact">
      <div className="fpContact">
        <h1 className="contactTitle">{data.contact.title}</h1>
        <p className="contactsubt">{data.contact.desc}</p>
      </div>
      <div className="contactFormSubmit">
        <form name="contactForm" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contactForm"/>
          <input type="email" name="email" placeholder={data.contact.input.placeholder} />
          <button type="submit" className="btn2">{data.contact.button.text}</button>
        </form>
      </div>
    </div>
  );
}
