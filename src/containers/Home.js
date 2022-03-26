import { Link } from "react-router-dom";
import { Navbar } from "../components";
import "../themes/home.css";

const Home = () => {
  return (
    <div className="page-wrapper page-wrapper-filter-mob">
      <Navbar />
      <main className="main-section main-section-strech pd-md">
        <div className="flex-vertical gap-2 justify-between">
          <Link to="/products">
            <img
              className="aspect-ratio-initial banner"
              src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647900573/ecommerce-banner_vbv1gm.webp"
              alt="banner"
            />
          </Link>
          <div className="category-section flex-grow-1">
            <div className="grid grid-3 category-container gap-2">
              <Link
                className="flex text-overlay-card w-100"
                to="/products?categoryName=men"
              >
                <div className="position-relative flex w-100">
                  <img
                    className="text-overlay-image flex-grow-1"
                    src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647802051/Men%20ecommerce/men-hrx-tshirt_nnvbt2.webp"
                    alt="men"
                  />
                  <div className="overlay-text-container position-absolute flex-center align-center">
                    <h3 className="overlay-text secondary-color">Men</h3>
                  </div>
                </div>
              </Link>
              <Link
                className="flex text-overlay-card w-100"
                to="/products?categoryName=women"
              >
                <div className="position-relative flex w-100">
                  <img
                    className="text-overlay-image flex-grow-1"
                    src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647811959/Women%20ecommerce/women-round-neck-tshirt_mrpkio.webp"
                    alt="women"
                  />
                  <div className="overlay-text-container position-absolute flex-center align-center">
                    <h3 className="overlay-text secondary-color">Women</h3>
                  </div>
                </div>
              </Link>
              <Link
                className="flex text-overlay-card w-100"
                to="/products?categoryName=kids"
              >
                <div className="position-relative flex w-100">
                  <img
                    className="text-overlay-image flex-grow-1"
                    src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647813905/kids%20ecommerce/kids-boy-tshirt_nlcynx.webp"
                    alt="kids"
                  />
                  <div className="overlay-text-container position-absolute flex-center align-center">
                    <h3 className="overlay-text secondary-color">Kids</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex arrival-sale-section gap-2">
            <Link
              to="/products?arrivalType=new"
              className="flex home-arrival h-max-content gap-2"
            >
              <div className="arrival-left-section w-100 flex justify-between gap-3 pd-md">
                <img
                  src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647802052/Men%20ecommerce/men-full-hoodie_iqqbc1.webp"
                  className="h-100 arrival-img"
                  alt="arrival"
                />
                <div className="flex-vertical justify-between">
                  <h3 className="regular-dark new-arrival semi-bold">
                    New Arrivals
                  </h3>
                  <div>
                    <h4 className="bold">Summer Collections</h4>
                    <h4 className="regular">
                      Check out our best winter collection to stay warm in style
                      this season
                    </h4>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/products?arrivalType=sale"
              className="flex home-arrival gap-2 h-max-content gap-2"
            >
              <div className="arrival-left-section w-100 flex justify-between gap-3 pd-md">
                <img
                  src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647811958/Women%20ecommerce/women-round-neck-full-sleeve-tshirt_cqmn67.webp"
                  className="h-100 arrival-img"
                  alt="sale"
                />
                <div className="flex-vertical justify-between">
                  <h3 className="regular-dark new-arrival semi-bold">
                    Mega Sale
                  </h3>
                  <div>
                    <h4 className="bold">Summer Collections</h4>
                    <h4 className="regular">
                      Check out our best winter collection to stay warm in style
                      this season
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <script src="https://zingy-ui.netlify.app/index.js"></script>
      </main>
    </div>
  );
};

export { Home };
