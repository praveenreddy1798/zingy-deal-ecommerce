import { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/products";
export const Navbar = () => {
  const { productsState, productsDispatch } = useProducts();
  const [searchValue, setSearchValue] = useState("");
  const { cartItems, wishlist } = productsState;

  const handleSearch = (e, onSearchClicked = false) => {
    if (e.key === "Enter" || onSearchClicked) {
      productsDispatch({
        type: "SEARCH_BY_PRODUCT_NAME",
        payload: searchValue,
      });
    }
  };

  return (
    <nav class="navbar bg-white border-light-grey flex-between no-wrap pd-xsm">
      <Link to="/" class="nav-left">
        <h3 class="pd-sm secondary-color nav-logo">Zingy Deal</h3>
      </Link>
      <div>
        <input
          class="input input-secondary search"
          type="search"
          placeholder="search by product name"
          value={searchValue}
          name="search"
          id="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => handleSearch(e)}
        />
        <button
          class="btn btn-secondary outline-none search-btn"
          onClick={(e) => handleSearch(e, true)}
        >
          Search
        </button>
      </div>
      <div class="flex-evenly pd-sm col-gap-2 nav-right">
        <Link to="/login">
          <button class="btn btn-action">Login</button>
        </Link>
        <Link to="/wishlist">
          <div class="badge-container icon-badge">
            <button class="wishlist">
              <i class="fa fa-heart-o fa-2x nav-wishlist"></i>
            </button>
            <span class="rounded">{wishlist.length}</span>
          </div>
        </Link>
        <Link to="/cart">
          <div class="badge-container icon-badge">
            <button>
              <i class="fa fa-shopping-cart fa-2x cart nav-cart"></i>
            </button>
            <span class="rounded">{cartItems}</span>
          </div>
        </Link>
      </div>
      <div class="mobile-menu flex-evenly align-center">
        <button class="btn hamburger mobile-item secondary-color">
          <i class="fa fa-bars fa-2x h-100"></i>
        </button>
        <button class="btn hamburger-close mobile-item secondary-color">
          <i class="fa fa-close fa-2x h-100"></i>
        </button>
      </div>
    </nav>
  );
};
