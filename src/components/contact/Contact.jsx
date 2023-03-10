import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => { 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_98nv15r', 'template_q6l4sd5', form.current, 'MF7u3cZVc24yeTVeZ')
  e.target.reset()
  };
  return (
    <section id='contact'>
       <h5> Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container contact_container">
        <div className="contact_options">
             <article className="contact_option">
              <MdOutlineEmail className='contact_option_icon'/>
              <h4>Email</h4>
              <h5>codewithnadee@gmail.com</h5>
              <a href="mailto:codewithnadeem@gmail.com" target="_blank">Send a message</a>
             </article>
             <article className="contact_option">
              <BsWhatsapp className='contact_option_icon'/>
              <h4>WhatsApp</h4>
              <h5>+91 9398300727</h5>
              <a href="https://wa.me/9398300727" target="_blank">Send a message</a>
             </article>
             <article className="contact_option">
              <BsLinkedin className='contact_option_icon'/>
              <h4>Linkedin</h4>
              <h5>Mohd Nadeem</h5>
              <a href="https://www.linkedin.com/in/mohd-nadeem-8128311bb/" target="_blank">Send a message</a>
             </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Gmail' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message </button>
        </form>
       </div>
    </section>
  )
}

export default Contact


