import { Route, Routes } from "react-router-dom";
import "./index.css";
import ProductsListing from "./containers/ProductsListing";
import Home from "./containers/Home";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/products" element={<ProductsListing />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
