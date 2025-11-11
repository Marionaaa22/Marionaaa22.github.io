import React, { useState } from "react";
import logoMenu from "../assets/menu-icono-blanco.png";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>Mi Portfolio</h1>
        </div>

        {/* Botón menú para móvil */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={logoMenu} alt="menu" />
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobreMi">Sobre mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#formacion">Formación</a></li>
        </ul>
      </nav>
    </header>
  );
}
