import { Route, Routes } from "react-router-dom";
import "./index.css";
import { Home, ProductsListing, Login, Signup, Wishlist } from "./containers";
import { Message } from "./components";

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
