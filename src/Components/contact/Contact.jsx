import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c1s3n66",
        "template_etbsjfa",
        form.current,
        "phy_xVT5NVj3Gajf9"
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
        },
        (error) => {
          console.log("Email sending error:", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article
            className="contact__option"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>virajhole7774@gmail.com</h5>
            <a
              href="mailto:virajhole7774@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article
            className="contact__option"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7774829155</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917774829155"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div className="blur blur-c"></div>
      </div>
    </section>
  );
}

export default Contact;
