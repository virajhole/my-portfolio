import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/youtubeclone.png"
import IMG2 from "../../assets/tictactoe.png"
import IMG3 from "../../assets/gymwebapp.png"
import IMG5 from "../../assets/portfolio.png"
import IMG4 from "../../assets/blog.png"
import IMG6 from "../../assets/todo.png"
import IMG7 from "../../assets/assignment.png"


function Portfolio() {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "MyMedia-Youtube Clone App",
      github: "https://github.com/arjun0705?tab=repositories",
      demo: "https://mymedia-3cf.pages.dev/"
    },
    {
      id: 2,
      image: IMG2,
      title: "Tic-Tac-Toe A Game App",
      github: "https://github.com/arjun0705/Tic-Tac-Toe",
      demo: "https://tic-tac-toe-eju.pages.dev/"
    },
    {
      id: 3,
      image: IMG3,
      title: "Fitness Club Advertise Web App",
      github: "https://github.com/arjun0705/Gym-Fitness-Website",
      demo: "https://fitnessmantra2.pages.dev/"
    },
    {
      id: 4,
      image: IMG4,
      title: "Fullstack Blog App",
      github: "https://github.com/arjun0705/Full-stack-blog-app",
      demo: "https://github.com/arjun0705/Full-stack-blog-app"
    },
    {
      id: 6,
      image: IMG6,
      title: "Todo Web App",
      github: "https://github.com/arjun0705/React-Redux-To-Do-Application",
      demo: "https://todo-list-react-application001.herokuapp.com/"
    },
    {
      id: 5,
      image: IMG5,
      title: "Personal Portfolio Web App",
      github: "https://github.com/arjun0705/portfolio-website",
      demo: "http://arjun-samrat-portfolio.pages.dev"
    },
    {
      id: 6,
      image: IMG7,
      title: "Construction Business Website",
      github: "https://github.com/arjun0705/Tathaatvam-Assignment",
      demo: "https://main--deluxe-phoenix-aae1bc.netlify.app/"
    },

  ]

  return (
    <section id='Portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map((ele, i) => {

          return (
            <article data-aos="zoom-in" data-aos-duration="1500" key={i} className='portfolio__item'>
              <div className='portfolio__item_img'>
                <div className="blur blur-p"></div>
                <img src={ele.image} alt={ele.title} />
              </div>
              <h3>{ele.title}</h3>
              <div className="portfolio__item-cta">
                <a href={ele.github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                <a href={ele.demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer"> Live Demo </a>
              </div>

            </article>
          )
        })}

      </div>
    </section >
  )
}

export default Portfolio
