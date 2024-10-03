import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumeTemplate = ({ formData }) => {
  const resumeRef = useRef();
  const downloadButtonRef = useRef();

  const handleDownload = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div>
      <div
        className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg"
        style={{ width: "210mm", height: "297mm" }}
        ref={resumeRef}
      >
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">{formData.name}</h1>
          <p className="text-lg text-gray-700">
            {formData.email} | {formData.phone}
          </p>
          <p className="text-lg text-gray-700">
            <a href={formData.linkedin} className="text-blue-500">LinkedIn</a>{" "}
            |
            <a href={formData.github} className="text-blue-500 ml-2">GitHub</a>
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <aside className="col-span-1">
            <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
              Career Objectives
            </h2>
            <p className="text-gray-800 mb-8">{formData.objective}</p>

            <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
              Technical Skills
            </h2>
            <ul className="list-inside text-gray-800 mb-8">
              {formData.skills.map((skill, index) => (
                <li key={index}>
                  <strong>{skill.heading}:</strong>
                  <ul className="list-disc list-inside pl-4">
                    {skill.subskills.map((subskill, i) => (
                      <li key={i}>{subskill}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
              Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-800 mb-8">
              {formData.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
              Hobbies
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              {formData.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </aside>

          <section className="col-span-2">
            <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
              Education
            </h2>
            {formData.education.map((edu, index) => (
              <div className="mb-4" key={index}>
                <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
                <p className="text-gray-700">
                  {edu.degree} | {edu.cgpa} CGPA | {edu.year} | {edu.location}
                </p>
              </div>
            ))}

            <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
              Projects
            </h2>
            {formData.projects.map((project, index) => (
              <div className="mb-4" key={index}>
                <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}

            <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
              Achievements
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              {formData.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
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
  );
};

export default ResumeTemplate;
