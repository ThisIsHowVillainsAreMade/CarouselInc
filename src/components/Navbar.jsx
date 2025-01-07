// import "./Navbar.scss";
// import logo from "../assets/images/minimalistlogo.png";

// export default function Navbar() {
//   return (
//     <nav className="navbarSection">
//       <section className="navbarContainer">
//         <div className="logoSection">
//           <a href="/" className="logo">
//             <img src={logo} alt="Logo" />
//           </a>
//           <p>C A R O U S E L</p>
//         </div>
//         <ul className="navbarMenu">
//           <li>
//             <a href="#home">Accueil</a>
//           </li>
//           <li>
//             <a href="#about">À propos</a>
//           </li>
//           <li>
//             <a href="#contact">Mentions légales</a>
//           </li>
//         </ul>
//       </section>
//     </nav>
//   );
// }

import "./Navbar.scss";
import logo from "../assets/images/minimalistlogo.png";

export default function Navbar() {
  return (
    <nav className="navbarSection">
      <section className="navbarContainer">
        <div className="logoSection">
          <a href="/" className="logo">
            <img src={logo} alt="Logo" className="spinningLogo" />
          </a>
          <p>C A R O U S E L</p>
        </div>
        <ul className="navbarMenu">
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

