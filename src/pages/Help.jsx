import React, { useState } from "react";

const Help = () => {
  const [openSection, setOpenSection] = useState(null);
  const [userMessage, setUserMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState("");

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) {
      setMessageStatus("Please enter your message.");
      return;
    }
    setMessageStatus("Your message has been sent (dummy).");
    setUserMessage("");
    setTimeout(() => setMessageStatus(""), 3000);
  };

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking ID sent to your email after purchase."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept Credit/Debit cards, UPI, NetBanking, and Pay on ATM."
    },
    {
      question: "How do I return a product?",
      answer: "Go to your Orders section, select the product, and click on 'Return'. Follow the instructions."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach us via email at support@yourshop.com or call 1800-123-4567."
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-6 md:p-7 shadow-sm border border-blue-200 dark:border-blue-800/50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-200 dark:bg-blue-800/50 mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.5C6.075 2.5 1.25 7.325 1.25 13.25S6.075 24 12 24 22.75 19.175 22.75 13.25 17.925 2.5 12 2.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l2 2" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
              Help & Support
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-3 mb-12">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition"
            >
              <button
                className="w-full px-5 py-4 text-left font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection(index)}
              >
                {item.question}
                <span className="text-xl text-gray-500 dark:text-gray-400">
                  {openSection === index ? '−' : '+'}
                </span>
              </button>
              {openSection === index && (
                <div className="px-5 pb-5 pt-2 text-gray-600 dark:text-gray-300">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Send Us a Message</h2>
          <form onSubmit={handleSendMessage} className="space-y-3">
            <textarea
              placeholder="Type your message here..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              rows="4"
              className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
            <button
              type="submit"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 font-medium shadow-md"
            >
              Send Message
            </button>
          </form>
          {messageStatus && (
            <p className={`mt-3 text-sm ${messageStatus.includes("sent") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
              {messageStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Help;