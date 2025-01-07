

import { useState } from "react";
import "./Navbar.scss";
import logo from "../assets/images/minimalistlogo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbarSection">
      <section className="navbarContainer">
        <div className="logoSection">
          <a href="/" className="logo">
            <img src={logo} alt="Logo" className="spinningLogo" />
          </a>
          <p>C A R O U S E L</p>
        </div>
      
        <div 
          className={`hamburgerMenu ${isMenuOpen ? "open" : ""}`} 
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`navbarMenu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#contact">Mentions légales</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
