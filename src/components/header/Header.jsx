import React from 'react'
import "./header.css"
import Cvc from './Cvc'
import me from '../../assets/me.png'
import Hsocial from './Hsocial'

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header_container">
        <h5> Hello I'am</h5>
        <h1>Rahul Raj</h1>
        <h5 className="text-light">Frontend developer</h5>
        <Cvc/>
        <Hsocial/>
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#contact" className='scroll_down'> Scroll Down</a>
        </div>
        
      </header>
    </div>
  )
}

export default Header
