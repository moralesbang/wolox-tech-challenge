import React from "react";
import styles from "../assets/styles/Thanks.module.scss";
import logo from "../assets/icons/wolox-black-logo.svg";

function Thanks() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>
        Gracias por
        <span className="text-blue"> completar el ejercicio</span>
      </p>
      <p className={styles.subTitle}>Te invitamos a ver más información</p>
      <a href="https://www.wolox.com.ar/" className={styles.btnKnowMore}>
        Conocer más
      </a>
      <img src={logo} alt="Wolox's logo" className={styles.footerLogo} />
    </div>
  );
}

export default Thanks;
