import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./context/products";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <Router>
        <App />
      </Router>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
