import "./Atm.css";
import React, { useState } from "react";

const Atm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setMessage("");

    // Trim inputs
    const acc = accountNumber.trim();
    const amt = amount.trim();

    // Validation
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

    // Simulate payment processing
    setLoading(true);
    setTimeout(() => {
      setMessage(`✅ Payment of ₹${numAmount.toFixed(2)} processed successfully!`);
      setAccountNumber("");
      setAmount("");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="atm-container">
      <h1>Pay via ATM</h1>
      <form onSubmit={handlePayment} className="atm-form">
        <label htmlFor="account-number">
          ATM Account Number:
          <input
            id="account-number"
            type="text"
            inputMode="numeric"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 10–16 digit account number"
            aria-describedby="account-help"
            disabled={loading}
          />
        </label>

        <label htmlFor="amount">
          Amount (₹):
          <input
            id="amount"
            type="number"
            min="1"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 500"
            disabled={loading}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>

      {message && (
        <p className="atm-message" aria-live="polite">
          {message}
        </p>
      )}
    </div>
  );
};

export default Atm;