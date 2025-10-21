import React from "react";
import { Link } from "react-router-dom";

// Sitemap.jsx

const Sitemap = () => {
  const sections = [
    {
      title: "Shop",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5m4 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v4" />
        </svg>
      ),
      links: [
        { label: "Home", to: "/" },
        { label: "Cart", to: "/cart" },
        { label: "Checkout", to: "/checkout" },
        { label: "Product Details", to: "/product/123" },
        { label: "Your Orders", to: "/your-orders" },
      ],
    },
    {
      title: "Company",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2M7 21h10M9 7h6v2H9V7zm0 4h6v2H9v-2z" />
        </svg>
      ),
      links: [
        { label: "About Us", to: "/about" },
        { label: "Careers", to: "/careers" },
        { label: "Blogs", to: "/blogs" },
        { label: "Sustainability", to: "/sustainability" },
        { label: "Partners", to: "/partner" },
        { label: "Advertise", to: "/advertise" },
      ],
    },
    {
      title: "Customer Support",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
      links: [
        { label: "Help Center", to: "/help" },
        { label: "Returns", to: "/returns" },
        { label: "Shipping Info", to: "/shipping" },
        { label: "ATM / Store Locator", to: "/atm" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
    {
      title: "Legal & Security",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      links: [
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Terms of Service", to: "/terms" },
        { label: "Security", to: "/security" },
      ],
    },
    {
      title: "Account",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      links: [
        { label: "Login", to: "/login" },
        { label: "Register", to: "/register" },
        { label: "Sell on Platform", to: "/sell" },
        { label: "Profile", to: "/profile" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Sky-Blue Header with Icon */}
      <div className="mb-16">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-7 border border-blue-200 dark:border-blue-800/40 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-3">
              Site Map
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto px-2">
              Navigate every corner of FlipOn with ease.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {sections.map((section, idx) => (
          <div
            key={section.title}
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-1.5 opacity-0 animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-4">
              {section.icon}
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">{section.title}</h3>
            </div>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 group-hover:translate-x-1"
                  >
                    <span className="text-xs text-blue-500 dark:text-blue-400">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Fade-in Animation Style */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Sitemap;