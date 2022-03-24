import { Link } from "react-router-dom";
import { Message } from "../components/Message";
import { Navbar } from "../components/Navbar";
import "../themes/home.css";

const Home = () => {
  return (
    <div class="page-wrapper page-wrapper-filter-mob">
      <Navbar />
      <main class="main-section main-section-strech pd-md">
        <Message />
        <div class="flex-vertical gap-2 justify-between">
          <Link to="/products">
            <img
              class="aspect-ratio-initial banner"
              src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647900573/ecommerce-banner_vbv1gm.webp"
              alt="banner"
            />
          </Link>
          <div class="category-section flex-grow-1">
            <div class="grid grid-3 category-container gap-2">
              <Link
                class="flex text-overlay-card w-100"
                to="/products?categoryName=men"
              >
                <div class="position-relative flex w-100">
                  <img
                    class="text-overlay-image flex-grow-1"
                    src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647802051/Men%20ecommerce/men-hrx-tshirt_nnvbt2.webp"
                    alt="men"
                  />
                  <div class="overlay-text-container position-absolute flex-center align-center">
                    <h3 class="overlay-text secondary-color">Men</h3>
                  </div>
                </div>
              </Link>
              <Link
                class="flex text-overlay-card w-100"
                to="/products?categoryName=women"
              >
                <div class="position-relative flex w-100">
                  <img
                    class="text-overlay-image flex-grow-1"
                    src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647811959/Women%20ecommerce/women-round-neck-tshirt_mrpkio.webp"
                    alt="women"
                  />
                  <div class="overlay-text-container position-absolute flex-center align-center">
                    <h3 class="overlay-text secondary-color">Women</h3>
                  </div>
                </div>
              </Link>
              <Link
                class="flex text-overlay-card w-100"
                to="/products?categoryName=kids"
              >
                <div class="position-relative flex w-100">
                  <img
                    class="text-overlay-image flex-grow-1"
                    src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647813905/kids%20ecommerce/kids-boy-tshirt_nlcynx.webp"
                    alt="kids"
                  />
                  <div class="overlay-text-container position-absolute flex-center align-center">
                    <h3 class="overlay-text secondary-color">Kids</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="flex arrival-sale-section gap-2">
            <Link
              to="/products?arrivalType=new"
              class="flex home-arrival h-max-content gap-2"
            >
              <div class="arrival-left-section w-100 flex justify-between gap-3 pd-md">
                <img
                  src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647802052/Men%20ecommerce/men-full-hoodie_iqqbc1.webp"
                  class="h-100 arrival-img"
                  alt="arrival"
                />
                <div class="flex-vertical justify-between">
                  <h3 class="regular-dark new-arrival semi-bold">
                    New Arrivals
                  </h3>
                  <div>
                    <h4 class="bold">Summer Collections</h4>
                    <h4 class="regular">
                      Check out our best winter collection to stay warm in style
                      this season
                    </h4>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/products?arrivalType=sale"
              class="flex home-arrival gap-2 h-max-content gap-2"
            >
              <div class="arrival-left-section w-100 flex justify-between gap-3 pd-md">
                <img
                  src="https://res.cloudinary.com/praveen-kumar/image/upload/v1647811958/Women%20ecommerce/women-round-neck-full-sleeve-tshirt_cqmn67.webp"
                  class="h-100 arrival-img"
                  alt="sale"
                />
                <div class="flex-vertical justify-between">
                  <h3 class="regular-dark new-arrival semi-bold">Mega Sale</h3>
                  <div>
                    <h4 class="bold">Summer Collections</h4>
                    <h4 class="regular">
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

export default Home;
