import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

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
    if (dark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-none sticky top-0 z-50 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Top Bar */}
      <div className="border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-2 text-sm text-gray-600 dark:text-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex gap-4">
            <Link to="/help" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Help</Link>
            <Link to="/your-orders" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">Your Orders</Link>
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label={`${isDarkMode ? "Switch to light mode" : "Switch to dark mode"}`}
          >
            <div className="relative w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300">
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-300 ${
                  isDarkMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </div>
            <span className="text-sm font-medium">{isDarkMode ? "🌙 Dark" : "☀️ Light"} Mode</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-1 text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-yellow-500">✨</span>
              <span>FLIPON</span>
              <span className="text-yellow-500">✨</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-2xl">
            <div className="relative flex">
              <input
                type="text"
                placeholder="Search products, brands, or categories..."
                value={searchQuery}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <Link
                to={`/?query=${encodeURIComponent(searchQuery)}`}
                className="px-4 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                🔍
              </Link>
            </div>
          </div>

          {/* User & Actions */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                {/* Profile Icon + Greeting */}
                <div className="flex items-center gap-3">
                  <Link to="/profile" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                    <FaUserCircle size={24} />
                  </Link>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Hi, 👋 <strong>{user?.name || "User"}</strong>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to="/your-orders"
                        className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium rounded-md shadow-sm transition whitespace-nowrap"
                      >
                        Your Orders
                      </Link>
                      <button
                        onClick={() => dispatch(logout())}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded-md shadow-sm transition whitespace-nowrap"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-blue-600 font-medium hover:underline hover:text-blue-700">
                Login
              </Link>
            )}

            {/* Cart & Checkout */}
            <div className="flex items-center gap-3">
              <Link to="/cart" className="relative flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white group">
                <span className="group-hover:scale-105 transition-transform">🛒</span>
                <span>Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link
                to="/checkout"
                className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md shadow-md transition transform hover:-translate-y-0.5"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
          <Link to="/?category=Electronics" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Electronics</Link>
          <Link to="/?category=Fashion" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Fashion</Link>
          <Link to="/?category=Home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home & Furniture</Link>
          <Link to="/?category=Appliances" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Appliances</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;