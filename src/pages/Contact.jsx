import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert("Thank you for contacting us! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto mb-10">
        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-6 md:p-7 shadow-sm border border-blue-200 dark:border-blue-800/50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-200 dark:bg-blue-800/50 mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white mb-2">
              Contact Us
            </h1>
            <p className="text-gray-600 dark:text-gray-300 px-2">
              We’d love to hear from you! Please fill out the form below.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
              errors.name
                ? "border-red-500 dark:border-red-500"
                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            }`}
          />
          {errors.name && <p className="text-sm text-red-600 dark:text-red-400">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
              errors.email
                ? "border-red-500 dark:border-red-500"
                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            }`}
          />
          {errors.email && <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
              errors.message
                ? "border-red-500 dark:border-red-500"
                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            }`}
          ></textarea>
          {errors.message && <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600 dark:text-gray-400 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@FlipOn.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.74 21 5 16.26 5 10.5V5a2 2 0 012-2z" />
            </svg>
            +91 98765 43210
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;