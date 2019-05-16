import React from "react";
import styles from "../assets/styles/Benefits.module.scss";
import time from "../assets/icons/time.svg";
import desk from "../assets/icons/desk.svg";
import meeting from "../assets/icons/meeting.svg";
import fruit from "../assets/icons/fruit.svg";
import laptop from "../assets/icons/laptop.svg";
import brain from "../assets/icons/brain.svg";

function BenefitsList() {
  return (
    <scroll-page id="benefits">
      <div className={styles.wrapper}>
        <p className={styles.title}>
          Entre los beneficios que ofrecemos se encuentran
          <span className="text-blue"> ;)</span>
        </p>

        <div className={styles.list}>
          <div className={styles.item}>
            <img src={time} alt="" />
            <p>Flexibilidad Horaria</p>
          </div>
          <div className={styles.item}>
            <img src={desk} alt="" />
            <p>Home Office</p>
          </div>

          <div className={styles.item}>
            <img src={meeting} alt="" />
            <p>Capacitaciones y workshops</p>
          </div>

          <div className={styles.item}>
            <img src={fruit} alt="" />
            <p>Snacks, frutas y bebidas gratis</p>
          </div>

          <div className={styles.item}>
            <img src={laptop} alt="" />
            <p>Semana Remota</p>
          </div>

          <div className={styles.item}>
            <img src={brain} alt="" />
            <p>Trabajar en las últimas tecnologías</p>
          </div>
        </div>
      </div>
    </scroll-page>
  );
}

export default BenefitsList;
