import React, { useState } from "react";
import { FaChartLine, FaDollarSign, FaHandshake, FaTools } from "react-icons/fa";

// Partner.jsx

function Partner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We will contact you soon.");
    setFormData({ name: "", email: "", website: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Sky-Blue Header – Theme Safe */}
      <div className="mb-16">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-7 border border-blue-200 dark:border-blue-800/40">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800/30 mb-5 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Become a Partner
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Join our modern partner program and earn commissions by promoting our products. Fast, simple, and rewarding!
            </p>
            <button
              onClick={() => document.getElementById("partnerForm").scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-md transition"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[ 
          { icon: <FaDollarSign className="text-3xl text-green-600 dark:text-green-400" />, title: "Competitive Commissions", desc: "Earn a generous share from every sale." },
          { icon: <FaTools className="text-3xl text-blue-600 dark:text-blue-400" />, title: "Marketing Tools", desc: "Access banners, links, and content." },
          { icon: <FaChartLine className="text-3xl text-purple-600 dark:text-purple-400" />, title: "Analytics Dashboard", desc: "Track referrals in real-time." },
          { icon: <FaHandshake className="text-3xl text-yellow-600 dark:text-yellow-400" />, title: "Dedicated Support", desc: "Our team is here to help you." }
        ].map((item, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center transition hover:shadow-md">
            <div className="mb-3 flex justify-center">{item.icon}</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Form */}
      <section id="partnerForm" className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Sign Up to Become a Partner
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            name="website"
            placeholder="Website or Social Profile"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            name="message"
            placeholder="Why do you want to join?"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-md transition"
          >
            Join Now
          </button>
        </form>
      </section>
    </div>
  );
}

export default Partner;