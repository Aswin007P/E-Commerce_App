import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-semibold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-gold-400 transition-colors">Careers</Link></li>
              <li><Link to="/blogs" className="hover:text-gold-400 transition-colors">Blog</Link></li>
              <li><Link to="/sustainability" className="hover:text-gold-400 transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sell" className="hover:text-gold-400 transition-colors">Sell on FliOn</Link></li>
              <li><Link to="/advertise" className="hover:text-gold-400 transition-colors">Advertise Your Products</Link></li>
              <li><Link to="/partner" className="hover:text-gold-400 transition-colors">Become an Affiliate</Link></li>
              <li><Link to="/atm" className="hover:text-gold-400 transition-colors">FlipOn Pay on ATMs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/your-orders" className="hover:text-gold-400 transition-colors">Your Orders</Link></li>
              <li><Link to="/returns" className="hover:text-gold-400 transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/help" className="hover:text-gold-400 transition-colors">Help</Link></li>
              <li><Link to="/shipping" className="hover:text-gold-400 transition-colors">Shipping Rates & Policies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Instagram</a></li>
              <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <div className="mb-3">
            <Link to="/" className="text-2xl font-bold text-gold-400 tracking-wide">
              FLIPON
            </Link>
          </div>
          <p className="text-sm text-gray-400 mb-3">
            Copyright © {currentYear} FlipOn.com, Inc. or its affiliates. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms of Use</Link>
            <Link to="/security" className="hover:text-gold-400 transition-colors">Security</Link>
            <Link to="/sitemap" className="hover:text-gold-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;