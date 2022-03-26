import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/products";
import { useAddToWishlist } from "../services";
import { inWishlist, wishlistManipulation } from "../utils";
export const ProductDetailSection = ({ product }) => {
  const navigate = useNavigate();
  const { addToWishlist } = useAddToWishlist();
  const { productsDispatch, productsState } = useProducts();
  const { wishlist } = productsState;
  const {
    title,
    inCart,
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
  const token = localStorage.getItem("token");
  return (
    <div class="flex-center pd-md h-100">
      <div class="flex-center gap-1 bg-white border-light-grey">
        <img class="product-detail-image" src={image} alt="product" />
        <div class="flex-vertical justify-between product-detail-section pd-md">
          <div>
            <h2 class="flex regular regular-dark">{title}</h2>
            <span class="flex align-center heading-2 mg-t-xsm primary-color">
              {rating}
              <i class="fa fa-star star"></i>
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
            <div class="flex mg-t-xsm">
              <h3 class="bold mg-r-sm">₹{discountedPrice}</h3>
              <h3 class="regular line-through muted mg-r-sm">
                ₹{originalPrice}
              </h3>
              <h3 class="flex bold primary-color">{discountPercentage}% off</h3>
            </div>
            <h3 class="regular-dark mg-t-xsm">Ideal for {categoryName}</h3>
            <h3 class="flex gap-p5 regular mg-t-xsm">
              Expect Delivery in {deliveryDuration}
              {deliveryDuration === 1 ? " Day" : " Days"}
            </h3>
            <h3 class="flex gap-p5 regular mg-t-xsm">
              Delivery Charges :{" "}
              {deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}
            </h3>
          </div>
          <div class="mg-t-sm">
            <div class="w-100">
              {!inStock && (
                <button class="btn btn-secondary disabled w-100">
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
                  class="btn btn-secondary w-100"
                >
                  {inCart ? "Go to Cart" : "Add to Cart"}
                </button>
              )}
              <button
                onClick={() =>
                  token
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
                class="btn btn-action outline outline-action w-100 flex-grow-1 mg-t-sm"
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
