import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/mohd-nadeem-8128311bb/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/codewithnadeem14502' target="_blank"><BsGithub/></a>
      <a href='https://twitter.com/MD_NADEEM_' target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials
