import React from "react";
import peopleImg from "../assets/images/people.png";
import styles from "../assets/styles/Welcome.module.scss";

function Welcome() {
  return (
    <scroll-page id="welcome">
      <div className={styles.wrapper}>
        <p className={styles.info}>
          Bienvenido a tu <b>Entrevista Técnica</b> en
          <span className={styles.brand}> Wolox</span>
        </p>
        <img src={peopleImg} alt="People working" className={styles.image} />
      </div>
    </scroll-page>
  );
}

export default Welcome;
