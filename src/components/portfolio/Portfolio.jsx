import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.png'
import IMG2 from '../../assests/portfolio2.png'
import IMG3 from '../../assests/portfolio3.png'
import IMG4 from '../../assests/portfolio4.png'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.png'

const data = [

  {
    id:1,
    image:IMG1,
    title: 'Pixagenerator🖼️',
    github:'https://github.com/codewithnadeem14502/pixgenerater',
    demo:'https://pixgenerator.netlify.app/'
  },
  {
    id:2,
    image:IMG2,
    title: 'NewsExpress📰',
    github:'https://github.com/codewithnadeem14502/NewsExpress',
    demo:'https://newsexpresss.netlify.app/'
  },
  {
    id:3,
    image:IMG3,
    title: 'recipespoints😋',
    github:'https://github.com/codewithnadeem14502/Recipespoints',
    demo:'https://recipespoints.netlify.app/'
  },
  {
    id:4,
    image:IMG4,
    title: 'Netflix Clone 🍿',
    github:'https://github.com/codewithnadeem14502/Netflix--Clone',
    demo:'https://codewithnadeem14502.github.io/Netflix--Clone/'
  },
  {
    id:5,
    image:IMG5,
    title: 'Rock-paper-scissor Game 🕹️',
    github:'https://github.com/codewithnadeem14502/ROCK-PAPER-SCISSOR',
    demo:'https://codewithnadeem14502.github.io/ROCK-PAPER-SCISSOR/'
  },
  {
    id:6,
    image:IMG6,
    title: 'Weather-App🌄',
    github:'https://github.com/codewithnadeem14502/-Weather-App-',
    demo:'https://codewithnadeem14502.github.io/-Weather-App-/'
  }
]



export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className="container protfolio_container">
     {
       data.map(({id,image,title,github,demo}) =>{
        return(
          <article key={id} className='protfolio_item'>
          <div className="protfolio_item_image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
           <div className="protfolio_item_cta">
           <a href={github}className='btn' target='_blank'> GitHub</a>
         
         <a href={demo}className='btn btn-primary' target='_blank'> Live Demo</a>
           </div>
        
        </article>
        )
       })
     }
       
      </div>
    </section>
  )
}
export default Portfolio;