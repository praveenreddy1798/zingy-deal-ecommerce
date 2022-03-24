import { productsInitialState } from "../context/products";
import {
  ACCEPTED_ARRIVAL_TYPE_FILTERS,
  ACCEPTED_CATEGORY_FILTERS,
} from "./constants";
import { filterProductsByAppliedFilters } from "./index";

export const setProducts = (_, action) => {
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

export const setWishlistProducts = (state, action) => {
  const { wishlist } = action.payload;
  return {
    ...state,
    wishlist,
  };
};

export const setCartProducts = (state, action) => {
  const { cart } = action.payload;
  return {
    ...state,
    cart,
  };
};
