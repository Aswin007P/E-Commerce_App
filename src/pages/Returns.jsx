import React, { useState } from "react";

// Returns.jsx

const refundPolicies = [
  {
    title: "Eligibility for Refund",
    content: "Refunds are available within 15 days of purchase for defective or damaged products. Items must be unused and in original packaging."
  },
  {
    title: "Return Process",
    content: "To return an item, contact our support team to get a return authorization. Ship the item to the provided address with the original receipt."
  },
  {
    title: "Refund Method",
    content: "Refunds are processed using the original payment method within 5-7 business days after we receive the returned item."
  },
  {
    title: "Non-Refundable Items",
    content: "Gift cards, downloadable software, and perishable goods are non-refundable."
  },
];

const Returns = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Sky-Blue Header */}
      <div className="mb-10">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/40 max-w-2xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
            Refund & Returns
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {refundPolicies.map((policy, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition"
            >
              <button
                className="w-full px-5 py-4 text-left font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 flex justify-between items-center focus:outline-none"
                onClick={() => toggleCard(index)}
              >
                {policy.title}
                <span className="text-xl text-gray-500 dark:text-gray-400">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-2 text-gray-600 dark:text-gray-300">
                  <p>{policy.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Returns;