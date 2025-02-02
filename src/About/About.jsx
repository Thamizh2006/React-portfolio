// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import apic from './about.png'



const About = () => {
  const description="I am a passionate Frontend Developer with a strong focus on creating user-friendly and responsive websites. I have experience in HTML, CSS, JavaScript, and modern frameworks like React. I enjoy turning ideas into beautiful and functional web pages. I hold a degree in B.tech Information Technology from Anna University, where I gained a strong foundation in web development and design principles. I am always eager to learn new technologies and improve my skills. My goal is to build smooth and engaging user experiences that make websites both visually appealing and easy to use. I love solving problems and bringing creative ideas to life"
  return (
    <div>
        <div className="about-cont">
            <h4 className="about-title">About Me</h4>
            <div className="img-cont">
            <img src={apic} alt="aboutpic"  id='aboutpic'/>
            <p className='about-content'>{description}</p>

            </div>
        </div>
    </div>
  )
}

export default About