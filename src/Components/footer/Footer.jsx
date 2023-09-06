import React from 'react'
import "./Footer.css"
import { SiMedium } from "react-icons/si"
import { BsInstagram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { SiLinkedin } from "react-icons/si"

function Footer() {
  return (
    <footer id='footer'>
      {/* <a href="#" className='footer__logo'>ARJUN</a> */}

      <ul className='permalinks'>
        <li> <a href='#home'>Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#Portfolio">Portfolio</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/arjun0705" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/arjun-samrat-23b7b11aa/" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
        <a href="https://medium.com/@arjunsamrat0705" target="_blank" rel="noopener noreferrer"><SiMedium /></a>
        <a href="https://www.instagram.com/_arjun0705_/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        {/* <small>&copy; Design & Develope by Arjun Samrat.</small> */}
        <small>&copy; 2022 Arjun Samrat | All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
