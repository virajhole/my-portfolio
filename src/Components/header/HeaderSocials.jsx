import React from 'react'
import { ImLinkedin } from "react-icons/im"
import { FaGithub } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { SiMedium } from "react-icons/si"

function HeaderSocials() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/arjun-samrat-23b7b11aa/" target="blank" rel="noopener noreferrer"><ImLinkedin style={{ fontSize: "20px" }} /></a>
      <a href="https://github.com/arjun0705" target="blank" rel="noopener noreferrer"><FaGithub style={{ fontSize: "20px" }} /></a>
      <a href="https://medium.com/@arjunsamrat0705" target="blank" rel="noopener noreferrer"><SiMedium style={{ fontSize: "20px" }} /></a>
      <a href="https://www.instagram.com/_arjun0705_/" target="blank" rel="noopener noreferrer"><AiFillInstagram style={{ fontSize: "20px" }} /></a>
    </div>
  )
}

export default HeaderSocials
