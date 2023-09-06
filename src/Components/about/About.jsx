
import React from 'react'
import "./About.css"
import ME from "../../assets/me123.jpg"
import { FaAward } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi"
import { VscFolderActive } from "react-icons/vsc"
import 'animate.css';


const About = () => {
  return (
    <section id='about'>

      <h5 className='getToKnow'>Get To Know</h5>

      <h2 className='abtme'>About Me</h2>

      <div className="container about__container">



        <span data-aos="zoom-in" data-aos-duration="1500">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
          </div>
        </span>

        <div className="about__content">
          <div className="about__cards">
            <div className="blur blur-a"></div>

            <span data-aos="zoom-in" data-aos-duration="1500">
              <article className="about__card">
                <FaAward className='about-icon' />
                <h5>Experience</h5>
                <small> 1+ Year of Working </small>
              </article>
            </span>

            <span data-aos="zoom-in" data-aos-duration="1500">
              <a href="#education" style={{ color: "white" }}>
                <article className="about__card">
                  <GiGraduateCap className='about-icon' />
                  <h5>Education</h5>
                  <small> Bachelor's Degree In Computer Science </small>
                </article>
              </a>
            </span>

            <span data-aos="zoom-in" data-aos-duration="1500">

              <a href="#Portfolio" style={{ color: "white" }}>
                <article className="about__card">
                  <VscFolderActive className='about-icon' />
                  <h5>Projects</h5>
                  <small> 10+ Completed </small>
                </article>
              </a>
            </span>

          </div>

          <p data-aos="zoom-in" data-aos-duration="1500" style={{ textAlign: "justify" }}>I am a Full Stack Web Developer with robust problem-solving skills and proven experience in designing, developing and deploying software, websites & web-applications in a test-driven environment.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>

  )
}

export default About
