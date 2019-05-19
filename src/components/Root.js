import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute";
import App from "../App";
import Login from "./Login";
import FilteredProductList from "../components/FilteredProductList";

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/products" component={FilteredProductList} />
      </Router>
    </Provider>
  );
}

export default Root;
