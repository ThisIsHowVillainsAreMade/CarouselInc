import "./Footer.scss"

export default function Footer() {
  const getCurrentYear = () => new Date().getFullYear();
  return (
    <section className="footerSection">
      <p>&copy; {getCurrentYear} Carousel Inc.</p>
    </section>
  );
}
