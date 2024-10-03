// import React, { useRef, useState } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// const ResumeFormGPT = () => {
//   // const [resumeData, setResumeData] = useState({
//   //   name: "",
//   //   email: "",
//   //   linkedin: "",
//   //   github: "",
//   //   objectives: "",
//   //   skills: "",
//   //   responsibilities: "",
//   //   hobbies: "",
//   //   education: "",
//   //   projects: "",
//   //   achievements: ""
//   // });
//   const [resumeData, setResumeData] = useState({
//     name: "",
//     email: "",
//     linkedin: "",
//     github: "",
//     objectives: "",
//     skills: [{ mainHeading: "", subHeadings: [""] }],
//     education: [{ collegeName: "", degree: "", percentage: "", passoutYear: "", location: "" }],
//     responsibilities: [""],
//     achievements: [""],
//     hobbies: [""],
//     projects: [{ heading: "", description: "" }],
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const resumeRef = useRef();
//   const downloadButtonRef = useRef();

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setResumeData((prevData) => ({ ...prevData, [name]: value }));
//   // };
//   const handleChange = (e, index, section, subIndex = null) => {
//     const { name, value } = e.target;

//     if (section === "skills") {
//       const updatedSkills = [...resumeData.skills];
//       if (subIndex === null) {
//         updatedSkills[index].mainHeading = value;
//       } else {
//         updatedSkills[index].subHeadings[subIndex] = value;
//       }
//       setResumeData((prevData) => ({ ...prevData, skills: updatedSkills }));
//     } else if (section === "education") {
//       const updatedEducation = [...resumeData.education];
//       updatedEducation[index][name] = value;
//       setResumeData((prevData) => ({ ...prevData, education: updatedEducation }));
//     } else if (section === "responsibilities" || section === "achievements" || section === "hobbies") {
//       const updatedArray = [...resumeData[section]];
//       updatedArray[index] = value;
//       setResumeData((prevData) => ({ ...prevData, [section]: updatedArray }));
//     } else if (section === "projects") {
//       const updatedProjects = [...resumeData.projects];
//       updatedProjects[index][name] = value;
//       setResumeData((prevData) => ({ ...prevData, projects: updatedProjects }));
//     }
//   };

//   const addMoreFields = (section) => {
//     const updatedArray = [...resumeData[section]];
//     if (section === "skills") {
//       updatedArray.push({ mainHeading: "", subHeadings: [""] });
//     } else if (section === "education") {
//       updatedArray.push({ collegeName: "", degree: "", percentage: "", passoutYear: "", location: "" });
//     } else if (section === "responsibilities" || section === "achievements" || section === "hobbies") {
//       updatedArray.push("");
//     } else if (section === "projects") {
//       updatedArray.push({ heading: "", description: "" });
//     }
//     setResumeData((prevData) => ({ ...prevData, [section]: updatedArray }));
//   };

//   const addSubHeading = (index) => {
//     const updatedSkills = [...resumeData.skills];
//     updatedSkills[index].subHeadings.push("");
//     setResumeData((prevData) => ({ ...prevData, skills: updatedSkills }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const handleDownload = () => {
//     const input = resumeRef.current;
//     const button = downloadButtonRef.current;

//     // Hide the download button
//     button.style.display = "none";

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

//       // Show the download button again
//       button.style.display = "block";
//     });
//   };
//   // onSubmit={handleSubmit}
//   return (
//     <div className="p-8">
//       {!submitted ? (
//         // <form onSubmit={handleSubmit} className="space-y-4">
//         //   <div>
//         //     <label>Name:</label>
//         //     <input
//         //       type="text"
//         //       name="name"
//         //       value={resumeData.name}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //       required
//         //     />
//         //   </div>
//         //   <div>
//         //     <label>Email:</label>
//         //     <input
//         //       type="email"
//         //       name="email"
//         //       value={resumeData.email}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //       required
//         //     />
//         //   </div>
//         //   <div>
//         //     <label>LinkedIn:</label>
//         //     <input
//         //       type="text"
//         //       name="linkedin"
//         //       value={resumeData.linkedin}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //       required
//         //     />
//         //   </div>
//         //   <div>
//         //     <label>GitHub:</label>
//         //     <input
//         //       type="text"
//         //       name="github"
//         //       value={resumeData.github}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //       required
//         //     />
//         //   </div>
//         //   <div>
//         //     <label>Objectives:</label>
//         //     <textarea
//         //       name="objectives"
//         //       value={resumeData.objectives}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //       required
//         //     />
//         //   </div>
//         //   <div>
//         //     <label>Skills:</label>
//         //     <textarea
//         //       name="skills"
//         //       value={resumeData.skills}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //       required
//         //     />
//         //   </div>
//         //   <div>
//         //     <label>Responsibilities:</label>
//         //     <textarea
//         //       name="responsibilities"
//         //       value={resumeData.responsibilities}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //     />
//         //   </div>
//         //   <div>
//         //     <label>Hobbies:</label>
//         //     <textarea
//         //       name="hobbies"
//         //       value={resumeData.hobbies}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //     />
//         //   </div>
//         //   <div>
//         //     <label>Education:</label>
//         //     <textarea
//         //       name="education"
//         //       value={resumeData.education}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //       required
//         //     />
//         //   </div>
//         //   <div>
//         //     <label>Projects:</label>
//         //     <textarea
//         //       name="projects"
//         //       value={resumeData.projects}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //       required
//         //     />
//         //   </div>
//         //   <div>
//         //     <label>Achievements:</label>
//         //     <textarea
//         //       name="achievements"
//         //       value={resumeData.achievements}
//         //       onChange={handleChange}
//         //       className="border p-2 w-full"
//         //       required
//         //     />
//         //   </div>
//         //   <button
//         //     type="submit"
//         //     className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//         //   >
//         //     Generate Resume
//         //   </button>
//         // </form>

//         <form onSubmit={handleSubmit} className="space-y-4">

//         <div>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={resumeData.name}
//                 onChange={handleChange}
//                 className="border p-2 w-full"
//                 // required
//               />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 // value={resumeData.email}
//                 value={resumeData.email}
//                 onChange={handleChange}
//                 className="border p-2 w-full"
//                 // required
//               />
//             </div>
//             <div>
//               <label>LinkedIn:</label>
//               <input
//                 type="text"
//                 name="linkedin"
//                 value={resumeData.linkedin}
//                 onChange={handleChange}
//                 className="border p-2 w-full"
//                 // required
//               />
//             </div>
//             <div>
//               <label>GitHub:</label>
//               <input
//                 type="text"
//                 name="github"
//                 value={resumeData.github}
//                 onChange={handleChange}
//                 className="border p-2 w-full"
//                 // required
//               />
//             </div>
//             <div>
//               <label>Objectives:</label>
//               <textarea
//                 name="objectives"
//                 value={resumeData.objectives}
//                 onChange={handleChange}
//                 className="border p-2 w-full"
//                 // required
//               />
//             </div>
//           {/* Technical Skills */}
//           <div>
//             <h3>Technical Skills:</h3>
//             {resumeData.skills.map((skill, index) => (
//               <div key={index} className="space-y-2">
//                 <input
//                   type="text"
//                   placeholder="Main Heading"
//                   value={skill.mainHeading}
//                   onChange={(e) => handleChange(e, index, "skills", null)}
//                   className="border p-2 w-full"
//                   required
//                 />
//                 {skill.subHeadings.map((sub, subIndex) => (
//                   <input
//                     key={subIndex}
//                     type="text"
//                     placeholder="Subheading"
//                     value={sub}
//                     onChange={(e) => handleChange(e, index, "skills", subIndex)}
//                     className="border p-2 w-full"
//                   />
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() => addSubHeading(index)}
//                   className="bg-green-500 text-white py-1 px-2 rounded"
//                 >
//                   Add Subheading
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => addMoreFields("skills")}
//               className="bg-blue-500 text-white py-2 px-4 rounded"
//             >
//               Add More Skills
//             </button>
//           </div>
  
//           {/* Education */}
//           <div>
//             <h3>Education:</h3>
//             {resumeData.education.map((edu, index) => (
//               <div key={index} className="space-y-2">
//                 <input
//                   type="text"
//                   placeholder="College Name"
//                   name="collegeName"
//                   value={edu.collegeName}
//                   onChange={(e) => handleChange(e, index, "education")}
//                   className="border p-2 w-full"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Degree"
//                   name="degree"
//                   value={edu.degree}
//                   onChange={(e) => handleChange(e, index, "education")}
//                   className="border p-2 w-full"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Percentage/CGPA"
//                   name="percentage"
//                   value={edu.percentage}
//                   onChange={(e) => handleChange(e, index, "education")}
//                   className="border p-2 w-full"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Year of Passout"
//                   name="passoutYear"
//                   value={edu.passoutYear}
//                   onChange={(e) => handleChange(e, index, "education")}
//                   className="border p-2 w-full"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   name="location"
//                   value={edu.location}
//                   onChange={(e) => handleChange(e, index, "education")}
//                   className="border p-2 w-full"
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => addMoreFields("education")}
//               className="bg-blue-500 text-white py-2 px-4 rounded"
//             >
//               Add More Education
//             </button>
//           </div>
  
//           {/* Responsibilities */}
//           <div>
//             <h3>Responsibilities:</h3>
//             {resumeData.responsibilities.map((resp, index) => (
//               <div key={index} className="space-y-2">
//                 <input
//                   type="text"
//                   placeholder="Responsibility"
//                   value={resp}
//                   onChange={(e) => handleChange(e, index, "responsibilities")}
//                   className="border p-2 w-full"
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => addMoreFields("responsibilities")}
//               className="bg-blue-500 text-white py-2 px-4 rounded"
//             >
//               Add More Responsibilities
//             </button>
//           </div>
  
//           {/* Achievements */}
//           <div>
//             <h3>Achievements:</h3>
//             {resumeData.achievements.map((ach, index) => (
//               <div key={index} className="space-y-2">
//                 <input
//                   type="text"
//                   placeholder="Achievement"
//                   value={ach}
//                   onChange={(e) => handleChange(e, index, "achievements")}
//                   className="border p-2 w-full"
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => addMoreFields("achievements")}
//               className="bg-blue-500 text-white py-2 px-4 rounded"
//             >
//               Add More Achievements
//             </button>
//           </div>
  
//           {/* Hobbies */}
//           <div>
//             <h3>Hobbies:</h3>
//             {resumeData.hobbies.map((hobby, index) => (
//               <div key={index} className="space-y-2">
//                 <input
//                   type="text"
//                   placeholder="Hobby"
//                   value={hobby}
//                   onChange={(e) => handleChange(e, index, "hobbies")}
//                   className="border p-2 w-full"
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => addMoreFields("hobbies")}
//               className="bg-blue-500 text-white py-2 px-4 rounded"
//             >
//               Add More Hobbies
//             </button>
//           </div>
  
//           {/* Projects */}
//           <div>
//             <h3>Projects:</h3>
//             {resumeData.projects.map((project, index) => (
//               <div key={index} className="space-y-2">
//                 <input
//                   type="text"
//                   placeholder="Project Heading"
//                   name="heading"
//                   value={project.heading}
//                   onChange={(e) => handleChange(e, index, "projects")}
//                   className="border p-2 w-full"
//                   required
//                 />
//                 <textarea
//                   placeholder="Project Description"
//                   name="description"
//                   value={project.description}
//                   onChange={(e) => handleChange(e, index, "projects")}
//                   className="border p-2 w-full"
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => addMoreFields("projects")}
//               className="bg-blue-500 text-white py-2 px-4 rounded"
//             >
//               Add More Projects
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//           >
//             Generate Resume
//           </button>
//         </form>
//       ) : (
//         <div>
//           <div
//             className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg"
//             style={{ width: "210mm", height: "297mm" }}
//             ref={resumeRef}
//           >
//             <header className="text-center mb-8">
//               <h1 className="text-4xl font-bold text-blue-900">{resumeData.name}</h1>
//               <p className="text-lg text-gray-700">{resumeData.email}</p>
//               <p className="text-lg text-gray-700">
//                 <a href={resumeData.linkedin} className="text-blue-500">LinkedIn</a> |
//                 <a href={resumeData.github} className="text-blue-500 ml-2">GitHub</a>
//               </p>
//             </header>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <aside className="col-span-1">
//                 <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//                   Career Objectives
//                 </h2>
//                 <p className="text-gray-800 mb-8">{resumeData.objectives}</p>

//                 <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//                   Technical Skills
//                 </h2>
//                 <p className="text-gray-800 mb-8">{resumeData.skills}</p>

//                 <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//                   Responsibilities
//                 </h2>
//                 <p className="text-gray-800 mb-8">{resumeData.responsibilities}</p>

//                 <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//                   Hobbies
//                 </h2>
//                 <p className="text-gray-800 mb-8">{resumeData.hobbies}</p>
//               </aside>

//               <section className="col-span-2">
//                 <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//                   Education
//                 </h2>
//                 <p className="text-gray-800 mb-8">{resumeData.education}</p>

//                 <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//                   Projects
//                 </h2>
//                 <p className="text-gray-800 mb-8">{resumeData.projects}</p>

//                 <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
//                   Achievements
//                 </h2>
//                 <p className="text-gray-800 mb-8">{resumeData.achievements}</p>
//               </section>
//             </div>

//             <button
//               ref={downloadButtonRef}
//               onClick={handleDownload}
//               className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//             >
//               Download PDF
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResumeFormGPT;


import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumeFormGPT = () => {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    objectives: "",
    skills: [{ mainHeading: "", subHeadings: [""] }],
    education: [{ collegeName: "", degree: "", percentage: "", passoutYear: "", location: "" }],
    responsibilities: [""],
    achievements: [""],
    hobbies: [""],
    projects: [{ heading: "", description: "" }],
  });
  const [submitted, setSubmitted] = useState(false);
  const resumeRef = useRef();
  const downloadButtonRef = useRef();

  const handleChange = (e, index, section, subIndex = null) => {
    const { name, value } = e.target;

    if (section === "skills") {
      const updatedSkills = [...resumeData.skills];
      if (subIndex === null) {
        updatedSkills[index].mainHeading = value;
      } else {
        updatedSkills[index].subHeadings[subIndex] = value;
      }
      setResumeData((prevData) => ({ ...prevData, skills: updatedSkills }));
    } else if (section === "education") {
      const updatedEducation = [...resumeData.education];
      updatedEducation[index][name] = value;
      setResumeData((prevData) => ({ ...prevData, education: updatedEducation }));
    } else if (section === "responsibilities" || section === "achievements" || section === "hobbies") {
      const updatedArray = [...resumeData[section]];
      updatedArray[index] = value;
      setResumeData((prevData) => ({ ...prevData, [section]: updatedArray }));
    } else if (section === "projects") {
      const updatedProjects = [...resumeData.projects];
      updatedProjects[index][name] = value;
      setResumeData((prevData) => ({ ...prevData, projects: updatedProjects }));
    } else {
      setResumeData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const addMoreFields = (section) => {
    const updatedArray = [...resumeData[section]];
    if (section === "skills") {
      updatedArray.push({ mainHeading: "", subHeadings: [""] });
    } else if (section === "education") {
      updatedArray.push({ collegeName: "", degree: "", percentage: "", passoutYear: "", location: "" });
    } else if (section === "responsibilities" || section === "achievements" || section === "hobbies") {
      updatedArray.push("");
    } else if (section === "projects") {
      updatedArray.push({ heading: "", description: "" });
    }
    setResumeData((prevData) => ({ ...prevData, [section]: updatedArray }));
  };

  const addSubHeading = (index) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index].subHeadings.push("");
    setResumeData((prevData) => ({ ...prevData, skills: updatedSkills }));
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
              onChange={(e) => handleChange(e, null, "name")}
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
              onChange={(e) => handleChange(e, null, "email")}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Phone no:</label>
            <input
              type="phone"
              name="phone"
              value={resumeData.phone}
              onChange={(e) => handleChange(e, null, "phone")}
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
              onChange={(e) => handleChange(e, null, "linkedin")}
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
              onChange={(e) => handleChange(e, null, "github")}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label>Objectives:</label>
            <textarea
              name="objectives"
              value={resumeData.objectives}
              onChange={(e) => handleChange(e, null, "objectives")}
              className="border p-2 w-full"
              required
            />
          </div>

          {/* Technical Skills */}
          <div>
            <h3>Technical Skills:</h3>
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  placeholder="Main Heading"
                  value={skill.mainHeading}
                  onChange={(e) => handleChange(e, index, "skills")}
                  className="border p-2 w-full"
                  required
                />
                {skill.subHeadings.map((sub, subIndex) => (
                  <input
                    key={subIndex}
                    type="text"
                    placeholder="Subheading"
                    value={sub}
                    onChange={(e) => handleChange(e, index, "skills", subIndex)}
                    className="border p-2 w-full"
                  />
                ))}
                <button
                  type="button"
                  onClick={() => addSubHeading(index)}
                  className="bg-green-500 text-white py-1 px-2 rounded"
                >
                  Add Subheading
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addMoreFields("skills")}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add More Skills
            </button>
          </div>

          {/* Education */}
          <div>
            <h3>Education:</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  placeholder="College Name"
                  name="collegeName"
                  value={edu.collegeName}
                  onChange={(e) => handleChange(e, index, "education")}
                  className="border p-2 w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Degree"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(e, index, "education")}
                  className="border p-2 w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Percentage/CGPA"
                  name="percentage"
                  value={edu.percentage}
                  onChange={(e) => handleChange(e, index, "education")}
                  className="border p-2 w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Year of Passout"
                  name="passoutYear"
                  value={edu.passoutYear}
                  onChange={(e) => handleChange(e, index, "education")}
                  className="border p-2 w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={edu.location}
                  onChange={(e) => handleChange(e, index, "education")}
                  className="border p-2 w-full"
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addMoreFields("education")}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add More Education
            </button>
          </div>

          {/* Responsibilities */}
          <div>
            <h3>Responsibilities:</h3>
            {resumeData.responsibilities.map((resp, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  placeholder="Responsibility"
                  value={resp}
                  onChange={(e) => handleChange(e, index, "responsibilities")}
                  className="border p-2 w-full"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addMoreFields("responsibilities")}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add More Responsibilities
            </button>
          </div>

          {/* Achievements */}
          <div>
            <h3>Achievements:</h3>
            {resumeData.achievements.map((ach, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  placeholder="Achievement"
                  value={ach}
                  onChange={(e) => handleChange(e, index, "achievements")}
                  className="border p-2 w-full"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addMoreFields("achievements")}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add More Achievements
            </button>
          </div>

          {/* Hobbies */}
          <div>
            <h3>Hobbies:</h3>
            {resumeData.hobbies.map((hobby, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  placeholder="Hobby"
                  value={hobby}
                  onChange={(e) => handleChange(e, index, "hobbies")}
                  className="border p-2 w-full"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addMoreFields("hobbies")}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add More Hobbies
            </button>
          </div>

          {/* Projects */}
          <div>
            <h3>Projects:</h3>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  placeholder="Project Heading"
                  name="heading"
                  value={project.heading}
                  onChange={(e) => handleChange(e, index, "projects")}
                  className="border p-2 w-full"
                  required
                />
                <textarea
                  placeholder="Project Description"
                  name="description"
                  value={project.description}
                  onChange={(e) => handleChange(e, index, "projects")}
                  className="border p-2 w-full"
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addMoreFields("projects")}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add More Projects
            </button>
          </div>

          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
            Generate Resume
          </button>
        </form>
      ) : (
        <div>
          <div ref={resumeRef} className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg mt-8"  
          style={{ width: "210mm", height: "297mm" }}>
            {/* Generated resume display */}
            <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">{resumeData.name}</h1>
          <p className="text-lg text-gray-700">
            {resumeData.email} | {resumeData.phone}
          </p>
          <p className="text-lg text-gray-700">
            <a href={resumeData.linkedin} className="text-blue-500">
              LinkedIn
            </a>{" "}
            |
            <a href={resumeData.github} className="text-blue-500 ml-2">
              GitHub
            </a>
          </p>
        </header>

            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <aside className="col-span-1">
                <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Career Objectives</h2>
                <p className="text-gray-800 mb-8">{resumeData.objectives}</p>

                <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Technical Skills</h2>
                {resumeData.skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-bold">{skill.mainHeading}</p>
                    <ul className="list-disc ml-5">
                      {skill.subHeadings.map((sub, subIndex) => (
                        <li key={subIndex}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Responsibilities</h2>
                <ul className="list-disc ml-5">
                  {resumeData.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Hobbies</h2>
                <ul className="list-disc ml-5">
                  {resumeData.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                  ))}
                </ul>
              </aside>

              <section className="col-span-2">
                <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Education</h2>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-xl"><strong>{edu.collegeName}</strong> </p>
                    <p>{edu.degree} | {edu.percentage} | {edu.passoutYear} | {edu.location}</p>
                  </div>
                ))}

                <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Projects</h2>
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="mb-4">
                    <p  className="text-xl"><strong>{project.heading}</strong></p>
                    <p>{project.description}</p>
                  </div>
                ))}

                <h2 className="text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Achievements</h2>
                <ul className="list-disc ml-5">
                  {resumeData.achievements.map((ach, index) => (
                    <li key={index}>{ach}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              ref={downloadButtonRef}
              onClick={handleDownload}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeFormGPT;
