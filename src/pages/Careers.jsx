import "./Carrers.css";
import React, { useEffect, useState } from "react";

function Careers() {
  const jobs = [
    { id: 1, title: "Frontend Developer", location: "Remote" },
    { id: 2, title: "Backend Developer", location: "Bangalore" },
    { id: 3, title: "UI/UX Designer", location: "Hyderabad" },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  // Hide header when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showForm]);

  return (
    <div className="careers-container">
      <div className="careers-header">
        <h1>Join Our Team</h1>
        <p>We’re always looking for talented people to grow with us 🚀</p>
      </div>

      <div className="career-list">
        {jobs.map((job) => (
          <div className="career-card" key={job.id}>
            <h3>{job.title}</h3>
            <p>📍 {job.location}</p>
            <button
              className="apply-btn"
              onClick={() => handleApplyClick(job)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal Popup Form */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseForm}>
              ✖
            </span>
            <h2>Apply for {selectedJob?.title}</h2>
            <form className="apply-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Your Phone" required />
              <textarea placeholder="Why should we hire you?" required />
              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;
