import { Card } from "../components/Card";
import { ProductsFilterSection } from "../components/ProductsFilterSection";
import { Navbar } from "../components/Navbar";
import { useQueryAllProducts } from "../services/api";
import { useProducts } from "../context/products";
import { Loader } from "../components/Loader";
const ProductsListing = () => {
  const { productsState } = useProducts();
  const { products } = productsState;
  const { loading } = useQueryAllProducts("/api/products");

  return (
    <div class="page-wrapper page-wrapper-filter-mob">
      <Navbar />
      <ProductsFilterSection />
      <main class="main-section main-section-filter-mob">
        <Loader loading={loading} />
        <div class="grid responsive-grid w-100 pd-sm">
          {products?.map((product, index) => {
            return <Card key={index} product={product} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default ProductsListing;
