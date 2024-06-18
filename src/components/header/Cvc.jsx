import React from 'react'
import Cv from '../../assets/Cv.pdf'

const Cvc = () => {
  return (
    <div className='cvc' >
      <a href={Cv} className='btn'  >Download CV</a>
      <a href="#contact" className='btn btn-primary ' >Contact me </a>
    </div>
  )
}

export default Cvc
