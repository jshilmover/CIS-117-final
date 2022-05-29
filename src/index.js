import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
