import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import { ProductDetailSection } from "../components/ProductDetailSection";
import { useProducts } from "../context/products";
import { useQueryProductById } from "../services";
import { SOMETHING_WENT_WRONG } from "../utils";
const ProductDetail = () => {
  const { productsState } = useProducts();
  const { selectedProduct } = productsState;
  const { productId } = useParams();
  const { loading } = useQueryProductById(productId);
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-section main-section-strech">
        <Loader loading={loading} />
        {!loading && selectedProduct?._id === productId ? (
          <ProductDetailSection product={selectedProduct} />
        ) : (
          !loading && (
            <h1 className="flex-center mg-t-sm">{SOMETHING_WENT_WRONG}</h1>
          )
        )}
      </main>
    </div>
  );
};

export default ProductDetail;
