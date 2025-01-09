// FR : Importation des hooks React nécessaires (useState, useEffect, useRef)
// EN : Importing necessary React hooks (useState, useEffect, useRef)
import { useState, useEffect, useRef } from "react";

// FR : Importation des styles spécifiques pour la section légale
// EN : Importing specific styles for the legal section
import "./legalSection.scss";

// FR : Définition du composant fonctionnel Legal
// EN : Defining the functional component Legal
export default function Legal() {
  // FR : État pour gérer l'expansion de la section (non utilisé ici)
  // EN : State to manage the expansion of the section (not used here)
  const [isExpanded] = useState(false);

  // FR : Référence pour accéder au DOM de la section légale
  // EN : Reference to access the DOM of the legal section
  const sectionRef = useRef(null);

  // FR : Effet pour ajouter une animation lors du défilement dans la vue
  // EN : Effect to add animation when scrolling into view
  useEffect(() => {
    // FR : Création d'un observateur d'intersection pour détecter les éléments visibles
    // EN : Creating an intersection observer to detect visible elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // FR : Ajout de la classe "visible" lorsque l'élément est dans le champ de vision
            // EN : Adding the "visible" class when the element is in the viewport
            entry.target.classList.add("visible");
          } else {
            // FR : Suppression de la classe "visible" lorsque l'élément sort du champ de vision
            // EN : Removing the "visible" class when the element is out of the viewport
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 } // FR/EN: Seuil de visibilité à 20%
    );

    // FR : Sélection de tous les éléments avec la classe "animate-on-scroll"
    // EN : Selecting all elements with the class "animate-on-scroll"
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    // FR : Nettoyage de l'observateur lors du démontage du composant
    // EN : Cleaning up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="legal"
      ref={sectionRef}
      className={`legalSection ${isExpanded ? "expanded" : "collapsed"}`}
    >
      {/* FR : Titre principal avec animation */}
      {/* EN : Main title with animation */}
      <h2 className="animate-on-scroll">Mentions Légales</h2>
      
      {/* FR : Contenu détaillé des mentions légales */}
      {/* EN : Detailed content of legal mentions */}
      <div className="legalContent">
        <p className="animate-on-scroll">
          Le Jeu du Carousel est organisé par <strong>Carousel Inc.</strong>, une société enregistrée et opérant sur une île privée située en dehors de toute juridiction étatique. Cette localisation garantit un environnement neutre et sécurisé pour l&apos;ensemble des participants.
        </p>

        {/* FR/EN: Sous-sections avec titres et listes */}
        <h3 className="animate-on-scroll">1. Conditions de Participation</h3>
        <ul className="animate-on-scroll">
          <li>La participation est réservée aux personnes majeures (18 ans et plus).</li>
          <li>Un contrat d&apos;acceptation des risques doit être signé.</li>
          <li>Un certificat médical attestant la bonne santé est requis.</li>
        </ul>

        <h3 className="animate-on-scroll">2. Règlement</h3>
        <ul className="animate-on-scroll">
          <li>Le jeu comporte des épreuves physiques, mentales et stratégiques.</li>
          <li>L&apos;élimination entraîne l&apos;exclusion immédiate.</li>
          <li>L&apos;exclusion entraîne le décès immédiat du participant.</li>
          <li>La récompense finale est de 30 000 000 €.</li>
        </ul>

        <h3 className="animate-on-scroll">3. Responsabilité</h3>
        <ul className="animate-on-scroll">
          <li>Les participants acceptent les risques associés au jeu.</li>
          <li>Carousel Inc. fournit un environnement sécurisé mais décline toute responsabilité.</li>
        </ul>

        {/* Autres sections similaires */}
        <h3 className="animate-on-scroll">4. Confidentialité</h3>
        <ul className="animate-on-scroll">
          <li>Les performances peuvent être utilisées à des fins promotionnelles.</li>
          <li>Toute divulgation non autorisée est interdite.</li>
        </ul>

        <h3 className="animate-on-scroll">5. Localisation</h3>
        <p className="animate-on-scroll">
          Le jeu se déroule sur une île privée hors juridiction étatique.
        </p>

        <h3 className="animate-on-scroll">6. Interdictions</h3>
        <ul className="animate-on-scroll">
          <li>Tricherie ou sabotage entraînent une exclusion immédiate.</li>
          <li>Les armes ou substances illicites sont interdites.</li>
        </ul>

        <h3 className="animate-on-scroll">7. Clause Finale</h3>
        <p className="animate-on-scroll">
          En participant, chaque individu renonce à toute poursuite légale.
        </p>
      </div>
    </section>
  );
}
