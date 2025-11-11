import React from "react";
import perfil from "../assets/img_perfil.jpg"; // Ajusta la ruta

export default function Home() {
  return (
    <section className="home fade-in" id="home">
      <div className="img_cv" id="img_cv">
        <img src={perfil} alt="foto_CV" />
      </div>
      <div className="info_home">
        <h2>¡Hola! Soy</h2>
        <h1>Mariona Claros Páez</h1>
        <h3>Técnica superior en Desarrolladora de Aplicaciones Multiplataforma</h3>
        <p>Trabajando actualmente en una consultora en Mataró, participando en proyectos con Liferay.</p>
      </div>
      <div className="contactos_home">
        <a href="https://www.linkedin.com/in/mariona-claros-a0552a2b1/">
          <img className="contactos-img-home" src="../assets/linkedin_contactos.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Marionaaa22">
          <img className="contactos-img-home" src="../assets/github_contactos.png" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/marionaa.claez/">
          <img className="contactos-img-home" src="../assets/instagram_contactos.png" alt="Instagram" />
        </a>
      </div>
    </section>
  );
}
