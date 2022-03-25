import { Card } from "../components/Card";
import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import { useProducts } from "../context/products";
import { useQueryWishlistProducts } from "../services";
const Wishlist = () => {
  const { productsState } = useProducts();
  const { wishlist } = productsState;
  const { loading } = useQueryWishlistProducts();
  return (
    <>
      <div class="page-wrapper">
        <Navbar />
        <main class="main-section main-section-strech pd-md">
          {!loading && (
            <h1 class="flex-center">
              {wishlist.length ? "Wishlist" : "Your Wishlist is empty"}
            </h1>
          )}
          <Loader loading={loading} />
          <div class="grid responsive-grid pd-sm">
            {wishlist.map((product) => {
              const { _id } = product;
              return <Card key={_id} product={product} cardType="wishlist" />;
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Wishlist;
