export const setCartProducts = (state, action) => {
    return {
      ...state,
      cart: action.payload,
    };
  };