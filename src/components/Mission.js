import React from "react";
import styles from "../assets/styles/Mission.module.scss";
import twitterIcon from "../assets/icons/twitter.svg";

function Mission() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.twitter}>
        <div className={styles.followersCount}>
          <span className="text-pistachio">350 +</span>
          <span className="text-blue"> Woloxers</span>
        </div>

        <div className="flex-center">
          <img
            src={twitterIcon}
            alt="Twitter's Icon"
            className={styles.twIcon}
          />
          <span className={styles.account}>@Wolox</span>
        </div>

        <a href="https://twitter.com/wolox" className={styles.btnFollowUS}>
          Siguenos
        </a>
      </div>
      <div className={styles.info}>
        <p>
          Trabajamos para <br />
          <b>
            <span className="text-blue">convertir</span>
          </b>
          <b>
            <span className="text-pistachio"> ideas </span>
          </b>
          en <br />
          productos
        </p>
      </div>
    </div>
  );
}

export default Mission;
