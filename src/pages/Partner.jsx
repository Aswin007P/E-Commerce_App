import "./Partner.css";
import React, { useState } from "react";
import { FaChartLine, FaDollarSign, FaHandshake, FaTools } from "react-icons/fa";

function Partner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We will contact you soon.");
    setFormData({ name: "", email: "", website: "", message: "" });
  };

  return (
    <div className="partner-page">
      {/* Hero Section */}
      <section className="partner-hero">
        <h1>Become a Partner</h1>
        <p>
          Join our modern partner program and earn commissions by promoting our products.
          Fast, simple, and rewarding!
        </p>
        <button onClick={() => document.getElementById("partnerForm").scrollIntoView({ behavior: 'smooth' })}>
          Join Now
        </button>
      </section>

      {/* Features Section */}
      <section className="partner-features">
        <div className="feature-card">
          <FaDollarSign className="feature-icon"/>
          <h3>Competitive Commissions</h3>
          <p>Earn a generous share from every sale generated through your links.</p>
        </div>
        <div className="feature-card">
          <FaTools className="feature-icon"/>
          <h3>Marketing Tools</h3>
          <p>Access banners, links, and content to promote products effectively.</p>
        </div>
        <div className="feature-card">
          <FaChartLine className="feature-icon"/>
          <h3>Analytics Dashboard</h3>
          <p>Track referrals and performance with real-time reports.</p>
        </div>
        <div className="feature-card">
          <FaHandshake className="feature-icon"/>
          <h3>Dedicated Support</h3>
          <p>Our team is here to help you succeed as a partner.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="partner-form-section" id="partnerForm">
        <h2>Sign Up to Become a Partner</h2>
        <form className="partner-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="website"
            placeholder="Website or Social Profile"
            value={formData.website}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Why do you want to join?"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Join Now</button>
        </form>
      </section>
    </div>
  );
}

export default Partner;
