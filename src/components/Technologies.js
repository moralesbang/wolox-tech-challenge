import React from "react";
import styles from "../assets/styles/Technologies.module.scss";

function Technologies() {
  return (
    <scroll-page id="technologies">
      <div className={styles.wrapper}>
        <p className={styles.info}>
          Estamos buscando <br />
          para incoporar gente <br />
          increíble para estas <br />
          tecnologías
        </p>
        <div className={styles.list}>
          <span className={styles.angular}>Angular</span>
          <div>
            <span className={styles.react}>React</span>
            <span className={styles.node}>Node</span>
            <span className={styles.vue}>Vue.js</span>
          </div>
          <div className={styles.topSpacing}>
            <span className={styles.java}>Java</span>
            <span className={styles.rails}>Rails</span>
          </div>
          <div className={styles.group3}>
            <span className={styles.ios}>iOS</span>
            <span className={styles.native}>React Native</span>
          </div>
          <div className={styles.topSpacing}>
            <span className={styles.netcore}>Net Core</span>
            <span className={styles.android}>Android</span>
          </div>
        </div>
      </div>
    </scroll-page>
  );
}

export default Technologies;
