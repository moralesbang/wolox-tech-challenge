import React, { Component } from "react";
import Navbar from "./components/Navbar";
import styles from "./assets/styles/App.module.scss";
import Benefits from "./components/Benefits";
import Requeriments from "./components/Requeriments";
import Welcome from "./components/Welcome";
import Technologies from "./components/Technologies";
import Mission from "./components/Mission";
import Thanks from "./components/Thanks";

class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <div className={styles.appInside}>
          <Navbar />
          <scroll-container>
            <Welcome />
            <Technologies />
            <Mission />
            <Benefits />
            <hr className={styles.divider} />
            <Requeriments />
          </scroll-container>

          <Thanks />
        </div>
      </div>
    );
  }
}

export default App;
