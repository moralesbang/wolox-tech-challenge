import React, { Component } from "react";
import Navbar from "./components/Navbar";
import styles from "./assets/styles/App.module.scss";
import workingMan from "./assets/images/dribbble2.png";

class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <div className="text-black">
          <Navbar />
          <scroll-container>
            <scroll-page id="#welcome">
              <div className={styles.homeSection}>
                <p className={styles.welcomeMessage}>
                  Bienvenido a tu <br />
                  <b>Entrevista Técnica</b> en <br />
                  <span className={styles.nameBrand}>Wolox</span>
                </p>
                <img
                  src={workingMan}
                  alt="People working"
                  className={styles.welcomeImage}
                />
              </div>
            </scroll-page>

            <scroll-page id="#technologies">
              <div className={styles.homeSection}>
                <p className={styles.techsMessage}>
                  Estamos buscando <br />
                  para incoporar gente <br />
                  increíble para estas <br />
                  tecnologías
                </p>
                <div className={styles.techsList}>
                  <span className={styles.angular}>Angular</span>
                  <div class="left: 2.5rem">
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

              <div className={styles.companySection}>
                <div className={styles.twitter}>
                  <div className={styles.followersCount}>
                    <span className="text-pistachio">350 +</span>
                    <span className="text-blue"> Woloxers</span>
                  </div>

                  <div className="content-centered">
                    <svg
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className={styles.twitterIcon}
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g fill="#FFFFFF">
                          <path
                            d="M19.9554745,3.91978102 C19.2212409,4.24540146 18.4321898,4.46547445 17.6040146,4.56445255 C18.4493431,4.05773723 19.0984672,3.25540146 19.4041606,2.29941606 C18.6131387,2.76854015 17.7369343,3.10927007 16.8043796,3.29291971 C16.0575182,2.49722628 14.9935036,2 13.8159854,2 C11.5548905,2 9.72175182,3.83306569 9.72175182,6.0940146 C9.72175182,6.41489051 9.7580292,6.72737226 9.82781022,7.0270073 C6.42518248,6.85627737 3.40846715,5.22635036 1.38919708,2.74941606 C1.03678832,3.35408759 0.834890511,4.05737226 0.834890511,4.80766423 C0.834890511,6.2280292 1.55773723,7.48116788 2.65627737,8.21532847 C1.98510949,8.19408759 1.35386861,8.00992701 0.801824818,7.70328467 C0.801532847,7.72036496 0.801532847,7.73751825 0.801532847,7.75474453 C0.801532847,9.73839416 2.21277372,11.3931387 4.08569343,11.7691971 C3.74211679,11.8627737 3.38043796,11.9127737 3.0070073,11.9127737 C2.74321168,11.9127737 2.48671533,11.8871533 2.23678832,11.8393431 C2.75773723,13.4659124 4.26970803,14.649562 6.06124088,14.6826277 C4.66007299,15.7806569 2.89474453,16.4351825 0.976642336,16.4351825 C0.64620438,16.4351825 0.320291971,16.4158394 0,16.3780292 C1.81182482,17.539635 3.96386861,18.2173723 6.27591241,18.2173723 C13.8064234,18.2173723 17.9243796,11.9789051 17.9243796,6.56875912 C17.9243796,6.39124088 17.920438,6.21467153 17.9125547,6.03912409 C18.7124088,5.46189781 19.4065693,4.74080292 19.9554745,3.91978102"
                            id="Fill-1"
                          />
                        </g>
                      </g>
                    </svg>

                    <span className={styles.account}>@Wolox</span>
                  </div>

                  <a
                    href="https://twitter.com/wolox"
                    className={styles.btnFollowUS}
                  >
                    Siguenos
                  </a>
                </div>
                <div class={styles.workWithUs}>
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
            </scroll-page>

            <scroll-page id="#benefits" />
          </scroll-container>
        </div>
      </div>
    );
  }
}

export default App;
