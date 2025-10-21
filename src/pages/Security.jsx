import React from "react";

// Security.jsx

const Security = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Sky-Blue Header */}
      <div className="mb-10">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/40 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Security
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 text-gray-600 dark:text-gray-300">
        <p className="text-lg text-center mb-8 px-2">
          At FlipOn, your account and data security is our top priority. 
          We take all necessary measures to protect your personal information and 
          provide a safe shopping experience.
        </p>

        {[
          {
            title: "Account Protection",
            content: "We encourage you to create a strong and unique password for your account. Do not share your credentials and enable two-factor authentication (2FA) for enhanced security.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            )
          },
          {
            title: "Payment Security",
            content: "All payments are processed through secure, encrypted channels. We use PCI-compliant payment gateways to ensure your financial information is safe.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            )
          },
          {
            title: "Data Privacy",
            content: "Your personal information is stored securely and is never shared with unauthorized third parties. We comply with all applicable data protection laws.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            )
          },
          {
            title: "Stay Safe Online",
            content: "Be cautious of phishing attempts and suspicious emails. Always log out from your account on public devices and regularly update your password.",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )
          }
        ].map((item, i) => (
          <section 
            key={i} 
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Security;