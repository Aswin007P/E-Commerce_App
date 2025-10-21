import Footer from "./Footer";
import Header from "./Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-140px)] bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;