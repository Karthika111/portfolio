import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/me1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I’m a passionate fullstack developer creating dynamic and user-friendly web applications. </p>
                    <p>I have a keen eye for design and usability, which allows me to bridge the gap between technical implementation and user experience.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />

            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
       
    </div>
  )
}

export default About