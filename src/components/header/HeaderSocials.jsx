import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'
import { SiHackerrank } from 'react-icons/si'
const HeaderSocials = () => {
    return (
        <div className='header_socials'>

            <a href="https://www.linkedin.com/in/najnin-sultana-nishu-94472b229/" target="blank"><BsLinkedin /></a>
            <a href="https://github.com/najninnishu" target="blank"><ImGithub /></a>
            <a href="https://www.hackerrank.com/najninnishu2020" target="blank"><SiHackerrank /></a>
        </div>
    )
}

export default HeaderSocials