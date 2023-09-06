import React from 'react'
import "./MyServices.css"
import Design from "../../assets/web-design.svg"
import Responsive from "../../assets/responsive_.svg"
import WebDevelopment from "../../assets/web-development.svg"
import Analytics from "../../assets/analytics.svg"


function MyServices() {

    return (

        <section id='services'>

            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <div className='blur blur-s'></div>


                <div data-aos="zoom-in" data-aos-duration="1500" className='services-containers'>
                    <div className='hex'>
                        <img src={Design} width="50px" alt='Services' />
                    </div>
                    <h3 className='text'>Design</h3>
                    <p>Clean-modern designes, optimised for user experience, performence & search engines.</p>
                </div>




                {/* service 2 */}

                <div data-aos="zoom-in" data-aos-duration="1500" className='services-containers'>
                    <div className='hex'>
                        <img src={WebDevelopment} alt='Services' />

                    </div>
                    <h3 className='text'>Developement</h3>
                    <ul>
                        <li>Full Stack Web Applications,</li>
                        <li> Frontend Developement, </li>
                        <li> Backend Developement, </li>
                        <li> Web Hosting. </li>
                    </ul>
                </div>

                {/* service 3 */}

                <div data-aos="zoom-in" data-aos-duration="1500" className='services-containers'>
                    <div className='hex'>
                        <img style={{ width: "78px" }} src={Responsive} alt='Services' />
                    </div>
                    <h3 className='text'>Mobile-Friendly</h3>
                    <p>A responsive designs makes your website accessible to all users, regardless of their devices.</p>
                </div>

                {/* service 4 */}

                <div data-aos="zoom-in" data-aos-duration="1500" className='services-containers'>
                    <div className='hex'>
                        <img src={Analytics} width="50px" alt='Services' />
                    </div>
                    <h3 className='text'>Web-Analytics</h3>
                    <p>Get insights into who is browsing your site so that you can make smarter business decisions.</p>
                </div>

            </div>
        </section>
    )
}



export default MyServices
