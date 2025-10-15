import "./Header.css";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const cartItems = useSelector((state) => state.cart.items);
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, user } = auth;
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const dark = savedTheme === "dark";
    setIsDarkMode(dark);
    if (dark) document.body.classList.add("dark-theme");
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
   const handleKeyDown = (e) => {
    if (e.key === "Enter") {
       navigate(`/?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="pro-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-links">
            <Link to="/help">Help</Link>
            <Link to="/your-orders">Your Orders</Link>
          </div>
          <div className="theme-toggle" onClick={toggleTheme}>
            <span className={`switch ${isDarkMode ? "on" : ""}`}></span>
            <span className="label">{isDarkMode ? "Dark" : "Light"} Mode</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="logo-link">
              <span className="logo-icon">✨</span>
              <span className="logo-text">FLIPON</span>
              <span className="logo-icon">✨</span>
            </Link>
          </div>

          {/* Search */}
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search products, brands, or categories..."
              value={searchQuery}
              onChange={handleSearch}
              onKeyDown={handleKeyDown} 
              className="search-input"
            />
            <Link
              to={`/?query=${encodeURIComponent(searchQuery)}`}
              className="search-btn"
            >
              🔍
            </Link>
          </div>

          {/* Right side actions */}
          {/* User Actions */}
          <div className="user-actions">
            {isAuthenticated ? (
              <div className="user-menu">
                {/* Greeting */}
                <div className="greeting">
                 Hi ,👋 <strong>{user?.name || "User"}</strong>
                </div>

                {/* Orders link */}
                <Link to="/your-orders" className="action-link orders">
                  Your Orders
                </Link>

                {/* Logout + Profile icon inline */}
                <div className="logout-profile">
                  <button
                    onClick={() => dispatch(logout())}
                    className="action-link logout"
                  >
                    Logout
                  </button>

                  <Link to="/profile" className="profile-link">
                    <FaUserCircle className="profile-icon" />
                  </Link>
                </div>
              </div>
            ) : (
              <Link to="/login" className="auth-link">
                Login
              </Link>
            )}

            {/* Cart Link */}
            <Link to="/cart" className="cart-link">
              <div className="cartt"> 🛒 Cart</div>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>

            {/* Checkout Button */}
            <Link to="/checkout" className="checkout-btn">
              Checkout
            </Link>
          </div>

        </div>
      </div>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="container">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/?category=Electronics" className="nav-link">Electronics</Link>
          <Link to="/?category=Fashion" className="nav-link">Fashion</Link>
          <Link to="/?category=Home" className="nav-link">Home & Furniture</Link>
          <Link to="/?category=Appliances" className="nav-link">Appliances</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
