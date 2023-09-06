import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
import TypeWriterEffect from 'react-typewriter-effect';

function Header() {
  return (
    <header className='headerbackground' id='home'>
      <div className=" header__container">
        <h5 style={{ letterSpacing: "1px" }}>Hello I'm</h5>
        <div className="blur blur-h"></div>
        <h1 className='name'> Arjun Samrat </h1>
        <h4 className='profile'>Full Stack Web Developer</h4>

        <span className='ideas'>
          <TypeWriterEffect
            textStyle={{
              fontSize: '1em',
              textAlign: "center"
            }}

            startDelay={100}
            cursorColor="white"
            text="Bringing Ideas to real life products..."
            typeSpeed={80}

          />
        </span>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <span className='coder'>
            <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_obidsi0t.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </span>
        </div>
        <a href="#footer" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
