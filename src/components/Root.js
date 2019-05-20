import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute";
import App from "../App";
import Navbar from "../components/Navbar";
import Login from "./Login";
import ProductPage from "../components/ProductPage";
import styles from "../assets/styles/App.module.scss";

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.appWrapper}>
          <div className={styles.appInside}>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/products" component={ProductPage} />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default Root;
