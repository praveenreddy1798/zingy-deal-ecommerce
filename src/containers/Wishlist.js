import { Loader, Card, Navbar } from "../components";
import { useProducts } from "../context/products";
import { useQueryWishlistProducts } from "../services";
const Wishlist = () => {
  const { productsState } = useProducts();
  const { wishlist } = productsState;
  const { loading } = useQueryWishlistProducts();
  return (
    <>
      <div className="page-wrapper">
        <Navbar />
        <main className="main-section main-section-strech pd-md">
          {!loading && (
            <h1 className="flex-center">
              {wishlist.length ? "Wishlist" : "Your Wishlist is empty"}
            </h1>
          )}
          <Loader loading={loading} />
          <div className="grid responsive-grid pd-sm">
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

export { Wishlist };
