import React, { useState } from "react";
import { Link } from "react-router-dom";

// Privacy.jsx

function Privacy() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sections = [
    { id: 1, title: "Information We Collect", content: "We may collect personal information such as your name, email, phone number, and payment details. We also collect non-personal data such as browsing behavior, IP address, and device information to improve our services." },
    { id: 2, title: "How We Use Your Information", content: "Your information is used to process transactions, improve our platform, personalize your experience, send important updates, and provide customer support. We do not use your data for unrelated purposes without consent." },
    { id: 3, title: "Sharing and Disclosure", content: "We do not sell your personal information. Your data may be shared with trusted service providers or for legal obligations. In cases of mergers or acquisitions, user data may be transferred securely." },
    { id: 4, title: "Cookies and Tracking Technologies", content: "We use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and deliver relevant advertising. You can manage cookies in your browser settings." },
    { id: 5, title: "Data Security", content: "We implement industry-standard security measures, including encryption and access controls, to protect your data against unauthorized access, disclosure, or modification." },
    { id: 6, title: "Your Rights", content: "You have the right to access, correct, or delete your personal data. You can also opt out of certain data processing or marketing communications at any time." },
    { 
      id: 7, 
      title: "Contact Us", 
      content: (
        <>
          If you have any questions or concerns regarding this Privacy Policy, please reach out via our{" "}
          <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
            Contact Page
          </Link>.
        </>
      ) 
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-10">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/40 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
            Privacy Policy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
            Protecting your personal information is our top priority.
          </p>
        </div>
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition"
          >
            <button
              className="w-full px-5 py-4 text-left font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 flex justify-between items-center focus:outline-none"
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
              <span className="text-xl text-gray-500 dark:text-gray-400">
                {openSection === section.id ? '−' : '+'}
              </span>
            </button>
            {openSection === section.id && (
              <div className="px-5 pb-5 pt-2 text-gray-600 dark:text-gray-300">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Privacy;