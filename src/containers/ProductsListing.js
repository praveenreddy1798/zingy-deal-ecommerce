import { Navbar, Card, Loader, ProductsFilterSection } from "../components";
import { useQueryAllProducts } from "../services";
import { useProducts } from "../context/products";
import { useLocation } from "react-router-dom";
const ProductsListing = () => {
  const location = useLocation();
  let searchParam = new URLSearchParams(location.search);
  searchParam = Object.fromEntries(searchParam);
  const {
    productsState: { products },
  } = useProducts();
  const { loading } = useQueryAllProducts("/api/products", searchParam);
  return (
    <div className="page-wrapper page-wrapper-filter-mob">
      <Navbar displaySearch />
      <ProductsFilterSection />
      <main className="main-section main-section-filter-mob pd-md position-relative">
        <Loader loading={loading} />
        <div className="grid responsive-grid w-100">
          {!products.length && !loading && (
            <h1>Sorry, We couldn't find the product you are looking for.</h1>
          )}
          {products?.map((product) => {
            const id = product._id;
            return <Card key={id} product={product} />;
          })}
        </div>
      </main>
    </div>
  );
};

export { ProductsListing };
