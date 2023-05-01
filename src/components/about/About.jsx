import React from 'react'
import './about.css'
import ME from '../../assets/nishu.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscNewFolder } from 'react-icons/vsc'
const About = () => {
    return (
        <section id="about">

            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about_container">

                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />

                    </div>

                </div>


                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>1+ years Working</small>
                        </article>
                        <article className='about_card'>
                            <FiUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className='about_card'>
                            <VscNewFolder className='about_icon' />
                            <h5>Projects</h5>
                            <small>20+ completed</small>
                        </article>

                    </div>
                    <p>
                        I'm a skilled software developer with experience in TypeScript and
                        JavaScript, and expertise in frameworks like React, Node.js, and
                        Three.js. I'm a quick learner and collaborate closely with clients to
                        create efficient, scalable, and user-friendly solutions that solve
                        real-world problems. Let's work together to bring your ideas to life!
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>
    )
}

export default About