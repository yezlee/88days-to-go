import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import firebase from "firebase";
import { BrowserRouter } from "react-router-dom";
console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
