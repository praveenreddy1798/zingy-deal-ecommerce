import { CartPrice, CartProduct, Loader, Navbar } from "../components";
import { useProducts } from "../context/products";
import { useQueryCartProducts } from "../services";

const Cart = () => {
  const { loading } = useQueryCartProducts();
  const {
    productsState: { cart, cartItems },
  } = useProducts();
  return (
    <>
      <div className="page-wrapper">
        <Navbar />
        <main className="main-section main-section-strech">
          <Loader loading={loading} />
          {!loading && (
            <div className="flex-center">
              <h1 className="pd-sm">
                {cartItems ? `My Cart (${cartItems})` : "Your Cart is empty"}
              </h1>
            </div>
          )}
          {cart.length > 0 && (
            <div className="flex-evenly align-start mg-sm gap-2">
              <div className="flex-vertical gap-2 h-100 overflow-y-auto">
                {cart.map((product) => {
                  return <CartProduct product={product} />;
                })}
              </div>
              <CartPrice />
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export { Cart };
