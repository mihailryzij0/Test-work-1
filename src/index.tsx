import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={}>
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

