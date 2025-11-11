import React, { useState } from "react";
import logoMenu from "../assets/menu-icono-blanco.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div>
          <h1>Mi Portfolio</h1>
        </div>

        <input
          type="checkbox"
          id="check"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />

        <label htmlFor="check" className="checkbtn">
          <img className="logo_img" src={logoMenu} alt="menu_responsive" />
        </label>

        <ul className={menuOpen ? "open" : ""}>
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
