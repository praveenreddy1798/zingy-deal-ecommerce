import { productsInitialState } from "../context/products";
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
  const state = {
    ...productsInitialState,
    wishlist: productsState.wishlist,
    cart: productsState.cart,
    originalData: products,
    selectedCategoryFilters,
    selectedOtherFilters,
  };
  const filteredProducts = filterProductsByAppliedFilters({
    state,
  });
  return {
    ...state,
    originalData: products,
    products: filteredProducts,
  };
};

export const setSelectedProduct = (state, action) => {
  return {
    ...state,
    selectedProduct: action.payload,
  };
};
