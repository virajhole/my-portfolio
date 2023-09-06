import React from 'react'
import "./Experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skill's I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>

        <div data-aos="zoom-in" data-aos-duration="1500" className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="blur blur-e"></div>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>HTML5</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>CSS3</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>JavaScript</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>React</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>React-Redux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Material Ui</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
          </div>
        </div>


        {/* Backend development */}



        <div data-aos="zoom-in" data-aos-duration="1500" className="experience__backend">
          <h3>Backend Development</h3>
          <div className="blur blur-e2"></div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>Python</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>Python Django</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Rest Api</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>NodeJs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>SQL Databases</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>

        </div>


      </div>



    </section>
  )
}

export default Experience
