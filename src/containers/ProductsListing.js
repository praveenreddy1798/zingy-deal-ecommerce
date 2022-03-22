import { Card } from "../components/Card";
import { ProductsFilterSection } from "../components/ProductsFilterSection";
import { Navbar } from "../components/Navbar";
import { useQueryAllProducts } from "../services/api";
import { useProducts } from "../context/products";
import { Loader } from "../components/Loader";
import { useLocation } from "react-router-dom";
const ProductsListing = () => {
  const location = useLocation();
  let searchParam = new URLSearchParams(location.search);
  searchParam = Object.fromEntries(searchParam);
  const { productsState } = useProducts();
  const { products } = productsState;
  const { loading } = useQueryAllProducts("/api/products", searchParam);

  return (
    <div class="page-wrapper page-wrapper-filter-mob">
      <Navbar />
      <ProductsFilterSection />
      <main class="main-section main-section-filter-mob">
        <Loader loading={loading} />
        <div class="grid responsive-grid w-100 pd-md">
          {!products.length && (
            <h1>Sorry, We couldn't find the product you are looking for.</h1>
          )}
          {products?.map((product, index) => {
            return <Card key={index} product={product} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default ProductsListing;
