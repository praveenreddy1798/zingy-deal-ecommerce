export const setProducts = (state, action) => {
  const products = [...action.payload];
  return {
    ...state,
    originalData: products,
    products,
  };
};