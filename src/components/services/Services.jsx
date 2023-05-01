import React from 'react'
import './services.css'
import { BsCheck2 } from 'react-icons/bs'
const Services = () => {
    return (
        <section id="service">
            <h5> What I  Offer</h5>
            <h2>Services</h2>
            <div className="container service_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>User research</p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Wireframing</p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Iteration and optimization</p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Interaction design</p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Visual design</p>
                        </li>

                    </ul>
                </article>
                {/* end UI/UX */}

                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Website design and development</p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>E-commerce development</p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>CMS development </p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>API development</p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Responsive design</p>
                        </li>

                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Website maintenance and updates</p>
                        </li>
                    </ul>
                </article>

                {/* end web development */}

                <article className="service">
                    <div className="service_head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Content strategy</p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Content editing</p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Content optimization</p>
                        </li>
                        <li>
                            <BsCheck2 className='service_list-icon' />
                            <p>Content consulting</p>
                        </li>
                    </ul>
                </article>

                {/* conent creation */}

            </div >
        </section >
    )
}

export default Services