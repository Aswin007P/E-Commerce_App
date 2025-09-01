import "./Terms.css";
import React, { useEffect, useState } from "react";

function Terms() {
  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: `By accessing or using our website, you agree to be bound by these Terms and Conditions. 
                If you do not agree, please do not use our services.`,
    },
    {
      id: 2,
      title: "User Responsibilities",
      content: `Users are responsible for maintaining the confidentiality of their account information and ensuring all activities comply with applicable laws. You agree not to misuse the platform.`,
    },
    {
      id: 3,
      title: "Content Ownership",
      content: `All content on this website, including text, images, logos, and software, is the property of the website owner or licensed to it. You may not copy or redistribute content without permission.`,
    },
    {
      id: 4,
      title: "Prohibited Activities",
      content: `Users may not use the website for unlawful purposes, attempt to gain unauthorized access, or distribute malicious software. Any violation may result in account termination.`,
    },
    {
      id: 5,
      title: "Limitation of Liability",
      content: `We are not liable for any direct, indirect, or consequential damages resulting from your use of the website or inability to access it. Use the site at your own risk.`,
    },
    {
      id: 6,
      title: "Modifications",
      content: `We reserve the right to modify these Terms at any time. Updated terms will be effective immediately upon posting. Continued use of the site constitutes acceptance of the updated Terms.`,
    },
    {
      id: 7,
      title: "Governing Law",
      content: `These Terms are governed by the laws of [Your Country/State]. Any disputes arising shall be subject to the jurisdiction of the local courts.`,
    },
    {
      id: 8,
      title: "Contact Us",
      content: `If you have questions regarding these Terms, please reach out to us via our Contact Page.`,
    },
  ];

  // First section open by default
  const [openSection, setOpenSection] = useState(sections[0].id);

  useEffect(() => {
    document.body.classList.add("terms-active");
    return () => {
      document.body.classList.remove("terms-active");
    };
  }, []);

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="terms-container">
      <h2>Terms & Conditions</h2>
      <p>Read carefully before using our website. By using our services, you agree to these terms.</p>

      {sections.map((section) => (
        <div
          className={`terms-section ${openSection === section.id ? "open" : ""}`}
          key={section.id}
          onClick={() => toggleSection(section.id)}
        >
          <h3 >
            {section.title}
          </h3>
          {openSection === section.id && (
            <div className="section-content">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Terms;
