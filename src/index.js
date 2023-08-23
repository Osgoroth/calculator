// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// // Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// react 17.0.2

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./fonts/Digital7Mono.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
