import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/store/configureStore";
import "./fonts/bencoleng-webfont.ttf";
import "./scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
