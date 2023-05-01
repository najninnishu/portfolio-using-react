import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>NAJNIN NISHU</a>
            <ul className='permalinks'>
                <li><a href="#home">Home</a> </li>
                <li><a href="#about">About</a> </li>

                <li><a href="#experience">Experience</a> </li>

                <li><a href="#service">Services</a> </li>

                <li><a href="#protfolio">protfolio</a> </li>

                <li><a href="#contact">Contact</a> </li>

            </ul>
            <div className="footer_copyright">
                <small>&copy;NAJNIN NISHU. All rights reserved</small>
            </div>

        </footer>
    )
}

export default Footer