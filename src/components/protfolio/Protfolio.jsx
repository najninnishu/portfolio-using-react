import React from 'react'
import './protfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/protfolio2.png'

import IMG3 from '../../assets/protfolio3.png'

import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'



const Protfolio = () => {
    return (
        <section id="protfolio">
            <h5>My Recent Work</h5>
            <h2>Protfolio</h2>

            <div className="container protfolio_container">
                <article className='portfolio_item'>

                    <div className="protfolio_item-image">
                        <img src={IMG1} alt="" />
                    </div>

                    <h3>Grocery Store Website</h3>

                    <a href="https://github.com/najninnishu" className='btn' target='_blank'>Github</a>

                    <a href="https://najninnishu.github.io/Grocery-Store-Website/" className='btn btn-primary' target='_blank'>Live Demo</a>


                </article>

                <article className='portfolio_item'>

                    <div className="protfolio_item-image">
                        <img src={IMG2} alt="" />
                    </div>

                    <h3>kutum Bari website</h3>

                    <a href="https://github.com/najninnishu" className='btn' target='_blank'>Github</a>

                    <a href="https://najninnishu.github.io/Kutum-Bari-Website/" className='btn btn-primary' target='_blank'>Live Demo</a>

                </article>
                <article className='portfolio_item'>

                    <div className="protfolio_item-image">
                        <img src={IMG3} alt="" />
                    </div>

                    <h3>Restaurant Website</h3>

                    <a href="https://github.com/najninnishu" className='btn' target='_blank'>Github</a>

                    <a href="https://najninnishu.github.io/Resturant-website/" className='btn btn-primary' target='_blank'>Live Demo</a>

                </article>
                <article className='portfolio_item'>

                    <div className="protfolio_item-image">
                        <img src={IMG4} alt="" />
                    </div>

                    <h3>Web protfolio</h3>

                    <a href="https://github.com/najninnishu" className='btn' target='_blank'>Github</a>

                    <a href="https://najninnishu.github.io/web-portfolio/" className='btn btn-primary' target='_blank'>Live Demo</a>


                </article>
                <article className='portfolio_item'>

                    <div className="protfolio_item-image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>Ambient Light Effects</h3>

                    <a href="https://github.com/najninnishu" className='btn' target='_blank'>Github</a>

                    <a href="https://najninnishu.github.io/Ambient-Light-Effects/" className='btn btn-primary' target='_blank'>Live Demo</a>

                </article>

            </div>
        </section>
    )
}

export default Protfolio