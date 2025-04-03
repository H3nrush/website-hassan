import React, { useEffect, useState } from 'react';
import "../header/header.scss";
import icon from "../file/logo.png";
import { Link, useLocation } from 'react-router-dom';
import github from '../file/contact/git.png';
import menuIcon from '../file/menu/icons8-menu-96.png'; // Menu GIF
import closeIcon from '../file/menu/icons8-close-window-96.png'; // Close (X) icon

function Header() {
  const [isHome, setIsHome] = useState(false);
  const [mobileSize, setMobileSize] = useState(window.innerWidth <= 900);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileSize(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();

  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <nav className="navbar">
        <div className="logo">
          <Link to={"https://www.hassanmohammadi.site"}><img src={icon} alt="Logo" className="icon" /></Link>
        </div>

        {/* Mobile View: Show Menu Icon */}
        {mobileSize ? (
          <div className="mobile-menu">
            <img 
              src={isMenuOpen ? closeIcon : menuIcon} 
              alt="Menu" 
              className="menu-icon" 
              onClick={toggleMenu} 
            />
            {isMenuOpen && (
              <div className="menu-dropdown">
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
                <Link to="/About" onClick={toggleMenu}>About</Link>
                <img src={github} className="github" alt="GitHub" />
              </div>
            )}
          </div>
        ) : (
          /* Desktop View: Show Full Menu */
          <div className="menubar">
            <Link to="/"><button>Home</button></Link>
            {isHome && (
              <div className="dropdown">
                <button className="skills-button">Skills</button>
                <div className="dropdown-menu">
                  <a href="#python"><button>Python</button></a>
                  <a href="#typescript"><button>TypeScript</button></a>
                  <a href="#react"><button>React</button></a>
                  <a href="#express"><button>ExpressJs</button></a>
                  <a href="#sass"><button>Sass</button></a>
                </div>
              </div>
            )}
            <Link to="/Contact"><button>Contact</button></Link>
            <Link to="/About"><button>About</button></Link>
            <Link to={"https://www.github.com/h3nrush"}><img src={github} className="github" alt="GitHub" /></Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
