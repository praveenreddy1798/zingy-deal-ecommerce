import { createContext, useContext, useReducer } from "react";
import { productsReducer } from "../reducers";

export const productsInitialState = {
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

const ProductsContext = createContext(productsInitialState);

const ProductsProvider = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    productsInitialState
  );
  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { useProducts, ProductsProvider };
