export const setWishlistProducts = (state, action) => {
  return {
    ...state,
    wishlist: action.payload,
  };
};

export const inWishlist = (wishlist, id) =>
  wishlist.map((product) => product._id).includes(id);
