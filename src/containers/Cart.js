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
      <div class="page-wrapper">
        <Navbar />
        <main class="main-section main-section-strech">
          <Loader loading={loading} />
          {!loading && (
            <div class="flex-center">
              <h1 class="pd-sm">
                {cartItems ? `My Cart (${cartItems})` : "Your Cart is empty"}
              </h1>
            </div>
          )}
          {cart.length > 0 && (
            <div class="flex-evenly align-start mg-sm gap-2">
              <div class="flex-vertical gap-2 h-100 overflow-y-auto">
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
