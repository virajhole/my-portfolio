import React from 'react'
import "./Contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1s3n66', 'template_etbsjfa', form.current, 'phy_xVT5NVj3Gajf9')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

            <article data-aos="zoom-in" data-aos-duration="1500" className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>arjunsamrat0705@gmail.com</h5>
              <a href="mailto:arjunsamrat0705@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
            </article>

            <article data-aos="zoom-in" data-aos-duration="1500" className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+91 9112691270</h5>
              <a href="https://api.whatsapp.com/send?phone=+919112691270" target='_blank' rel="noopener noreferrer">Send a message</a>
            </article>
        </div>

          <form data-aos="zoom-in" data-aos-duration="1500" ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Mail' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'> Send Message</button>
          </form>
        <div className='blur blur-c'></div>
      </div>
    </section>
  )
}

export default Contact
