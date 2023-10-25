import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project-1.png'
import IMG2 from '../../assets/project-2.png'
import IMG3 from '../../assets/project-3.png'

const data = [
  {
    id: 1,
    image: IMG1, 
    title: 'project 1 test',
    gifthub: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 2,
    image: IMG2, 
    title: 'project 2 test',
    gifthub: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 3,
    image: IMG3, 
    title: 'project 3 test',
    gifthub: 'https://github.com',
    demo: 'https://google.com'
  }/*,
  {
    id: 4,
    image: IMG3, 
    title: 'project 4 test',
    gifthub: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 5,
    image: IMG2, 
    title: 'project 5 test',
    gifthub: 'https://github.com',
    demo: 'https://google.com'
  },
  {
    id: 6,
    image: IMG1, 
    title: 'project 6 test',
    gifthub: 'https://github.com',
    demo: 'https://google.com'
  }*/
]


const Portfolio = () => {
  return (
<section id='portfolio' >
  <h5>My Recent Work</h5>
  <h2>Portfolio</h2>

  <div className='container portfolio__container'>
   {
    data.map(({id, image, title, github, demo}) => {
      return ( 
        <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn' target='_blank'>Live Demo</a>
        </div>
      </article>
      )
    })
   }
  </div>
</section>  )
}

export default Portfolio