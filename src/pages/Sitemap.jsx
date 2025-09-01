import "./Sitemap.css";
import React from "react";
import { Link } from "react-router-dom";

// src/pages/Sitemap.jsx

const Sitemap = () => {
  return (
    <div className="sitemap-container">
      <h1>Site Map</h1>
      <div className="sitemap-grid">
        {/* Shop Section */}
        <div className="sitemap-section">
          <h3>Shop</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/product/:id">Product Details</Link></li>
            <li><Link to="/your-orders">Your Orders</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="sitemap-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><Link to="/partner">Partners</Link></li>
            <li><Link to="/advertise">Advertise</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="sitemap-section">
          <h3>Customer Support</h3>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/atm">ATM / Store Locator</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="sitemap-section">
          <h3>Legal & Security</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/security">Security</Link></li>
          </ul>
        </div>

        {/* Account Section */}
        <div className="sitemap-section">
          <h3>Account</h3>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/sell">Sell on Platform</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
