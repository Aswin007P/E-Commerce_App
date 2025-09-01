import "./Blogs.css";
import React, { useEffect, useState } from "react";

function Blogs() {
  const [selectedPost, setSelectedPost] = useState(null);
   useEffect(() => {
    if (selectedPost) {
      document.body.classList.add("modal-open");   // hide header
    } else {
      document.body.classList.remove("modal-open"); // show header
    }
  }, [selectedPost]);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      date: "August 20, 2025",
      description:
        "Explore how AI, Web3, and modern frameworks are shaping the future of web applications.",
      fullContent:
        "Explore how AI, Web3, and modern frameworks are shaping the future of web applications. Developers are now leveraging AI-assisted coding tools, blockchain-based authentication, and immersive UI/UX strategies to create futuristic solutions. The next decade of web development will focus on automation, decentralization, and hyper-personalization.",
      image:
        "https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 2,
      title: "Top 5 UI/UX Trends in 2025",
      date: "August 10, 2025",
      description:
        "A look at the latest design principles, animations, and user experience strategies dominating 2025.",
      fullContent:
        "UI/UX trends in 2025 include immersive 3D design, micro-interactions powered by AI, voice-based navigation, inclusive accessibility-first designs, and advanced motion graphics. Designers are moving towards creating seamless, human-like interactions for better engagement.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Why Full-Stack Developers Are in Demand",
      date: "July 28, 2025",
      description:
        "Companies are hiring full-stack developers at a rapid pace. Let’s understand why they’re valuable.",
      fullContent:
        "Full-stack developers are highly sought after because they can handle both front-end and back-end development. This versatility allows startups and enterprises to reduce costs and improve collaboration. With cloud technologies, DevOps, and AI tools, full-stack engineers are becoming even more indispensable.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
  ];
 return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h1>Our Blogs</h1>
        <p>Insights, tutorials, and the latest trends in tech 🚀</p>
      </div>

      <div className="blogs-list">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <span className="blog-date">{post.date}</span>
              <p>{post.description}</p>
              <button
                className="read-btn"
                onClick={() => setSelectedPost(post)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelectedPost(null)}>
              ✖
            </button>
            <img src={selectedPost.image} alt={selectedPost.title} />
            <h2>{selectedPost.title}</h2>
            <span className="blog-date">{selectedPost.date}</span>
            <p>{selectedPost.fullContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
