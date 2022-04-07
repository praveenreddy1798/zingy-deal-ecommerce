import { useState } from "react";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import { useAuth, useProducts } from "../context";
import { NAV_ACTIVE_BACKGROUND, NAV_ACTIVE_COLOR } from "../utils";
export const Navbar = ({ displaySearch = false }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
    productsDispatch({
      type: "RESET_TO_INITIAL_STATE",
    });
    navigate("/login");
  };

  const getStyles = ({ isActive }) => {
    if (isActive) {
      return {
        backgroundColor: NAV_ACTIVE_BACKGROUND,
        color: NAV_ACTIVE_COLOR,
      };
    }
  };

  return (
    <>
      <nav className="navbar bg-white border-light-grey flex-between no-wrap pd-xsm">
        <Link to="/" className="nav-left">
          <h3
            className={`pd-sm nav-logo ${
              pathname === "/" ? "primary-color" : "secondary-color"
            }`}
          >
            Zingy Deal
          </h3>
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
                <i
                  className={`fa fa-heart-o fa-2x nav-wishlist ${
                    pathname === "/wishlist"
                      ? "primary-color"
                      : "secondary-color"
                  } `}
                ></i>
              </button>
              {isAuth && <span className="rounded">{wishlist.length}</span>}
            </div>
          </Link>
          <Link to="/cart">
            <div className="badge-container icon-badge">
              <button>
                <i
                  className={`fa fa-shopping-cart fa-2x cart nav-cart ${
                    pathname === "/cart" ? "primary-color" : "secondary-color"
                  }`}
                ></i>
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
            <NavLink style={getStyles} to="/login">
              <li>Login</li>
            </NavLink>
            <NavLink style={getStyles} to="/wishlist">
              <li>Wishlist</li>
            </NavLink>
            <NavLink style={getStyles} to="/cart">
              <li>Cart</li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};
