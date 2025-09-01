import "./Advertise.css";
import React, { useEffect, useState } from "react";

function Advertise() {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    targetAudience: "",
    campaignType: "",
    bannerImage: null,
    promotionPlan: "",
  });

  // Add background only on Advertise page
  useEffect(() => {
    document.body.classList.add("advertise-active");
    return () => {
      document.body.classList.remove("advertise-active");
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Advertisement Data:", formData);
    alert("Advertisement submitted successfully!");
    // Here you can connect to backend API
  };

  return (
    <div className="advertise-container">
      <h2>Advertise Your Product</h2>
      <p>Reach your target audience and grow your sales 🚀</p>

      <form className="advertise-form" onSubmit={handleSubmit}>
        <label>
          Product Name
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
            placeholder="Enter product name"
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter product description"
          ></textarea>
        </label>

        <label>
          Target Audience
          <input
            type="text"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            placeholder="e.g., Students, Tech Enthusiasts"
          />
        </label>

        <label>
          Campaign Type
          <select
            name="campaignType"
            value={formData.campaignType}
            onChange={handleChange}
            required
          >
            <option value="">Select campaign type</option>
            <option value="social-media">Social Media</option>
            <option value="email">Email Marketing</option>
            <option value="search-engine">Search Engine Ads</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Banner Image
          <input
            type="file"
            name="bannerImage"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <label>
          Promotion Plan
          <select
            name="promotionPlan"
            value={formData.promotionPlan}
            onChange={handleChange}
          >
            <option value="">Select plan</option>
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </label>

        <button type="submit" className="advertise-btn">
          Submit Advertisement
        </button>
      </form>
    </div>
  );
}

export default Advertise;
