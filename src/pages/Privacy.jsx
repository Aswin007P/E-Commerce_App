import "./Privacy.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Privacy() {
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    document.body.classList.add("privacy-active");
    return () => {
      document.body.classList.remove("privacy-active");
    };
  }, []);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      content: `We may collect personal information such as your name, email, phone number, and payment details. 
                We also collect non-personal data such as browsing behavior, IP address, and device information to improve our services.`,
    },
    {
      id: 2,
      title: "How We Use Your Information",
      content: `Your information is used to process transactions, improve our platform, personalize your experience, 
                send important updates, and provide customer support. We do not use your data for unrelated purposes without consent.`,
    },
    {
      id: 3,
      title: "Sharing and Disclosure",
      content: `We do not sell your personal information. Your data may be shared with trusted service providers 
                or for legal obligations. In cases of mergers or acquisitions, user data may be transferred securely.`,
    },
    {
      id: 4,
      title: "Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to enhance user experience, analyze website traffic, 
                and deliver relevant advertising. You can manage cookies in your browser settings.`,
    },
    {
      id: 5,
      title: "Data Security",
      content: `We implement industry-standard security measures, including encryption and access controls, 
                to protect your data against unauthorized access, disclosure, or modification.`,
    },
    {
      id: 6,
      title: "Your Rights",
      content: `You have the right to access, correct, or delete your personal data. 
                You can also opt out of certain data processing or marketing communications at any time.`,
    },
    {
      id: 7,
      title: "Contact Us",
      content: (
        <>
          If you have any questions or concerns regarding this Privacy Policy, please reach out via our{" "}
          <Link to="/contact" className="contact-link">
            Contact Page
          </Link>.
        </>
      ),
    },
  ];

  return (
    <div className="privacy-container">
      <h2>Privacy Policy</h2>
      <p>Protecting your personal information is our top priority. Learn how we handle your data below.</p>

      {sections.map((section) => (
        <div
          className={`privacy-section ${openSection === section.id ? "open" : ""}`}
          key={section.id}
          onClick={() => toggleSection(section.id)}
        >
          <h3>
            {section.title} 
          </h3>
          <div className="section-content">
            {openSection === section.id && (
              typeof section.content === "string" ? (
                <p>{section.content}</p>
              ) : (
                <p>{section.content}</p>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Privacy;
