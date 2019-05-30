import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute";
import App from "../App";
import Login from "./Login";
import ProductPage from "../components/ProductPage";
import styles from "../assets/styles/App.module.scss";
import ErrorBoundary from "../helpers/ErrorBoundary";

function Root({ store }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <div className={styles.appWrapper}>
            <div className={styles.appInside}>
              <Route exact path="/" component={App} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/products" component={ProductPage} />
            </div>
          </div>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default Root;
