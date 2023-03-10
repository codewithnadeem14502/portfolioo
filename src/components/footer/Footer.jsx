import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
   <footer>
    <a href="#" className="footer_logo">Mohd Nadeem</a>
    <ul className="permalinks">
      <li><a href="#">HOME</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer_socials">
      <a href="https://twitter.com/MD_NADEEM_"target='_blank'><BsTwitter/></a>
      <a href="https://www.linkedin.com/in/mohd-nadeem-8128311bb/"target='_blank'><BsLinkedin/></a>
      <a href="https://www.instagram.com/htmlarts/" target='_blank'><BsInstagram/></a>
    </div>

    <div className="footer_copyright" >
      <small>&copy; codewithnadeem. ALL right reserved</small>
    </div>
   </footer>
  )
}

export default Footer