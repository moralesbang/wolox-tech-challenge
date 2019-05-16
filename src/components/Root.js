import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import Login from "./Login";

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </Router>
    </Provider>
  );
}

export default Root;
