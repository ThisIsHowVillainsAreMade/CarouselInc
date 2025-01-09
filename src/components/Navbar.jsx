// FR : Importation des hooks React et des styles spécifiques
// EN : Importing React hooks and specific styles
import { useState } from "react";
import "./Navbar.scss";

// FR : Importation de l'image du logo
// EN : Importing the logo image
import logo from "../assets/images/minimalistlogo.png";

// FR : Définition du composant fonctionnel Navbar
// EN : Defining the functional component Navbar
export default function Navbar() {
  // FR : Déclaration d'un état pour gérer l'ouverture/fermeture du menu
  // EN : Declaring a state to manage menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // FR : Fonction pour basculer l'état d'ouverture du menu
  // EN : Function to toggle the menu's open state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // FR : Rendu JSX du composant Navbar
  // EN : JSX rendering of the Navbar component
  return (
    <nav className="navbarSection">
      <section className="navbarContainer">
        {/* FR : Section contenant le logo et le texte associé */}
        {/* EN : Section containing the logo and associated text */}
        <div className="logoSection">
          <a href="#" className="logo">
            {/* FR : Affichage du logo avec une animation */}
            {/* EN : Displaying the logo with an animation */}
            <img src={logo} alt="Logo" className="spinningLogo" />
          </a>
          <p>C A R O U S E L</p>
        </div>
      
        {/* FR : Menu hamburger pour les petits écrans */}
        {/* EN : Hamburger menu for small screens */}
        <div 
          className={`hamburgerMenu ${isMenuOpen ? "open" : ""}`} 
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* FR : Liste des liens de navigation */}
        {/* EN : List of navigation links */}
        <ul className={`navbarMenu ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#accueil">Accueil</a></li> {/* FR: Lien vers Accueil / EN: Link to Home */}
          <li><a href="#concept">Concept</a></li> {/* FR: Lien vers Concept / EN: Link to Concept */}
          <li><a href="#legal">Mentions légales</a></li> {/* FR: Lien vers Mentions légales / EN: Link to Legal Mentions */}
        </ul>
      </section>
    </nav>
  );
}
