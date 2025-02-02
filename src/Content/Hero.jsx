import profilepic from "./profile.jpg";
import "./Hero.css";
import { VscFoldDown } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link,useNavigate } from "react-router-dom"



const Hero = ({name,Title}) => {
  const navigate = useNavigate();
  
 
  
  const content=" Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum sequi voluptatem magnam tempore atque id error ullam voluptasconsectetur nulla quibusdam omnis temporibus quos ratione. Enim  reprehenderit at nobis nesciunt"

  return (
    <div>
      <div className="hero-cont">
      <div className="img-cont">
        <img src={profilepic} alt="proflepic" className="img" />
        <div className="content">
          <h1 className="h1-hero">Hi,{name}</h1>
          <h3>{Title}</h3>
          <p>
           {content}
          </p>
          <h2 className="loc-info">Chennai,India</h2>
          <p>Available for New Projects</p>
          <div className="social-info">
            <p><a href="https://www.linkedin.com/in/muthamil-selvan-7995602a6/" className="linkedin-link"><FaLinkedin />Linkedin</a></p>
            <p><a href="https://github.com/Thamizh2006" className="git-link"><FaGithub/>GitHub</a></p>
        </div>
        </div>
      </div>
      <Link to="./About"></Link>
      <button className="down-btn" onClick={()=>navigate("/about")}><span><VscFoldDown /></span> </button>

    </div>
      </div>
      
  );
};
Hero.defaultprops={
  name:"",
  Title:""
}
Hero.propTypes={
  name:PropTypes.string.isRequired,
  Title:PropTypes.string.isRequired
}
export default Hero;
