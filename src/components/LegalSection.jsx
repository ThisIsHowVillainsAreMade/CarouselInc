import { useState, useEffect, useRef } from "react";
import "./legalSection.scss";

export default function Legal() {
  const [isExpanded, ] = useState(false); 
  const sectionRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 } 
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="legal"
      ref={sectionRef}
      className={`legalSection ${isExpanded ? "expanded" : "collapsed"}`}
    >
      <h2 className="animate-on-scroll">Mentions Légales</h2>
      <div className="legalContent">
        <p className="animate-on-scroll">
          Le Jeu du Carousel est organisé par <strong>Carousel Inc.</strong>, une société enregistrée et opérant sur une île privée située en dehors de toute juridiction étatique. Cette localisation garantit un environnement neutre et sécurisé pour l&apos;ensemble des participants.
        </p>

        <h3 className="animate-on-scroll">1. Conditions de Participation</h3>
        <ul className="animate-on-scroll">
          <li>La participation au Jeu du Carousel est strictement volontaire et réservée aux personnes majeures (18 ans et plus).</li>
          <li>Chaque participant doit signer un contrat d&apos;acceptation des risques avant de rejoindre l&apos;événement.</li>
          <li>Les participants doivent être en bonne santé physique et mentale, comme attesté par un certificat médical fourni avant leur arrivée.</li>
        </ul>

        <h3 className="animate-on-scroll">2. Règlement</h3>
        <ul className="animate-on-scroll">
          <li>Le Jeu du Carousel est un concours basé sur des épreuves physiques, mentales et stratégiques.</li>
          <li>Chaque participant accepte que l&apos;élimination d&apos;une épreuve entraîne son exclusion immédiate du jeu.</li>
          <li>L&apos;exclusion des jeux, tout comme l&apos;élimination des jeux entraîne le décès du joueur sans délais.</li>
          <li>La récompense finale s&apos;élève à <strong>30 000 000 €</strong>, attribuée au dernier participant encore en lice.</li>
          <li>Les règles spécifiques de chaque épreuve seront communiquées avant leur début.</li>
        </ul>

        <h3 className="animate-on-scroll">3. Responsabilité</h3>
        <ul className="animate-on-scroll">
          <li>En participant, chaque individu reconnaît être pleinement conscient des risques associés au jeu et dégage l&apos;organisateur de toute responsabilité en cas d&apos;accident, blessure ou autre incident.</li>
          <li>Carousel Inc. s&apos;engage à fournir un environnement sécurisé, mais ne peut être tenue responsable des actions ou décisions des participants durant le jeu.</li>
        </ul>

        <h3 className="animate-on-scroll">4. Confidentialité</h3>
        <ul className="animate-on-scroll">
          <li>Les participants acceptent que leur identité, image et performances puissent être utilisées à des fins promotionnelles ou médiatiques par Carousel Inc..</li>
          <li>Toute divulgation publique ou médiatique non autorisée concernant le jeu est strictement interdite.</li>
        </ul>

        <h3 className="animate-on-scroll">5. Localisation</h3>
        <p className="animate-on-scroll">
          Le Jeu du Carousel se déroule sur une île privée située dans les eaux internationales, hors de la juridiction de tout État. Cette localisation garantit la neutralité légale et permet aux participants de vivre une expérience unique sans interférence extérieure.
        </p>

        <h3 className="animate-on-scroll">6. Interdictions</h3>
        <ul className="animate-on-scroll">
          <li>Toute tentative de tricherie, sabotage ou comportement mettant en danger les autres participants entraînera une exclusion immédiate sans compensation.</li>
          <li>Les armes, substances illicites ou tout autre objet dangereux sont strictement interdits.</li>
        </ul>

        <h3 className="animate-on-scroll">7. Clause Finale</h3>
        <p className="animate-on-scroll">
          En acceptant de participer au Jeu du Carousel, chaque individu renonce à toute poursuite légale contre Carousel Inc. ou ses affiliés en lien avec sa participation au jeu. Les décisions de l&apos;organisation sont définitives et sans appel.
        </p>
      </div>
    </section>
  );
}
