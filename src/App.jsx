// import { useState } from 'react'
import "./App.css";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Button from "./components/Button";
import About from "./components/About";
import LegalSection from "./components/LegalSection"

function App() {
  return (
    <>
      <Navbar />
      <main className="mainContent">
        <Welcome />
        <Button />
        <About />
        <LegalSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
