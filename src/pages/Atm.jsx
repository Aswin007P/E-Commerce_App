import "./Atm.css";
import React, { useState } from "react";

const Atm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    // Simple frontend validation
    if (!accountNumber || !amount) {
      setMessage("Please fill in all fields");
      return;
    }

    // Here you can call backend API to record payment
    setMessage(`Payment of ₹${amount} will be processed via ATM.`);
    setAccountNumber("");
    setAmount("");
  };

  return (
    <div className="atm-container">
      <h1>Pay via ATM</h1>
      <form onSubmit={handlePayment} className="atm-form">
        <label>
          ATM Account Number:
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter your account number"
          />
        </label>

        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </label>

        <button type="submit">Pay Now</button>
      </form>
      {message && <p className="atm-message">{message}</p>}
    </div>
  );
};

export default Atm;
