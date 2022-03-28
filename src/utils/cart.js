export const cartReducer = (accumulatedDetails, currentProduct) => {
  const { totalPrice, totalDiscount, totalDeliveryCharge, cartItems } =
    accumulatedDetails;
  const { originalPrice, discountedPrice, deliveryCharge, quantity } =
    currentProduct;
  return {
    totalPrice: totalPrice + originalPrice * quantity,
    totalDiscount: totalDiscount + (originalPrice - discountedPrice) * quantity,
    totalDeliveryCharge: totalDeliveryCharge + deliveryCharge * quantity,
    cartItems: cartItems + quantity,
  };
};

export const setCartProducts = (state, action) => {
  const cart = action.payload;

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
    totalPrice,
    totalDiscount,
    totalDeliveryCharge,
    cartItems,
  };
};

export const inCart = (cart, id) =>
  cart.map((product) => product._id).includes(id);
