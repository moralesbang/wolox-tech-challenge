import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import rootReducer from "./reducers/index";
import { createStore } from "redux";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Root store={createStore(rootReducer)} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
