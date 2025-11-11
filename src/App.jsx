// src/App.jsx
import React from "react";

// Importa tus componentes
import Header from "./components/Header";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Formacion from "./components/Formacion";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <SobreMi />
      <Proyectos />
      <Habilidades />
      <Formacion />
      <Footer />
    </>
  );
}
