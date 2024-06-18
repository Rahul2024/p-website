import React from 'react'
import "./portfolio.css"
import  d7 from '../../assets/d7.png'

const data =[
  {
    id: 1,
    image: d7,
    tital: 'Project_name',
    github: 'https://github.com/Rahul2024' ,
    demo: 'https://github.com/Rahul2024',
  },
  {
    id: 2,
    image: d7,
    tital: 'Project_name',
    github: 'https://github.com/Rahul2024' ,
    demo: 'https://github.com/Rahul2024',
  },
  {
    id: 3,
    image: d7,
    tital: 'Project_name',
    github: 'https://github.com/Rahul2024' ,
    demo: 'https://github.com/Rahul2024',
  },
  {
    id: 4,
    image: d7,
    tital: 'Project_name',
    github: 'https://github.com/Rahul2024' ,
    demo: 'https://github.com/Rahul2024',
  },
  {
    id: 5,
    image: d7,
    tital: 'Project_name',
    github: 'https://github.com/Rahul2024' ,
    demo: 'https://github.com/Rahul2024',
  },
  {
    id: 6,
    image: d7,
    tital: 'Project_name',
    github: 'https://github.com/Rahul2024' ,
    demo: 'https://github.com/Rahul2024',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My work</h5>
      <h2>Portfolio</h2>

      <div className="container port_container">{
        data.map(({id,image,tital,github,demo}) => {
          return (
              <article id={id} class="port_item">
                <div class="port_item-img">
                  <img src={image} alt="" />
                </div>
                    <h3>{tital}</h3>
                  <div class="port_item_cta">
                      <a href={github} class="btn"> Github</a>
                      <a href={demo} class="btn btn-primary" target="_blank" rel="noreferrer">Live demo</a>
                  </div>
              </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio
