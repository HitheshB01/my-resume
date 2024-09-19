import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumeFormGPT = () => {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    linkedin: "",
    github: "",
    objectives: "",
    skills: "",
    responsibilities: "",
    hobbies: "",
    education: "",
    projects: "",
    achievements: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const resumeRef = useRef();
  const downloadButtonRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownload = () => {
    const input = resumeRef.current;
    const button = downloadButtonRef.current;

    // Hide the download button
    button.style.display = "none";

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");

      // Show the download button again
      button.style.display = "block";
    });
  };

  return (
    <div className="p-8">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={resumeData.name}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={resumeData.email}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>LinkedIn:</label>
            <input
              type="text"
              name="linkedin"
              value={resumeData.linkedin}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>GitHub:</label>
            <input
              type="text"
              name="github"
              value={resumeData.github}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Objectives:</label>
            <textarea
              name="objectives"
              value={resumeData.objectives}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Skills:</label>
            <textarea
              name="skills"
              value={resumeData.skills}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Responsibilities:</label>
            <textarea
              name="responsibilities"
              value={resumeData.responsibilities}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label>Hobbies:</label>
            <textarea
              name="hobbies"
              value={resumeData.hobbies}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label>Education:</label>
            <textarea
              name="education"
              value={resumeData.education}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Projects:</label>
            <textarea
              name="projects"
              value={resumeData.projects}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Achievements:</label>
            <textarea
              name="achievements"
              value={resumeData.achievements}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Generate Resume
          </button>
        </form>
      ) : (
        <div>
          <div
            className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg"
            style={{ width: "210mm", height: "297mm" }}
            ref={resumeRef}
          >
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold text-blue-900">{resumeData.name}</h1>
              <p className="text-lg text-gray-700">{resumeData.email}</p>
              <p className="text-lg text-gray-700">
                <a href={resumeData.linkedin} className="text-blue-500">LinkedIn</a> |
                <a href={resumeData.github} className="text-blue-500 ml-2">GitHub</a>
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <aside className="col-span-1">
                <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
                  Career Objectives
                </h2>
                <p className="text-gray-800 mb-8">{resumeData.objectives}</p>

                <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
                  Technical Skills
                </h2>
                <p className="text-gray-800 mb-8">{resumeData.skills}</p>

                <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
                  Responsibilities
                </h2>
                <p className="text-gray-800 mb-8">{resumeData.responsibilities}</p>

                <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
                  Hobbies
                </h2>
                <p className="text-gray-800 mb-8">{resumeData.hobbies}</p>
              </aside>

              <section className="col-span-2">
                <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
                  Education
                </h2>
                <p className="text-gray-800 mb-8">{resumeData.education}</p>

                <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
                  Projects
                </h2>
                <p className="text-gray-800 mb-8">{resumeData.projects}</p>

                <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
                  Achievements
                </h2>
                <p className="text-gray-800 mb-8">{resumeData.achievements}</p>
              </section>
            </div>

            <button
              ref={downloadButtonRef}
              onClick={handleDownload}
              className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeFormGPT;
