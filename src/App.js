import { Route, Routes } from "react-router-dom";
import "./index.css";
import ProductsListing from "./containers/ProductsListing";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/products" element={<ProductsListing />} />
      </Routes>
    </div>
  );
}
