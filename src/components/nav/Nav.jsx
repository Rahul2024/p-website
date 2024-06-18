/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./nav.css"
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { useState } from 'react';


const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#"   onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : '' } ><FaHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : '' }><FaUser/></a>
      <a href="#experiance"   onClick={()=>setActiveNav('#experiance')} className={activeNav==='#experiance' ? 'active' : '' }><FaBook/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : '' }><FaProjectDiagram /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : '' }><MdMessage/></a>
    </nav>
  )
}

export default Nav
