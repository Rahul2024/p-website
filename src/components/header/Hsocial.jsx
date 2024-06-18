import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Hsocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com"  target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.github.com"  target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.twitter.com"  target="_blank" rel="noreferrer">< FaSquareXTwitter/></a>
    </div>
  )
}

export default Hsocial
