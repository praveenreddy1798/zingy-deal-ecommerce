export const ACCEPTED_ARRIVAL_TYPE_FILTERS = ["new", "sale"];
export const ACCEPTED_CATEGORY_FILTERS = ["men", "women", "kids"];

export const SOMETHING_WENT_WRONG =
  "Oops. Something went wrong. Please try again later.";

export const MESSAGES = {
  LOGIN: {
    SUCCESS: "Login successful",
    ERROR: "Invalid Credentials! Please try with registered email and password",
  },
  SIGNUP: {
    SUCCESS: "Signup successful",
    ERROR: SOMETHING_WENT_WRONG,
  },
  WISHLIST: {
    ADD: "Item added to wishlist",
    REMOVE: "Item removed from wishlist",
    ERROR: "Wishlist updation failed. Try again later",
  },
  CART: {
    ADD: "Item added to cart",
    REMOVE: "Item removed from cart",
    ERROR: "Cart updation failed. Try again later",
  },
  CART_QUANTITY: {
    INCREASED: "Cart quantity increased",
    DECREASED: "Cart quantity decreased",
  },
  CART_TO_WISHLIST: {
    ADD: "Item moved from cart to wishlist",
    ERROR:
      "Sorry, couldn't move product from cart to wishlist. Try again later",
  },
  WISHLIST_TO_CART: {
    ADD: "Item moved from wishlist to cart",
    ERROR:
      "Sorry, couldn't move product from wishlist to cart. Try again later",
  },
};
