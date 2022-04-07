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
    <div className="bg-white pd-md price-details-cart h-max-content">
      <h3 className="flex-center">Price Details</h3>
      <hr />
      <div className="flex-between">
        <div className="flex-vertical row-gap-p5">
          <h3 className="regular-dark">Price ({cartItems} Items)</h3>
          <h3 className="regular-dark">Discount</h3>
          <h3 className="regular-dark">Delivery Charge</h3>
        </div>
        <div className="flex-vertical prices row-gap-p5">
          <h3 className="regular-dark">₹{totalPrice}</h3>
          <h3 className="regular-dark">- ₹{totalDiscount}</h3>
          <h3 className="regular-dark">₹{totalDeliveryCharge}</h3>
        </div>
      </div>
      <hr />
      <div className="flex-between">
        <h3>Total Amount</h3>
        <h3>₹{totalPrice - totalDiscount + totalDeliveryCharge}</h3>
      </div>
      <hr />
      <h3 className="regular-dark">
        You will save ₹{totalDiscount} on this order
      </h3>
      <button
        onClick={() => navigate("/address")}
        className="btn btn-action w-100 mg-t-sm"
      >
        PLACE ORDER
      </button>
    </div>
  );
};
