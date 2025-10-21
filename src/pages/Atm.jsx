import React, { useState } from "react";

const Atm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setMessage("");

    const acc = accountNumber.trim();
    const amt = amount.trim();

    if (!acc || !amt) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!/^\d{10,16}$/.test(acc)) {
      setMessage("Account number must be 10–16 digits.");
      return;
    }

    const numAmount = parseFloat(amt);
    if (isNaN(numAmount) || numAmount <= 0) {
      setMessage("Please enter a valid amount greater than ₹0.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setMessage(`✅ Payment of ₹${numAmount.toFixed(2)} processed successfully!`);
      setAccountNumber("");
      setAmount("");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-6 md:p-7 shadow-sm border border-blue-200 dark:border-blue-800/50">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-200 dark:bg-blue-800/50 mb-4 mx-auto">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white">
                Pay via ATM
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2 px-2">
                Secure and instant bank transfer
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-7 border border-gray-200 dark:border-gray-700">
          <form onSubmit={handlePayment} className="space-y-5">
            <div>
              <label htmlFor="account-number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                ATM Account Number
              </label>
              <input
                id="account-number"
                type="text"
                inputMode="numeric"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter 10–16 digit account number"
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Amount (₹)
              </label>
              <input
                id="amount"
                type="number"
                min="1"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g. 500"
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 transform ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              }`}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </form>

          {message && (
            <div
              className={`mt-5 p-3 rounded-xl text-center font-medium ${
                message.startsWith("✅")
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Atm;