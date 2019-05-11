import React from "react";
import styles from "../assets/styles/Navbar.module.scss";
import logo from "../assets/images/logo-wolox-color.svg";

function Navbar() {
  return (
    <nav className={styles.navigation}>
      <div>
        <img src={logo} alt="Wolox's logo" className={styles.brandLogo} />
      </div>
      <div>
        <a href="/" className={styles.navItem}>
          Inicio
        </a>
        <a href="#technologies" className={styles.navItem}>
          Tecnologías
        </a>
        <a href="#benefits" className={styles.navItem}>
          Beneficios
        </a>
        <a href="#requeriments" className={styles.navItem}>
          Requerimientos
        </a>
        <a href="/login" className={styles.btnLogin}>
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
