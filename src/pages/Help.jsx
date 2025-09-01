import "./Help.css";
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
    <div className="help-container">
      <h1>Help & Support</h1>

      <div className="faq-section">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleSection(index)}
            >
              {item.question}
              <span>{openSection === index ? "-" : "+"}</span>
            </div>
            {openSection === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* User Message Box */}
      <div className="user-message-box">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSendMessage}>
          <textarea
            placeholder="Type your message here..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {messageStatus && <p className="message-status">{messageStatus}</p>}
      </div>
    </div>
  );
};

export default Help;
