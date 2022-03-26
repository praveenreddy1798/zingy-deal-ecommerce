import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/products";
import { useAddToWishlist, useRemoveFromWishlist } from "../services";
import { getStrippedText, inWishlist } from "../utils";

export const Card = ({ product, cardType }) => {
  const {
    title,
    inCart,
    _id,
    originalPrice,
    discountedPrice,
    discountPercentage,
    deliveryCharge,
    inStock,
    arrivalType,
    rating,
    categoryName,
    image,
  } = product;
  const navigate = useNavigate();
  const { addToWishlist } = useAddToWishlist();
  const { removeFromWishlist } = useRemoveFromWishlist();
  const { productsDispatch, productsState } = useProducts();
  const { wishlist } = productsState;
  return (
    <div className="card" key={_id}>
      <div className="card-image-container h-100 w-100 position-relative flex-evenly">
        <img
          alt="product"
          onClick={() => navigate(`/product/${_id}`)}
          className="card-image pointer"
          src={image}
          loading="lazy"
        />
        <button
          onClick={() =>
            inWishlist(wishlist, _id)
              ? removeFromWishlist(`/api/user/wishlist/${_id}`, product)
              : addToWishlist(product)
          }
          className="btn btn-icon btn-icon-card position-absolute wishlist rounded flex-center"
        >
          <i
            className={
              inWishlist(wishlist, _id)
                ? "fa fa-heart fa-2x"
                : "fa fa-heart-o fa-2x"
            }
          ></i>
        </button>
        {arrivalType && (
          <h4 className="card-badge position-absolute">{arrivalType}</h4>
        )}
      </div>
      <div className="flex-vertical mg-sm row-gap-p5">
        <h4 className="text-align-left regular semi-bold">
          {getStrippedText(title, 20)}
        </h4>
        <h3 className="flex gap-p5 regular-text">
          <span className="primary-color">
            {rating}
            <i className="fa fa-star star"></i>
          </span>
        </h3>
        <div className="flex">
          <p className="bold regular-text mg-r-xsm">₹{discountedPrice}</p>
          <p className="regular-text bold line-through muted mg-r-xsm">
            ₹{originalPrice}
          </p>
          <p className="flex bold primary-color regular-text">
            {discountPercentage}% off
          </p>
        </div>
        <h4 className="flex regular">Ideal for {categoryName}</h4>

        <h4 className="flex regular">
          {deliveryCharge > 0 ? "Delivery charges applied" : "Free delivery"}
        </h4>
      </div>
      {!inStock && (
        <button
          className={
            cardType === "wishlist"
              ? "btn btn-secondary disabled w-100"
              : "btn btn-action disabled w-100"
          }
        >
          Out of Stock
        </button>
      )}
      {inStock && (
        <button
          onClick={() =>
            inCart
              ? navigate("/cart")
              : productsDispatch({
                  type: "ADD_TO_CART",
                  payload: { ...product },
                })
          }
          className={
            cardType === "wishlist"
              ? "btn btn-secondary w-100"
              : "btn btn-action w-100"
          }
        >
          {inCart ? "Go to Cart" : "Add to Cart"}
        </button>
      )}
    </div>
  );
};
