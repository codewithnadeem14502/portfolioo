import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me.png'
import HeaderSocials from './HeaderSocials'
export const Header = () => {
  return (
   <header>
    <div className="container header_container">

      <h5>hello I'm</h5>
      <h1>Mohd Nadeem</h1>
      <h5 className="text-light">Frontend Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href='#contact' className='scroll_down'> Scroll Down</a>
    </div>
   </header>
  )
}
export default Header;