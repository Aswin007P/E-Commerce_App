import React, { useEffect, useState } from "react";

function Blogs() {
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    if (selectedPost) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedPost]);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      date: "August 20, 2025",
      description: "Explore how AI, Web3, and modern frameworks are shaping the future of web applications.",
      fullContent: "Explore how AI, Web3, and modern frameworks are shaping the future of web applications. Developers are now leveraging AI-assisted coding tools, blockchain-based authentication, and immersive UI/UX strategies to create futuristic solutions. The next decade of web development will focus on automation, decentralization, and hyper-personalization.",
      image: "https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    },
    {
      id: 2,
      title: "Top 5 UI/UX Trends in 2025",
      date: "August 10, 2025",
      description: "A look at the latest design principles, animations, and user experience strategies dominating 2025.",
      fullContent: "UI/UX trends in 2025 include immersive 3D design, micro-interactions powered by AI, voice-based navigation, inclusive accessibility-first designs, and advanced motion graphics. Designers are moving towards creating seamless, human-like interactions for better engagement.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Why Full-Stack Developers Are in Demand",
      date: "July 28, 2025",
      description: "Companies are hiring full-stack developers at a rapid pace. Let’s understand why they’re valuable.",
      fullContent: "Full-stack developers are highly sought after because they can handle both front-end and back-end development. This versatility allows startups and enterprises to reduce costs and improve collaboration. With cloud technologies, DevOps, and AI tools, full-stack engineers are becoming even more indispensable.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Sky Blue Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-6 md:p-7 shadow-sm border border-blue-200 dark:border-blue-800/50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-200 dark:bg-blue-800/50 mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
              Our Blogs
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
              Insights, tutorials, and the latest trends in tech 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">{post.date}</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.description}</p>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="float-right text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl mb-2"
            >
              ✖
            </button>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedPost.title}</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400 block mb-4">{selectedPost.date}</span>
            <p className="text-gray-700 dark:text-gray-300">{selectedPost.fullContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;