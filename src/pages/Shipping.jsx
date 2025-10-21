import React, { useState } from "react";

// Shipping.jsx

const shippingRules = [
  {
    title: "Order Processing",
    content: "All orders are processed within 1-2 business days after confirmation. Orders are not processed or shipped on weekends or public holidays. You will receive a confirmation email once your order is successfully processed.",
    icon: "📦"
  },
  {
    title: "Shipping Methods",
    content: "We offer standard, express, and priority shipping. Shipping charges may vary depending on order size, weight, and delivery location. Estimated delivery time: Standard 5–7 days, Express 2–3 days, Priority 1–2 days.",
    icon: "🚚"
  },
  {
    title: "Tracking Orders",
    content: "Once your order is shipped, a tracking number will be emailed. You can track your package via our website or courier service portal. Tracking updates may take 24 hours to reflect after dispatch.",
    icon: "🔍"
  },
  {
    title: "Shipping Restrictions",
    content: "Currently, we ship to domestic addresses only. Certain items may be subject to special shipping restrictions.",
    icon: "📍"
  },
  {
    title: "Delivery Issues",
    content: "Delivery timeframes are estimated and may vary due to weather, carrier delays, or unforeseen circumstances. If your package is lost, delayed, or damaged during shipping, please contact our support team immediately.",
    icon: "⚠️"
  },
  {
    title: "Address Accuracy",
    content: "Please provide a complete and accurate shipping address. We are not responsible for packages delayed or returned due to incorrect addresses.",
    icon: "✏️"
  },
  {
    title: "Shipping Charges & Returns",
    content: "Shipping charges are non-refundable unless otherwise stated. For returned or undeliverable orders, additional shipping may apply for re-delivery.",
    icon: "💸"
  },
];

const Shipping = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Sky-Blue Header */}
      <div className="mb-10">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/40 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Shipping Rules & Policies
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {shippingRules.map((rule, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition"
          >
            <button
              className="w-full px-6 py-5 text-left font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 flex items-center justify-between focus:outline-none"
              onClick={() => toggleOpen(index)}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{rule.icon}</span>
                {rule.title}
              </div>
              <span className="text-xl text-gray-500 dark:text-gray-400">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 pt-2 text-gray-600 dark:text-gray-300">
                <p>{rule.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shipping;