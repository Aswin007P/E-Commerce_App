import React, { useState } from "react";

// Terms.jsx

function Terms() {
  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: `By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.`,
    },
    {
      id: 2,
      title: "User Responsibilities",
      content: `Users are responsible for maintaining the confidentiality of their account information and ensuring all activities comply with applicable laws. You agree not to misuse the platform.`,
    },
    {
      id: 3,
      title: "Content Ownership",
      content: `All content on this website, including text, images, logos, and software, is the property of the website owner or licensed to it. You may not copy or redistribute content without permission.`,
    },
    {
      id: 4,
      title: "Prohibited Activities",
      content: `Users may not use the website for unlawful purposes, attempt to gain unauthorized access, or distribute malicious software. Any violation may result in account termination.`,
    },
    {
      id: 5,
      title: "Limitation of Liability",
      content: `We are not liable for any direct, indirect, or consequential damages resulting from your use of the website or inability to access it. Use the site at your own risk.`,
    },
    {
      id: 6,
      title: "Modifications",
      content: `We reserve the right to modify these Terms at any time. Updated terms will be effective immediately upon posting. Continued use of the site constitutes acceptance of the updated Terms.`,
    },
    {
      id: 7,
      title: "Governing Law",
      content: `These Terms are governed by the laws of [Your Country/State]. Any disputes arising shall be subject to the jurisdiction of the local courts.`,
    },
    {
      id: 8,
      title: "Contact Us",
      content: `If you have questions regarding these Terms, please reach out to us via our Contact Page.`,
    },
  ];

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Sky-Blue Header */}
      <div className="mb-10">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/40 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Terms & Conditions
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center px-2">
          Read carefully before using our website. By using our services, you agree to these terms.
        </p>

        {sections.map((section) => (
          <div
            key={section.id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 transition"
          >
            <button
              className="w-full px-6 py-5 text-left font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 flex justify-between items-center focus:outline-none"
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
              <span className="text-xl text-gray-500 dark:text-gray-400">
                {openSection === section.id ? '−' : '+'}
              </span>
            </button>
            {openSection === section.id && (
              <div className="px-6 pb-5 pt-2 text-gray-600 dark:text-gray-300">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Terms;