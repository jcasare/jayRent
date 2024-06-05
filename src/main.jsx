import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import "./index.css";
import AppRoutes from "./AppRoutes.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>
  //</React.StrictMode>
);
