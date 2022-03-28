import { productsInitialState } from "../context/products";
import { cartReducer } from "./cart";
import {
  ACCEPTED_ARRIVAL_TYPE_FILTERS,
  ACCEPTED_CATEGORY_FILTERS,
} from "./index";
import { filterProductsByAppliedFilters } from "./index";

export const setProducts = (productsState, action) => {
  const { products, searchParamKey, searchParamValue } = action.payload;
  let selectedCategoryFilters = [];
  let selectedOtherFilters = [];

  if (
    searchParamKey === "categoryName" &&
    ACCEPTED_CATEGORY_FILTERS.includes(searchParamValue)
  ) {
    selectedCategoryFilters.push(searchParamValue);
  } else if (
    searchParamKey === "arrivalType" &&
    ACCEPTED_ARRIVAL_TYPE_FILTERS.includes(searchParamValue)
  ) {
    selectedOtherFilters.push(searchParamValue);
  }
  const { cartItems, wishlist, cart } = productsState;
  const state = {
    ...productsInitialState,
    cartItems,
    wishlist,
    cart,
    originalData: products,
    selectedCategoryFilters,
    selectedOtherFilters,
  };
  const filteredProducts = filterProductsByAppliedFilters({
    state,
  });
  return {
    ...state,
    products: filteredProducts,
  };
};

export const setSelectedProduct = (state, action) => {
  return {
    ...state,
    selectedProduct: action.payload,
  };
};

export const setCartWishlistProducts = (state, action) => {
  const { cart, wishlist } = action.payload;
  const { totalPrice, totalDiscount, totalDeliveryCharge, cartItems } =
    cart.reduce(cartReducer, {
      totalPrice: 0,
      totalDiscount: 0,
      totalDeliveryCharge: 0,
      cartItems: 0,
    });
  return {
    ...state,
    cart,
    wishlist,
    cartItems,
    totalPrice,
    totalDiscount,
    totalDeliveryCharge,
  };
};
