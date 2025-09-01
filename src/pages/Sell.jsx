import "./Sell.css";
import React, { useEffect, useState } from "react";

function Sell() {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  // ✅ Add body class when component mounts, remove when unmounts
  useEffect(() => {
    document.body.classList.add("sell-active");

    return () => {
      document.body.classList.remove("sell-active");
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
    console.log("Product Data:", formData);
    alert("Product submitted successfully!");
    // No need to touch body here
  };

  return (
    <div className="sell-container">
      <h2>Sell Your Product</h2>
      <p>Fill in the details to list your product for sale 🚀</p>

      <form className="sell-form" onSubmit={handleSubmit}>
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
          Price ($)
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="Enter price"
          />
        </label>

        <label>
          Category
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Living</option>
          </select>
        </label>

        <label>
          Product Image
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="sell-btn">
          Submit Product
        </button>
      </form>
    </div>
  );
}

export default Sell;
