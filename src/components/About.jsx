import { useState, useEffect } from "react";
import "./About.scss";
import Dices from "../assets/images/dices_dbyd8j0oz8721dfofxhi_2.png";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.querySelector(".aboutSection");
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`aboutSection ${isVisible ? "visible" : ""}`}>
      <div className="imageContainer">
        <img src={Dices} alt="dés" />
      </div>
      <div className="textContainer">
        <h2>CONCEPT</h2>
        <h3>Oserez-vous relever le défi ultime ?</h3>
        <p>
          <strong>Le Jeu du Carousel</strong> est une expérience hors du commun où seuls les plus audacieux pourront prétendre à la récompense ultime :{" "}
          <strong>1 million d&apos;euros</strong>.
          <br />
          <br />
          Dans ce jeu, chaque épreuve mettra à l&apos;épreuve votre intelligence, votre courage et votre capacité à survivre face aux défis les plus extrêmes.
          <br />
          Ce n&apos;est pas seulement un jeu, c&apos;est une opportunité unique de changer votre vie à jamais. Mais attention, ici, chaque décision compte, et seules la détermination et la volonté de gagner vous mèneront jusqu&apos;au bout.
          <br />
          Êtes-vous prêt à tout risquer pour décrocher le jackpot ?
          <br />
          Rejoignez-nous et montrez que vous êtes fait pour le Carousel !
        </p>
      </div>
    </section>
  );
}
