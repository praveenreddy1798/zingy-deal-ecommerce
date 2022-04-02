import { useNavigate } from "react-router-dom";
import { useProducts, useAuth } from "../context";
import { useAddToWishlist, useAddToCart } from "../services";
import { inWishlist, wishlistManipulation, inCart } from "../utils";
export const ProductDetailSection = ({ product }) => {
  const navigate = useNavigate();
  const {
    auth: { isAuth },
  } = useAuth();
  const { addToWishlist } = useAddToWishlist();
  const { addToCart } = useAddToCart();
  const {
    productsState: { wishlist, cart },
  } = useProducts();
  const {
    title,
    _id,
    originalPrice,
    discountedPrice,
    discountPercentage,
    deliveryCharge,
    inStock,
    rating,
    categoryName,
    deliveryDuration,
    image,
  } = product;
  const wishlisted = inWishlist(wishlist, _id);
  const inCartProduct = inCart(cart, _id);
  return (
    <div className="flex-center pd-md h-100">
      <div className="flex-center gap-1 bg-white border-light-grey">
        <img
          className="product-detail-image"
          src={image}
          alt="product"
          loading="lazy"
        />
        <div className="flex-vertical justify-between product-detail-section pd-md">
          <div>
            <h2 className="flex regular regular-dark">{title}</h2>
            <span className="flex align-center heading-2 mg-t-xsm primary-color">
              {rating}
              <i className="fa fa-star star"></i>
            </span>
            <h3
              className={
                inStock
                  ? "mg-t-xsm flex success-color"
                  : "mg-t-xsm flex danger-color"
              }
            >
              {inStock ? "In Stock" : "Out of Stock"}
            </h3>
            <div className="flex mg-t-xsm">
              <h3 className="bold mg-r-sm">₹{discountedPrice}</h3>
              <h3 className="regular line-through muted mg-r-sm">
                ₹{originalPrice}
              </h3>
              <h3 className="flex bold primary-color">
                {discountPercentage}% off
              </h3>
            </div>
            <h3 className="regular-dark mg-t-xsm">Ideal for {categoryName}</h3>
            <h3 className="flex gap-p5 regular mg-t-xsm">
              Expect Delivery in {deliveryDuration}
              {deliveryDuration === 1 ? " Day" : " Days"}
            </h3>
            <h3 className="flex gap-p5 regular mg-t-xsm">
              Delivery Charges :{" "}
              {deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}
            </h3>
          </div>
          <div className="mg-t-sm">
            <div className="w-100">
              {!inStock && (
                <button className="btn btn-secondary disabled w-100">
                  Out of Stock
                </button>
              )}
              {inStock && (
                <button
                  onClick={() =>
                    isAuth
                      ? !inCartProduct
                        ? addToCart(product)
                        : navigate("/cart")
                      : navigate("/login")
                  }
                  className="btn btn-secondary w-100"
                >
                  {inCartProduct ? "Go to Cart" : "Add to Cart"}
                </button>
              )}
              <button
                onClick={() =>
                  isAuth
                    ? !wishlisted
                      ? wishlistManipulation(
                          wishlisted,
                          product,
                          addToWishlist,
                          null
                        )
                      : navigate("/wishlist")
                    : navigate("/login")
                }
                className="btn btn-action outline outline-action w-100 flex-grow-1 mg-t-sm"
              >
                {wishlisted ? "Go to Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
