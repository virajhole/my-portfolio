import React from 'react'
import "./Skills.css"


import Css from "../../assets/Logos/css.3.svg"
import Express from "../../assets/Logos/express.svg"
import Git from "../../assets/Logos/git.svg"
import Html from "../../assets/Logos/html.svg"
import Javascript from "../../assets/Logos/javascript.svg"

import Mongodb from "../../assets/Logos/mongodb.svg"
import Mongoose from "../../assets/Logos/mongoose.png"
import Node from "../../assets/Logos/nodejs.svg"
import Postman from "../../assets/Logos/postman.png"
import ReactIcon from "../../assets/Logos/react.svg"


import Bootstrap from "../../assets/Logos/bootstrap.svg"
import Springboot from "../../assets/Logos/springboot.svg"
import Java from "../../assets/Logos/java.svg"
import Sql from "../../assets/Logos/sql.png"

const Skills = () => {

    const logos = [
        {
            logo: Html,
            text: "HTML 5"
        },
        {
            logo: Css,
            text: "Css"
        },
        {
            logo: Bootstrap,
            text: "Bootstrap"
        },
        {
            logo: Java,
            text: "Java"
        },
        {
            logo: Springboot,
            text: "Spring Boot"
        },

        {
            logo: Javascript,
            text: "JavaScript"
        },
        {
            logo: ReactIcon,
            text: "React"
        },

        {
            logo: Node,
            text: "Node JS"
        },
        {
            logo: Express,
            text: "Express"
        },
        {
            logo: Sql,
            text: "SQL"
        },
        {
            logo: Mongodb,
            text: "MongoDB"
        },
        {
            logo: Mongoose,
            text: "Mongoose"
        },
        {
            logo: Postman,
            text: "Postman"
        },
        {
            logo: Git,
            text: "Git"
        },


    ]

    return (
        <section id='skills'>
            <h5>Tchnical Skills</h5>
            <div className="container logos">
                <div className='blur blur-skills'></div>
                {logos.map((item) => (

                    <div data-aos="zoom-in" data-aos-duration="1500" className='img-main'>
                        <img style={{ width: "80px" }} src={item.logo} alt="" />
                        <p style={{ color: "black", textAlign: "center", marginTop: "5px" }}>{item.text}</p>
                    </div>

                ))}
            </div>


        </section >
    )
}

export default Skills
