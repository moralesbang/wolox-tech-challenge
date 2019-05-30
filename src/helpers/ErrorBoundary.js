import React, { Component } from "react";
import racoon from "../assets/images/racoon.png";
import styles from "../assets/styles/ErrorBoundary.module.scss";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <img src={racoon} alt="Something went wrong" />
          <h2>
            Oops! <span style={{ fontWeight: 500 }}>Algo ha ido mal</span>
          </h2>
          <p className={styles.suggestion}>
            Aguanta hasta que tengamos el error arreglado. También puedes
            actualizar o intentar más tarde
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
