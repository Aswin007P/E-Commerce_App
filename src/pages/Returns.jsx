import "./Return.css";
import React, { useEffect, useRef, useState } from "react";

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
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const newHeights = contentRefs.current.map(ref => ref?.scrollHeight || 0);
    setHeights(newHeights);
  }, []);

  return (
    <div className="refunds-container">
      <h1>Refund & Returns</h1>

      <div className="refund-list">
        {refundPolicies.map((policy, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="refund-card">
              <div
                className={`refund-header ${isOpen ? "open" : ""}`}
                onClick={() => toggleCard(index)}
              >
                <span>{policy.title}</span>
                <span>{isOpen ? "−" : "+"}</span>
              </div>
              <div
                className={`refund-body ${isOpen ? "open" : ""}`}
                ref={(el) => (contentRefs.current[index] = el)}
                style={{ maxHeight: isOpen ? `${heights[index]}px` : "0px" }}
              >
                <p>{policy.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Returns;
