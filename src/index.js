import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./context/products";
import App from "./App";
import { makeServer } from "./server";
import { ToastProvider } from "./context/toast";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <ProductsProvider>
        <Router>
          <App />
        </Router>
      </ProductsProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
