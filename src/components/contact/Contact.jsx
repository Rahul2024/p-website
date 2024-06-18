import React from 'react'
import "./contact.css"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_9k40v3p', 'template_zfszu3c', form.current, {
        publicKey: 'thNzzIBOlrZPFkraf'
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact_container">
    <div className="contact_options">  
      <article className='contact_option'>
      <MdEmail className='contact_option-icon'/>
      <h4>Email</h4>
      <h5>Rahulraj202497@gmail.com</h5>
      <a href="mailto:rahulraj202497@gmail.com">Send a mail</a>
      </article>

      <article className='contact_option'>
      <FaLinkedin className='contact_option-icon'/>
      <h4>Linkedin</h4>
      <h5>R Raj</h5>
      <a href="https://www.linkedin.com/in/r-raj-7132b8245/">Send me a mesg</a>
      </article>

      <article className='contact_option'>
      <FaSquareWhatsapp className='contact_option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+91 902486359</h5>
      <a href="https://api.whatsapp.com/send?phone=919026486359">Send Message</a>
      </article>
    </div>
     {/* 2nd div for form  */}
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="=Email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7"   placeholder='Your messge'></textarea>
        <button type='submit' className='btn btn-primary'> Send message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact
