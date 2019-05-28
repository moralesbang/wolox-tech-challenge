import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("userData") ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", from: props.location }} />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType
};

export default PrivateRoute;
