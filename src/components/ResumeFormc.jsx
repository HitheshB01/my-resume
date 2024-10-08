// import React, { useState } from "react";

// const ResumeFormc = () => {
//   const [resumeData, setResumeData] = useState({
//     skills: [{ mainHeading: "", subHeadings: [""] }],
//     education: [{ collegeName: "", degree: "", percentage: "", passoutYear: "", location: "" }],
//   });

//   const handleChange = (e, index, section, subIndex) => {
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
//     }
//   };

//   const addMoreFields = (section) => {
//     const updatedArray = [...resumeData[section]];
//     if (section === "skills") {
//       updatedArray.push({ mainHeading: "", subHeadings: [""] });
//     } else if (section === "education") {
//       updatedArray.push({ collegeName: "", degree: "", percentage: "", passoutYear: "", location: "" });
//     }
//     setResumeData((prevData) => ({ ...prevData, [section]: updatedArray }));
//   };

//   const addSubHeading = (index) => {
//     const updatedSkills = [...resumeData.skills];
//     updatedSkills[index].subHeadings.push("");
//     setResumeData((prevData) => ({ ...prevData, skills: updatedSkills }));
//   };

//   return (
//     <div className="p-8">
//       <form className="space-y-4">
//         {/* Technical Skills */}
//         <div>
//           <h3>Technical Skills:</h3>
//           {resumeData.skills.map((skill, index) => (
//             <div key={index} className="space-y-2">
//               <input
//                 type="text"
//                 placeholder="Main Heading"
//                 value={skill.mainHeading}
//                 onChange={(e) => handleChange(e, index, "skills", null)}
//                 className="border p-2 w-full"
//                 required
//               />
//               {skill.subHeadings.map((sub, subIndex) => (
//                 <input
//                   key={subIndex}
//                   type="text"
//                   placeholder="Subheading"
//                   value={sub}
//                   onChange={(e) => handleChange(e, index, "skills", subIndex)}
//                   className="border p-2 w-full"
//                 />
//               ))}
//               <button
//                 type="button"
//                 onClick={() => addSubHeading(index)}
//                 className="bg-green-500 text-white py-1 px-2 rounded"
//               >
//                 Add Subheading
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => addMoreFields("skills")}
//             className="bg-blue-500 text-white py-2 px-4 rounded"
//           >
//             Add More Skills
//           </button>
//         </div>

//         {/* Education */}
//         <div>
//           <h3>Education:</h3>
//           {resumeData.education.map((edu, index) => (
//             <div key={index} className="space-y-2">
//               <input
//                 type="text"
//                 placeholder="College Name"
//                 name="collegeName"
//                 value={edu.collegeName}
//                 onChange={(e) => handleChange(e, index, "education")}
//                 className="border p-2 w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Degree"
//                 name="degree"
//                 value={edu.degree}
//                 onChange={(e) => handleChange(e, index, "education")}
//                 className="border p-2 w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Percentage/CGPA"
//                 name="percentage"
//                 value={edu.percentage}
//                 onChange={(e) => handleChange(e, index, "education")}
//                 className="border p-2 w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Year of Passout"
//                 name="passoutYear"
//                 value={edu.passoutYear}
//                 onChange={(e) => handleChange(e, index, "education")}
//                 className="border p-2 w-full"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Location"
//                 name="location"
//                 value={edu.location}
//                 onChange={(e) => handleChange(e, index, "education")}
//                 className="border p-2 w-full"
//                 required
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => addMoreFields("education")}
//             className="bg-blue-500 text-white py-2 px-4 rounded"
//           >
//             Add More Education
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ResumeFormc;



import React, { useState } from "react";

const ResumeForm = () => {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
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

  return (
    <div className="p-8">
      <form className="space-y-4">

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
              // onChange={handleChange}
              onChange={(e) => setResumeData(e.target.value)}
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
        {/* Technical Skills */}
        <div>
          <h3>Technical Skills:</h3>
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <input
                type="text"
                placeholder="Main Heading"
                value={skill.mainHeading}
                onChange={(e) => handleChange(e, index, "skills", null)}
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
      </form>
    </div>
  );
};

export default ResumeForm;
