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

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showForm]);

  return (
    <div className="min-h-screen py-12 px-4">
      {/* Sky Blue Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-6 md:p-7 shadow-sm border border-blue-200 dark:border-blue-800/50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-200 dark:bg-blue-800/50 mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
              Join Our Team
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
              We’re always looking for talented people to grow with us 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{job.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">📍 {job.location}</p>
              <button
                onClick={() => handleApplyClick(job)}
                className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition shadow-md"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md p-6 border border-gray-200 dark:border-gray-700 relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Apply for {selectedJob?.title}
            </h2>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Your Phone"
                required
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                placeholder="Why should we hire you?"
                required
                rows="3"
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition"
              >
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