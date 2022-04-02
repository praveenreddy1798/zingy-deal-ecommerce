import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useProducts } from "../context";
export const Navbar = ({ displaySearch = false }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const navigate = useNavigate();
  const {
    productsState: { cartItems, wishlist },
    productsDispatch,
  } = useProducts();
  const [searchValue, setSearchValue] = useState("");
  const {
    auth: { isAuth },
    setAuth,
  } = useAuth();

  const handleSearch = (e, onSearchClicked = false) => {
    if (e.key === "Enter" || onSearchClicked) {
      productsDispatch({
        type: "SEARCH_BY_PRODUCT_NAME",
        payload: searchValue,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ isAuth: false, token: null, userDetails: {} });
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar bg-white border-light-grey flex-between no-wrap pd-xsm">
        <Link to="/" className="nav-left">
          <h3 className="pd-sm secondary-color nav-logo">Zingy Deal</h3>
        </Link>
        {displaySearch && (
          <div>
            <input
              className="input input-secondary search"
              type="search"
              placeholder="search by product name"
              value={searchValue}
              name="search"
              id="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => handleSearch(e)}
            />
            <button
              className="btn btn-secondary outline-none search-btn"
              onClick={(e) => handleSearch(e, true)}
            >
              Search
            </button>
          </div>
        )}
        <div className="flex-evenly pd-sm col-gap-2 nav-right">
          <button
            onClick={() => (isAuth ? logout() : navigate("/login"))}
            className="btn btn-action"
          >
            {isAuth ? "Logout" : "Login"}
          </button>
          <Link to="/wishlist">
            <div className="badge-container icon-badge">
              <button className="wishlist">
                <i className="fa fa-heart-o fa-2x nav-wishlist"></i>
              </button>
              {isAuth && <span className="rounded">{wishlist.length}</span>}
            </div>
          </Link>
          <Link to="/cart">
            <div className="badge-container icon-badge">
              <button>
                <i className="fa fa-shopping-cart fa-2x cart nav-cart"></i>
              </button>
              {isAuth && <span className="rounded">{cartItems}</span>}
            </div>
          </Link>
        </div>
        <div className="mobile-menu flex-evenly align-center">
          <button
            onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
            className="btn hamburger mobile-item secondary-color"
          >
            {isMobileMenuVisible ? (
              <i className="fa fa-close fa-2x h-100"></i>
            ) : (
              <i className="fa fa-bars fa-2x h-100"></i>
            )}
          </button>
        </div>
      </nav>
      {isMobileMenuVisible && (
        <div className="sidebar sidebar-mobile pd-md">
          <ul className="sidebar-items flex-vertical align-center">
            <Link className="active-sidebar-item" to="/login">
              <li>Login</li>
            </Link>
            <Link to="/wishlist">
              <li>Wishlist</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};
