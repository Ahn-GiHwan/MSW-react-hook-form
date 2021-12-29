import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";

import "./css/css.css";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
