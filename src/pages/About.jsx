import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-20 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          At{" "}
          <strong className="text-blue-600 dark:text-blue-400">FlipOn</strong>
          , we’re redefining the way people shop online. Our mission is to provide a smooth, secure, and joyful shopping experience for everyone.
        </motion.p>
      </motion.section>

      {/* Mission */}
      <motion.section
        className="mb-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          🌟 Our Mission
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          variants={itemVariants}
        >
          To deliver the best shopping experience by combining technology, quality products, and reliable service.
        </motion.p>
      </motion.section>

      {/* What We Offer */}
      <motion.section
        className="mb-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          🛍️ What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Wide Range of Products",
            "Fast & Reliable Delivery",
            "Secure Transactions",
            "24/7 Customer Support",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-md dark:hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <p className="font-medium text-gray-900 dark:text-white">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team */}
      <motion.section
        className="mb-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          👥 Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Aswin", role: "Founder & Developer", img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg" },
            { name: "Riya", role: "UI/UX Designer", img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg" },
            { name: "Karan", role: "Marketing Lead", img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg" },
          ].map((member, i) => (
            <motion.div
              key={i}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative inline-block">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover mx-auto mb-5 border-4 border-white dark:border-gray-700 shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          📩 Get in Touch
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          Have questions or suggestions? Visit our{" "}
          <Link
            to="/contact"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors"
          >
            Contact Page
          </Link>
          .
        </motion.p>
      </motion.section>
    </div>
  );
};

export default About;