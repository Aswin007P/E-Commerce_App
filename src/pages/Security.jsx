import "./Security.css";
import React from "react";
import { useEffect } from "react";

// src/pages/Security.jsx

const Security = () => {
  return (
    <div className="security-page">
      <h1>Security</h1>
      <p>
        At FlipOn, your account and data security is our top priority. 
        We take all necessary measures to protect your personal information and 
        provide a safe shopping experience.
      </p>

      <h2>Account Protection</h2>
      <p>
        We encourage you to create a strong and unique password for your account. 
        Do not share your credentials and enable two-factor authentication (2FA) 
        for enhanced security.
      </p>

      <h2>Payment Security</h2>
      <p>
        All payments are processed through secure, encrypted channels. We use 
        PCI-compliant payment gateways to ensure your financial information is safe.
      </p>

      <h2>Data Privacy</h2>
      <p>
        Your personal information is stored securely and is never shared with 
        unauthorized third parties. We comply with all applicable data protection laws.
      </p>

      <h2>Stay Safe Online</h2>
      <p>
        Be cautious of phishing attempts and suspicious emails. Always log out 
        from your account on public devices and regularly update your password.
      </p>
    </div>
  );
};

export default Security;
