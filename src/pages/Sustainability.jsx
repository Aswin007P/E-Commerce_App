import "./Sustainability.css";
import React from "react";

function Sustainability() {
  const sustainabilityPoints = [
    {
      id: 1,
      title: "Eco-Friendly Hosting",
      description:
        "Our web application is hosted on servers powered by renewable energy, reducing carbon footprint.",
      icon: "🌱",
    },
    {
      id: 2,
      title: "Optimized Performance",
      description:
        "Efficient code and optimized images reduce energy consumption on user devices.",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Minimal Resource Usage",
      description:
        "We implement lazy loading, caching, and clean UI to minimize unnecessary resource usage.",
      icon: "💧",
    },
    {
      id: 4,
      title: "Green Awareness",
      description:
        "We educate users about sustainable digital practices through interactive content.",
      icon: "🌎",
    },
  ];

  return (
    <div className="sustainability-container">
      <div className="sustainability-header">
        <h2>Our Commitment to Sustainability</h2>
        <p>We believe in building a greener, cleaner web 🌍</p>
      </div>

      <div className="sustainability-list">
        {sustainabilityPoints.map((point) => (
          <div className="sustainability-card" key={point.id}>
            <div className="icon">{point.icon}</div>
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sustainability;
