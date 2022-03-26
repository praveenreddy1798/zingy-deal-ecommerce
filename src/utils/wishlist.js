export const setWishlistProducts = (state, action) => {
  return {
    ...state,
    wishlist: action.payload,
  };
};

export const inWishlist = (wishlist, id) =>
  wishlist.map((product) => product._id).includes(id);

export const wishlistManipulation = (
  wishlisted,
  product,
  addToWishlistFn,
  removeFromWishlistFn = null
) => {
  const { _id: id } = product;
  return wishlisted
    ? removeFromWishlistFn(`/api/user/wishlist/${id}`, product)
    : addToWishlistFn(product);
};
