import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { SiMessenger } from 'react-icons/si'
import { SiWhatsapp } from 'react-icons/si'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u066c2l', 'template_s9wc7m9', form.current, 'BQ2-uKIW3yUFu8Pe1')
        e.target.reset()

    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact ME</h2>
            <div className="container contact_container">
                <div className="contact_option">
                    <article className='contact_option'>
                        <MdOutlineMail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>najninnishu2020@gmail.com</h5>
                        <a href="mailto:najninnishu2020@gmail.com">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <SiMessenger className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>https://www.facebook.com/najninsultana.nishu?mibextid=ZbWKwL</h5>

                        <a href="https://m.me/home.php">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <SiWhatsapp className='contact_option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+8801409841211</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801409841211">Send a message</a>
                    </article>
                </div>
                {/* end of contact options */}
                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" name="name" placeholder="Your Full Name " required />
                    <input type="email" name="email" placeholder="Your Email " required />
                    <textarea name="message" rows="7" placeholder="Write Your message" required></ textarea>
                    <button type="submit" className='btn btn-primary'>Send a Message</button>

                </form>
            </div>
        </section >
    )
}
export default Contact


