import React from 'react'
import "./Services.css"
import { BiCheck } from "react-icons/bi"
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <article className='service'>
            <div className="service__head">
              <h3>Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p className='service__list-p'>Developing and maintaining the user interface.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Optimizing user experience that achieves your business goals.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Responsive Web Applications that fits on any device.</p>
              </li>
               <li>
                
                <BiCheck className='service__list-icon' />
                <p>Implementing UI effects, Animations & creating intuitive, dynamic user experiences.</p>
              </li>
              
              <li>
                <BiCheck className='service__list-icon' />
                <p>Clean and modern designed web applications.</p>
              </li>
              {/*
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li> */}
            </ul>
          </article>
        </AnimationOnScroll>


        {/* service 2 */}

        <AnimationOnScroll animateIn="animate__fadeInDown" delay={400}>

          <article className='service'>
            <div className="service__head">
              <h3>Developement</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Front-end Developement.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Backend Developement.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
        </AnimationOnScroll>

        {/* service 3 */}

        {/* <AnimationOnScroll animateIn="animate__fadeInDown" delay={800}>


          <article className='service'>
            <div className="service__head">
              <h3>Service 3</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>

        </AnimationOnScroll> */}
      </div>    
    </section>
  )
}

export default Services
