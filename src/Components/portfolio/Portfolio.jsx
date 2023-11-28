import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/youtubeclone.png"
import IMG2 from "../../assets/tictactoe.png"
import IMG3 from "../../assets/gymwebapp.png"
import IMG5 from "../../assets/portfolio.png"
import IMG4 from "../../assets/library.png"
import IMG6 from "../../assets/hospital.png"
import IMG7 from "../../assets/food.jpg"


function Portfolio() {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "MyMedia-Youtube Clone App",
      github: "https://github.com/virajhole",
      demo: "https://github.com/virajhole"
    },
    {
      id: 2,
      image: IMG2,
      title: "Tic-Tac-Toe A Game App",
      github: "https://github.com/virajhole/Tic-Tac-Toe",
      demo: "https://tic-tac-toe-virajhole.vercel.app/"
    },
    {
      id: 3,
      image: IMG3,
      title: "Fitness Club Advertise Web App",
      github: "https://github.com/virajhole/Gym-Fitness-Website",
      demo: "https://gym-fitness-website-delta.vercel.app/"
    },
    {
      id: 4,
      image: IMG4,
      title: " Library-Management-System",
      github: "https://github.com/virajhole/Library-Management-System",
      demo: "https://github.com/virajhole/Library-Management-System"
    },
    {
      id: 6,
      image: IMG6,
      title: "Hospital-App",
      github: "https://github.com/virajhole/Hospital-App",
      demo: "https://github.com/virajhole/Hospital-App"
    },
    {
      id: 5,
      image: IMG5,
      title: "Personal Portfolio Web App",
      github: "https://github.com/virajhole/my-portfolio",
      demo: "https://my-portfolio-virajhole.vercel.app/"
    },
    {
      id: 6,
      image: IMG7,
      title: "Food-App",
      github: "https://github.com/virajhole/Food-App",
      demo: "https://github.com/virajhole/Food-App"
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
