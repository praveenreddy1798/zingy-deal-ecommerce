export { useLogin } from "./Auth/login";
export { useSignup } from "./Auth/signup";
export { useQueryAllProducts, useQueryProductById } from "./products";
export {
  useQueryWishlistProducts,
  useAddToWishlist,
  useRemoveFromWishlist,
  useMoveWishlistToCart,
} from "./wishlist";

export {
  useQueryCartProducts,
  useAddToCart,
  useRemoveFromCart,
  useMoveCartToWishlist,
  useHandleCartQuantity,
} from "./cart";
