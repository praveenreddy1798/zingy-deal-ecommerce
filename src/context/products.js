import { createContext, useContext, useReducer } from "react";
import { productsReducer } from "../reducers";

const initialState = {
  originalData: [],
  products: [],
  wishlist: [],
  cart: [],
  cartItems: 0,
  totalPrice: 0,
  totalDiscount: 0,
  totalDeliveryCharge: 0,
  selectedCategoryFilters: [],
  sortByPrice: "low_to_high",
  selectedRating: 5,
  selectedOtherFilters: [],
};

const ProductsContext = createContext(initialState);

const ProductsProvider = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialState
  );
  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
