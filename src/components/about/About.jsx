import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
      <div className="about_me">
   <div className="about_me_image">
     <img src={ME} alt="about image" />
   </div>
      </div>
   <div className="about_content">
      <div className="about_cards">
        <article className="about_card">
          <FaAward className='about_icon'/>
     <h5> Experience</h5>
     <small>0-1 Years</small>
        </article>
        <article className="about_card">
          <FiUsers className='about_icon'/>
     <h5> Clients</h5>
     <small>5+ Clients</small>
        </article>
        <article className="about_card">
          <VscFolderLibrary className='about_icon'/>
     <h5> Projects</h5>
     <small>15+ prjects</small>
        </article>
      </div>
      <p>Hey Myself Mohd Nadeem I'm Pursuing a BTech in CSE.
 I'm a Fresher with decent technical experience.
 Looking for more challenging work with learning opportunities.
 Competitive programmer and Open source enthusiasm.
Interested in problem solving</p>
      <a href='#contact' className='btn btn-primary '> Let's Talk </a>
   </div>

      </div>
    </section>
  )
}

export default About;
