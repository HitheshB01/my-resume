// import React, { useState, useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// const ResumeBuilder = () => {
//   // State to manage form input
//   const [resumeData, setResumeData] = useState({
//     name: "",
//     email: "",
//     linkedin: "",
//     github: "",
//     objectives: "",
//     skills: [{ mainHeading: "", subHeadings: [""] }],
//     education: [
//       { collegeName: "", degree: "", percentage: "", passoutYear: "", location: "" }
//     ],
//     responsibilities: [""],
//     achievements: [""],
//     hobbies: [""],
//     projects: [{ heading: "", description: "" }]
//   });

//   const resumeRef = useRef();
//   const downloadButtonRef = useRef();

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResumeData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle the PDF download
//   const handleDownload = () => {
//     const input = resumeRef.current;
//     const button = downloadButtonRef.current;
//     button.style.display = "none"; // Hide the button during download

//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF({
//         orientation: "portrait",
//         unit: "mm",
//         format: "a4",
//       });
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("resume.pdf");
//       button.style.display = "block"; // Show the button again
//     });
//   };

//   return (
//     <div className="p-8 max-w-6xl mx-auto">
//       {/* Form Section */}
//       <form className="mb-8 space-y-4">
//         <div>
//           <label className="block text-gray-700">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={resumeData.name}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={resumeData.email}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">LinkedIn:</label>
//           <input
//             type="text"
//             name="linkedin"
//             value={resumeData.linkedin}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">GitHub:</label>
//           <input
//             type="text"
//             name="github"
//             value={resumeData.github}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700">Career Objectives:</label>
//           <textarea
//             name="objectives"
//             value={resumeData.objectives}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         {/* Add more input fields for skills, education, responsibilities, projects, etc. */}
//       </form>

//       {/* Resume Template Section */}
//       <div
//         className="bg-white shadow-lg rounded-lg p-8"
//         style={{ width: "210mm", height: "297mm" }}
//         ref={resumeRef}
//       >
//         <header className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-blue-900">{resumeData.name}</h1>
//           <p className="text-lg text-gray-700">{resumeData.email}</p>
//           <p className="text-lg text-gray-700">
//             <a href={resumeData.linkedin} className="text-blue-500">LinkedIn</a> |
//             <a href={resumeData.github} className="text-blue-500 ml-2">GitHub</a>
//           </p>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <aside className="col-span-1">
//             <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//               Career Objectives
//             </h2>
//             <p className="text-gray-800">{resumeData.objectives}</p>

//             {/* Render skills, responsibilities, hobbies */}
//           </aside>

//           <section className="col-span-2">
//             <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//               Education
//             </h2>
//             <div className="mb-4">
//               {/* Render education details */}
//             </div>

//             <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//               Projects
//             </h2>
//             <div className="mb-4">
//               {/* Render projects */}
//             </div>

//             <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//               Achievements
//             </h2>
//             <ul className="list-disc list-inside text-gray-800">
//               {/* Render achievements */}
//             </ul>
//           </section>
//         </div>

//         <button
//           ref={downloadButtonRef}
//           onClick={handleDownload}
//           className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//         >
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;


import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumeBuilder = () => {
  const resumeRef = useRef();
  const downloadButtonRef = useRef();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    objective: "",
    skills: [{ heading: "", subskills: [""] }],
    responsibilities: [""],
    hobbies: [""],
    education: [
      { institution: "", degree: "", cgpa: "", year: "", location: "" }
    ],
    projects: [{ name: "", description: "" }],
    achievements: [""],
  });

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedInputChange = (e, index, field, subField = null) => {
    const { value } = e.target;
    const updatedArray = [...formData[field]];
    if (subField) {
      updatedArray[index][subField] = value;
    } else {
      updatedArray[index] = value;
    }
    setFormData({ ...formData, [field]: updatedArray });
  };

  // Add new field for dynamic fields
  const addField = (field) => {
    const newField =
      field === "skills"
        ? { heading: "", subskills: [""] }
        : field === "education"
        ? { institution: "", degree: "", cgpa: "", year: "", location: "" }
        : field === "projects"
        ? { name: "", description: "" }
        : "";
    setFormData({ ...formData, [field]: [...formData[field], newField] });
  };

  // Handle PDF download
  const handleDownload = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className="p-8">
      {/* Resume Form */}
      <h1 className="text-2xl font-bold mb-4">Fill Your Resume Details</h1>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="border p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="border p-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="border p-2"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={formData.linkedin}
          onChange={handleInputChange}
          className="border p-2"
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub URL"
          value={formData.github}
          onChange={handleInputChange}
          className="border p-2"
        />
        <textarea
          name="objective"
          placeholder="Career Objective"
          value={formData.objective}
          onChange={handleInputChange}
          className="border p-2"
        />
        {/* Dynamic fields for skills, education, etc. */}
        <h2 className="text-lg font-semibold">Technical Skills</h2>
        {formData.skills.map((skill, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Skill Heading"
              value={skill.heading}
              onChange={(e) =>
                handleNestedInputChange(e, index, "skills", "heading")
              }
              className="border p-2"
            />
            <textarea
              placeholder="Subskills (comma separated)"
              value={skill.subskills.join(", ")}
              onChange={(e) =>
                handleNestedInputChange(e, index, "skills", "subskills")
              }
              className="border p-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField("skills")}
          className="bg-blue-500 text-white py-1 px-4 rounded"
        >
          Add Skill
        </button>
        <h2 className="text-lg font-semibold">Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index} className="grid grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) =>
                handleNestedInputChange(e, index, "education", "institution")
              }
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                handleNestedInputChange(e, index, "education", "degree")
              }
              className="border p-2"
            />
            <input
              type="text"
              placeholder="CGPA/Percentage"
              value={edu.cgpa}
              onChange={(e) =>
                handleNestedInputChange(e, index, "education", "cgpa")
              }
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Year of Completion"
              value={edu.year}
              onChange={(e) =>
                handleNestedInputChange(e, index, "education", "year")
              }
              className="border p-2"
            />
            <input
              type="text"
              placeholder="Location"
              value={edu.location}
              onChange={(e) =>
                handleNestedInputChange(e, index, "education", "location")
              }
              className="border p-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => addField("education")}
          className="bg-blue-500 text-white py-1 px-4 rounded"
        >
          Add Education
        </button>

        <button
          ref={downloadButtonRef}
          onClick={handleDownload}
          className="bg-green-500 text-white py-2 px-4 rounded mt-4"
        >
          Download Resume as PDF
        </button>
      </div>

      {/* Resume Template */}
      <div
        className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8"
        style={{ width: "210mm", height: "297mm" }}
        ref={resumeRef}
      >
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">{formData.name}</h1>
          <p className="text-lg text-gray-700">
            {formData.email} | {formData.phone}
          </p>
          <p className="text-lg text-gray-700">
            <a href={formData.linkedin} className="text-blue-500">
              LinkedIn
            </a>{" "}
            |
            <a href={formData.github} className="text-blue-500 ml-2">
              GitHub
            </a>
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
          </aside>

          <section className="col-span-2">
            <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
              Education
            </h2>
            {formData.education.map((edu, index) => (
              <div className="mb-4" key={index}>
                <h3 className="text-xl font-bold text-gray-800">
                  {edu.institution}
                </h3>
                <p className="text-gray-700">
                  {edu.degree} | {edu.cgpa} CGPA | {edu.year} | {edu.location}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
