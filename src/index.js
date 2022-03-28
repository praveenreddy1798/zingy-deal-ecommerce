import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider, AuthProvider, ProductsProvider } from "./context";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <ToastProvider>
          <Router>
            <App />
          </Router>
        </ToastProvider>
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
