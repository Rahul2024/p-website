import React from 'react'
import "./about.css"
import d4 from "../../assets/d4.jpeg"
import { FaAward } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const about = () => {
  return (
    <section  id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-img">
          <img src={d4} alt="" />
        </div>
      </div>
    
      

      <div className="about_content">
        <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icons'/>
              <h5>Experiance</h5>
              <small> 0</small>
            </article>

            <article className="about_card">
              <FaUser className='about_icons'/>
              <h5>Clients</h5>
              <small> 0 </small>
            </article>

            <article className="about_card">
            <FaProjectDiagram className='about_icons'/>
              <h5>Projects</h5>
              <small> 0 </small>
            </article>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt quam placeat ducimus tempora corrupti deleniti quis sed. Maiores dignissimos sint nam facilis earum aspernatur maxime libero accusamus deserunt debitis.</p>

        <a href="#contact" className='btn btn-primary'> Lets Talk</a>
    </div>
  </div>
    </section>
  )
}

export default about