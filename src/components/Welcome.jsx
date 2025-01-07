import "./Welcome.scss";
import GameMaster from "../assets/images/game_master_black_mask_dangerous__7cj9m50a7t2v6rvhlrd2_2.png";

export default function Welcome() {
  return (
    <section className="welcomeSection">
      <h1>C A R O U S E L</h1>
      <h2>Osez le jeu de votre vie !</h2>
      <h3>Tentez de remporter 1 million d&apos;euros !</h3>
      <img src={GameMaster} alt="Maître du Jeu" />
      <p>
        Parce que la vie est remplie d&apos;expériences qui nous font évoluer et
        que vous méritez de vous sentir vivant !
      </p>
    </section>
  );
}
