import { Route, Routes } from "react-router-dom";
import "./index.css";
import ProductsListing from "./containers/ProductsListing";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Wishlist from "./containers/Wishlist";
import { Message } from "./components/Message";

export default function App() {
  return (
    <div className="App">
      <Message />
      <Routes>
        <Route exact path="/products" element={<ProductsListing />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/cart" />
      </Routes>
    </div>
  );
}
