import "./Shipping.css";
import React, { useState } from "react";

const shippingRules = [
  {
    title: "Order Processing",
    content:
      "All orders are processed within 1-2 business days after confirmation. Orders are not processed or shipped on weekends or public holidays. You will receive a confirmation email once your order is successfully processed.",
  },
  {
    title: "Shipping Methods",
    content:
      "We offer standard, express, and priority shipping. Shipping charges may vary depending on order size, weight, and delivery location. Estimated delivery time: Standard 5–7 days, Express 2–3 days, Priority 1–2 days.",
  },
  {
    title: "Tracking Orders",
    content:
      "Once your order is shipped, a tracking number will be emailed. You can track your package via our website or courier service portal. Tracking updates may take 24 hours to reflect after dispatch.",
  },
  {
    title: "Shipping Restrictions",
    content:
      "Currently, we ship to domestic addresses only. Certain items may be subject to special shipping restrictions.",
  },
  {
    title: "Delivery Issues",
    content:
      "Delivery timeframes are estimated and may vary due to weather, carrier delays, or unforeseen circumstances. If your package is lost, delayed, or damaged during shipping, please contact our support team immediately.",
  },
  {
    title: "Address Accuracy",
    content:
      "Please provide a complete and accurate shipping address. We are not responsible for packages delayed or returned due to incorrect addresses.",
  },
  {
    title: "Shipping Charges & Returns",
    content:
      "Shipping charges are non-refundable unless otherwise stated. For returned or undeliverable orders, additional shipping may apply for re-delivery.",
  },
];

const Shipping = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="your-orders-container2">
      <h1>Shipping Rules & Policies</h1>
      <div className="orders-list2">
        {shippingRules.map((rule, index) => (
          <div key={index} className="order-card2"  onClick={() => toggleOpen(index)}>
            <div
              className="order-header2"
              style={{ cursor: "pointer" }}
            >
              <span>{rule.title}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="order-body2">
                <p>{rule.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shipping;
