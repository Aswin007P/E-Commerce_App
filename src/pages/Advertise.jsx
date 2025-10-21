import React, { useCallback, useState } from "react";

function Advertise({ darkMode, toggleDarkMode }) {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    targetAudience: "",
    campaignType: "",
    bannerImage: null,
    bannerPreview: null,
    promotionPlan: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "bannerImage" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          bannerImage: file,
          bannerPreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Advertisement Data:", formData);
    alert("Advertisement submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Dark Mode Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="mb-10">
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-6 md:p-8 shadow-sm border border-blue-200 dark:border-blue-800/50">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-200 dark:bg-blue-800/50 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-600 dark:text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592L5.26 17H3v-4.5l3.26-2.76a1.76 1.76 0 013.417-.592V5.882z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-3">
                Advertise Your Product
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 px-2">
                Reach your target audience and grow your sales 🚀
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Product Name *
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                placeholder="e.g., Smart Fitness Tracker"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Describe your product in detail..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Target Audience
              </label>
              <input
                type="text"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleChange}
                placeholder="e.g., Students, Tech Enthusiasts, Gamers"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Campaign Type *
              </label>
              <select
                name="campaignType"
                value={formData.campaignType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none transition"
              >
                <option value="" disabled>
                  Select campaign type
                </option>
                <option value="social-media">Social Media</option>
                <option value="email">Email Marketing</option>
                <option value="search-engine">Search Engine Ads</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Banner Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700/50 transition hover:border-purple-400">
                {formData.bannerPreview ? (
                  <div className="text-center">
                    <img
                      src={formData.bannerPreview}
                      alt="Banner preview"
                      className="mx-auto h-32 w-auto object-contain rounded-lg mb-2"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Click to change image
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-purple-600 dark:text-purple-400">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                )}
                <input
                  type="file"
                  name="bannerImage"
                  accept="image/*"
                  onChange={handleChange}
                  className="sr-only"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Promotion Plan
              </label>
              <select
                name="promotionPlan"
                value={formData.promotionPlan}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none transition"
              >
                <option value="" disabled>
                  Select your plan
                </option>
                <option value="basic">Basic – ₹999/month</option>
                <option value="premium">Premium – ₹2,499/month</option>
                <option value="enterprise">Enterprise – Custom Pricing</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-800 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Submit Advertisement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Advertise;