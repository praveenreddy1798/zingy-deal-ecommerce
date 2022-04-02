import { useNavigate } from "react-router-dom";
import { useProducts, useAuth } from "../context";
import {
  useRemoveFromCart,
  useMoveCartToWishlist,
  useHandleCartQuantity,
} from "../services";
import { getStrippedText, inWishlist } from "../utils";

export const CartProduct = ({ product }) => {
  const {
    title,
    _id,
    originalPrice,
    discountedPrice,
    discountPercentage,
    image,
    rating,
    quantity,
  } = product;
  const navigate = useNavigate();
  const {
    auth: { isAuth },
  } = useAuth();
  const {
    productsState: { wishlist },
  } = useProducts();
  const { removeFromCart } = useRemoveFromCart();
  const { moveCartToWishlist } = useMoveCartToWishlist();
  const { handleCartQuantity } = useHandleCartQuantity();
  const wishlisted = inWishlist(wishlist, _id);
  return (
    <div class="card horizontal-card flex bg-white">
      <div class="card-image-container flex-evenly">
        <img
          class="card-image pointer"
          src={image}
          alt="cart-product"
          loading="lazy"
          onClick={() => navigate(`/products/${_id}`)}
        />
      </div>
      <div class="mg-md flex-vertical justify-between">
        <div class="w-100">
          <h4 className="text-align-left regular semi-bold">
            {getStrippedText(title, 20)}
          </h4>
          <h4 className="flex gap-p5 regular-text mg-t-xsm">
            <span className="primary-color">
              {rating}
              <i className="fa fa-star star"></i>
            </span>
          </h4>
          <div class="flex align-center mg-t-xsm">
            <p class="bold mg-r-sm regular-text">₹{discountedPrice}</p>
            <p class="regular-text line-through muted mg-r-sm">
              ₹{originalPrice}
            </p>
            <p class="flex regular-text bold primary-color">
              {discountPercentage}% off
            </p>
          </div>
          <div class="flex align-center mg-t-sm quantity-section">
            <h4 class="regular-dark mg-r-xsm">Quantity</h4>
            <button
              class="mg-r-xsm"
              onClick={() =>
                quantity > 1 && handleCartQuantity(_id, "decrement")
              }
            >
              <div class="decrease-item rounded secondary-color border-secondary-dark">
                -
              </div>
            </button>
            <div class="quantity border-radius-sm border-secondary-dark pd-xxsm">
              {quantity}
            </div>
            <button onClick={() => handleCartQuantity(_id, "increment")}>
              <div class="increase-item rounded secondary-color border-secondary-dark mg-l-xsm">
                +
              </div>
            </button>
          </div>
        </div>
        <div>
          <div>
            <button
              onClick={() => removeFromCart(`/api/user/cart/${_id}`, product)}
              class="btn btn-secondary w-100 flex-grow-1 mg-t-xsm"
            >
              Remove from Cart
            </button>
            <button
              onClick={() =>
                isAuth
                  ? !wishlisted
                    ? moveCartToWishlist(product)
                    : navigate("/wishlist")
                  : navigate("/login")
              }
              class="btn btn-action outline outline-action w-100 flex-grow-1 mg-t-xsm"
            >
              {wishlisted ? "Go to Wishlist" : "Move to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
