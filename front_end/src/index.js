import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Router } from "react-router-dom";
import { AuthContext_Component } from "./store/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContext_Component>
      <App />
    </AuthContext_Component>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
