// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import resume from "./MyRESUME.pdf";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  
  }

  return (
    <div>
      <div className="nav-cont">
        <h1 className="nav-title">Portfolio</h1>

       
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

      
        <ul className={`ul-nav-list ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/about")}>About</button>
            <button onClick={() => navigate("/tech")}>Projects</button>
            <button onClick={() => navigate("/contact")}>Contact</button>
          </li>

          
          <li className="cv-item">
            <button id="cv-btn">
              <a href={resume} download={resume} style={{ textDecoration: "none", color: 'white' }}>Download CV</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
