import React, { Component } from "react";
import styles from "../assets/styles/Navbar.module.scss";
import logo from "../assets/images/logo-wolox-color.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { menuExpanded: false };
  }

  componentWillMount() {}

  handleClick() {
    this.setState({ menuExpanded: !this.state.menuExpanded });
  }

  linksClass() {
    let extra =
      this.state.menuExpanded || window.innerWidth >= 1024 ? "" : " hidden";
    return styles.links + extra;
  }

  render() {
    return (
      <nav className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Wolox's logo" className={styles.logo} />
        </div>
        <div className={styles.btnMenuWrapper}>
          <button className={styles.btnMenu} onClick={this.handleClick}>
            <svg
              className={styles.menuIcon}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={this.linksClass()}>
          <div className={styles.linksInside}>
            <a href="#welcome" className={styles.item}>
              Inicio
            </a>
            <a href="#technologies" className={styles.item}>
              Tecnologías
            </a>
            <a href="#benefits" className={styles.item}>
              Beneficios
            </a>
            <a href="#requeriments" className={styles.item}>
              Requerimientos
            </a>
            <a href="/login" className={styles.btnLogin}>
              Login
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
