import React from 'react'
import "./Skills.css"

import ChakraUi from "../../assets/Logos/chakraui.png"
import Css from "../../assets/Logos/css.3.svg"
import Express from "../../assets/Logos/express.svg"
import Git from "../../assets/Logos/git.svg"
import Html from "../../assets/Logos/html.svg"
import Javascript from "../../assets/Logos/javascript.svg"
import MUI from "../../assets/Logos/materialui.svg"
import Mongodb from "../../assets/Logos/mongodb.svg"
import Mongoose from "../../assets/Logos/mongoose.png"
import Node from "../../assets/Logos/nodejs.svg"
import Postman from "../../assets/Logos/postman.png"
import ReactIcon from "../../assets/Logos/react.svg"
import Redux from "../../assets/Logos/redux.svg"
import Tailwind from "../../assets/Logos/tailwindcss.svg"
import Bootstrap from "../../assets/Logos/bootstrap.svg"
import Python from "../../assets/Logos/python.svg"
import Django from "../../assets/Logos/django.svg"


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
            logo: MUI,
            text: "Material UI"
        },
        {
            logo: ChakraUi,
            text: "Chakra UI"
        },
        {
            logo: Tailwind,
            text: "Tailwind"
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
            logo: Redux,
            text: "Redux"
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
        {
            logo: Python,
            text: "Python"
        },
        {
            logo: Django,
            text: "Django"
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
