import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/products";

export const CartPrice = () => {
  const navigate = useNavigate();
  const {
    productsState: {
      cartItems,
      totalPrice,
      totalDiscount,
      totalDeliveryCharge,
    },
  } = useProducts();
  return (
    <div class="bg-white pd-md price-details-cart h-max-content">
      <h3 class="flex-center">Price Details</h3>
      <hr />
      <div class="flex-between">
        <div class="flex-vertical row-gap-p5">
          <h3 class="regular-dark">Price ({cartItems} Items)</h3>
          <h3 class="regular-dark">Discount</h3>
          <h3 class="regular-dark">Delivery Charge</h3>
        </div>
        <div class="flex-vertical prices row-gap-p5">
          <h3 class="regular-dark">₹{totalPrice}</h3>
          <h3 class="regular-dark">- ₹{totalDiscount}</h3>
          <h3 class="regular-dark">₹{totalDeliveryCharge}</h3>
        </div>
      </div>
      <hr />
      <div class="flex-between">
        <h3>Total Amount</h3>
        <h3>₹{totalPrice - totalDiscount + totalDeliveryCharge}</h3>
      </div>
      <hr />
      <h3 class="regular-dark">You will save ₹{totalDiscount} on this order</h3>
      <button
        onClick={() => navigate("/address")}
        class="btn btn-action w-100 mg-t-sm"
      >
        PLACE ORDER
      </button>
    </div>
  );
};
