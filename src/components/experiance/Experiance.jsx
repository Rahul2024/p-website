import React from 'react'
import "./experiance.css"
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";


const Experiance = () => {
  return (
    <section id='experiance'>

       <h5>My Skills</h5>
       <h2>My Experience</h2>

      
      <div className="container exp_container">
          <div className="exp_frontend">
            <h3>Frontend Developer</h3>
            <div className="exp_content">
              <article className='exp_detail'>
                <p className='exp_icon'><FaHtml5 /></p>
             <div><h4>HTML</h4>
                <small className='text_light'>Experienced</small>
                </div>
              </article>

              <article className='exp_detail'>
                <p className='exp_icon'><FaCss3Alt/></p>
              <div>  <h4>CSS</h4>
                <small className='text_light'>Intermidiate</small>
                </div>
              </article>

              <article className='exp_detail'>
                <p className='exp_icon'><IoLogoJavascript /></p>
                <div><h4>JAVASCRIPT</h4>
                <small className='text_light'>Experienced</small>
                </div>
              </article>

              <article className='exp_detail'>
                <p className='exp_icon'><FaReact/></p>
               <div> <h4>REACT</h4>
                <small className='text_light'>Experienced</small>
                </div>
              </article>

              <article className='exp_detail'>
                <p className='exp_icon'><FaReact/></p>
               <div> <h4>REACT</h4>
                <small className='text_light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
        
          <div className="exp_backend">
          <h3>Backhand Developer</h3>
            <div className="exp_content">
              <article className='exp_detail'>
                <p className='exp_icon'><GrMysql/></p>
               <div> <h4>Mysql</h4>
                <small className='text_light'>Experienced</small>
                </div>
              </article>
              <article className='exp_detail'>
                <p className='exp_icon'><IoLogoFirebase/></p>
               <div> <h4>Firebase</h4>
                <small className='text_light'>Intermidiate</small></div>
              </article>
              <article className='exp_detail'>
                <p className='exp_icon'><SiExpress/></p>
                <div><h4>Express js</h4>
                <small className='text_light'>Experienced</small></div>
              </article>
              <article className='exp_detail'>
                <p className='exp_icon'><FaPhp/></p>
                <div><h4>PHP</h4>
                <small className='text_light'>Experienced</small></div>
              </article>
              <article className='exp_detail'>
                <p className='exp_icon'><FaPhp/></p>
                <div>
                  <h4>PHP</h4>
                <small className='text_light'>Experienced</small>
                </div>
              </article>
            </div>

          </div>


      </div>

     




    </section>
  )
}

export default Experiance