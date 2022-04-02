import {
  sortProductsByPrice,
  filterProductsByRating,
  filterProductsByOtherFilters,
  filterProductsByCategory,
  clearProductsFilter,
  setProducts,
  searchByProductName,
  setWishlistProducts,
  setCartProducts,
  setSelectedProduct,
  setCartWishlistProducts,
} from "../utils";

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return setProducts(state, action);
    case "SET_SELECTED_PRODUCT":
      return setSelectedProduct(state, action);
    case "SET_CART_WISHLIST_PRODUCTS":
      return setCartWishlistProducts(state, action);
    case "SET_WISHLIST_PRODUCTS":
      return setWishlistProducts(state, action);
    case "SET_CART_PRODUCTS":
      return setCartProducts(state, action);
    case "SORT_PRODUCTS_BY_PRICE":
      return sortProductsByPrice(state, action);
    case "FILTER_PRODUCTS_BY_RATING":
      return filterProductsByRating(state, action);
    case "FILTER_PRODUCTS_BY_CATEGORY":
      return filterProductsByCategory(state, action);
    case "FILTER_PRODUCTS_BY_OTHER_FILTERS":
      return filterProductsByOtherFilters(state, action);
    case "SEARCH_BY_PRODUCT_NAME":
      return searchByProductName(state, action);
    case "CLEAR_PRODUCTS_FILTER":
      return clearProductsFilter(state, action);
    default:
      return state;
  }
};
