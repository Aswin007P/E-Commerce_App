import "./About.css";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            At <strong>FlipOn</strong>, we’re redefining the way people shop online.
            Our mission is to provide a smooth, secure, and joyful shopping
            experience for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission">
        <h2>🌟 Our Mission</h2>
        <p>
          To deliver the best shopping experience by combining technology,
          quality products, and reliable service.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="section offers">
        <h2>🛍️ What We Offer</h2>
        <div className="cards">
          <div className="card">Wide Range of Products</div>
          <div className="card">Fast & Reliable Delivery</div>
          <div className="card">Secure Transactions</div>
          <div className="card">24/7 Customer Support</div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team">
        <h2>👥 Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-member">
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"
              alt="Team member"
            />
            <h3>Aswin</h3>
            <p>Founder & Developer</p>
          </div>
          <div className="team-member">
            <img
              src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg"
              alt="Team member"
            />
            <h3>Riya</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
              alt="Team member"
            />
            <h3>Karan</h3>
            <p>Marketing Lead</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <h2>📩 Get in Touch</h2>
        <p>
          Have questions or suggestions? Visit our{" "}
          <Link to="/contact">Contact Page</Link>. 
        </p>
      </section>
    </div>
  );
};

export default About;
