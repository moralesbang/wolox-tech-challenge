import React from "react";
import styles from "../assets/styles/Requeriments.module.scss";

function Requeriments() {
  return (
    <scroll-page id="requeriments">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Requerimientos</h1>
        <div>
          <div className={styles.item}>
            <div className={styles.bulletPistachio} />
            <div className={styles.description}>
              Estudiantes avanzados o recibidos de carreras del rubro
              informático, sistemas o electrónicos
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.bullet} />
            <div className={styles.description}>Inglés intermedio/avanzado</div>
          </div>

          <div className={styles.item}>
            <div className={styles.bulletBlue} />
            <div className={styles.description}>
              Conocimiento de metodologías ágiles (deseable)
            </div>
          </div>
        </div>
      </div>
    </scroll-page>
  );
}

export default Requeriments;
