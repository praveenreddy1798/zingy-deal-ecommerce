import { Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Home,
  ProductsListing,
  Login,
  Signup,
  Wishlist,
  ProductDetail,
  Cart,
} from "./containers";
import { Message, PrivateRoute } from "./components";

export default function App() {
  return (
    <div className="App">
      <Message />
      <Routes>
        <Route exact path="/products" element={<ProductsListing />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route exact path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
