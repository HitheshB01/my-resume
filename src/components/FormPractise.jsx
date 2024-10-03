// import React, { useState } from "react";
// import ResumeForm from "./ResumeForm";

// const FormPractise = () => {
//   // const [formData, setFormData] = useState({
//   //     name: '',
//   //     email: '',
//   //     phoneNumber: '',
//   //     linkedIn: '',
//   //     gitHub: '',
//   //     // objective: '',
//   //     // technicalSkills: '',
//   //     // certifications: [''],
//   //     // hobbies: [''],
//   //     // education: [],
//   //     // projects: [],
//   //     // achievements: [''],
//   //   });

//   const [formData, SetFormData] = useState([]);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phno, setPhno] = useState("");
//   const [linkedIn, setLinkedIn] = useState("");
//   const [gitHub, setGitHub] = useState("");
//   const [objective, setObjective] = useState("");

//   const [project, setProject] = useState([]);
//   const addProject = () => {
//     const newp = { panme: "1st proj", pdesp: "proj descpription" };
//     setProject([...project,newp]);
//   };

//   const [projectTitle, setProjectTitle] = useState("");
//   const [projectDescp, setProjectDescp] = useState("");


//   const ResumeForm = () => {
//     const AllData = {
//       name: name,
//       email: email,
//       phno: phno,
//       linkedIn: linkedIn,
//       gitHub: gitHub,
//       objective: objective,
//       projectTitle:projectTitle,
//       projectDescp:projectDescp
//     };
//     SetFormData(AllData);
//   };

//   return (
//     <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold mb-8">Resume Form</h1>

//       <form>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Name
//           </label>
//           <input
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Phone Number
//           </label>
//           <input
//             onChange={(e) => setPhno(e.target.value)}
//             type="tel"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             LinkedIn Profile
//           </label>
//           <input
//             type="url"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             onChange={(e) => setLinkedIn(e.target.value)}
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             GitHub Profile
//           </label>
//           <input
//             type="url"
//             onChange={(e) => setGitHub(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Objective
//           </label>
//           <textarea
//             onChange={(e) => setObjective(e.target.value)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           ></textarea>
//         </div>
//         {/* <div className="mb-6">
//           <h2 className="text-xl font-bold mb-2">Projects</h2>
//           {formData.projects.map((proj, index) => (
//             <div key={index} className="mb-4">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor={`title-${index}`}
//               >
//                 Project Title
//               </label>
//               <input
//                 id={`title-${index}`}
//                 name="title"
//                 type="text"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 value={proj.title}
//                 onChange={(e) => handleProjectChange(index, e)}
//               />
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2"
//                 htmlFor={`description-${index}`}
//               >
//                 Description
//               </label>
//               <textarea
//                 id={`description-${index}`}
//                 name="description"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 value={proj.description}
//                 onChange={(e) => handleProjectChange(index, e)}
//               ></textarea>
//             </div>
//           ))}
//           <button
//             type="button"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             onClick={addProject}
//           >
//             Add Project
//           </button>
//         </div> */}

//         {/* <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technicalSkills">
//             Technical Skills
//           </label>
//           <textarea
//             id="technicalSkills"
//             name="technicalSkills"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
            
//           ></textarea>
//         </div> */}

//         {/* <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="certifications">
//             Certifications
//           </label>
//           <textarea
//             id="certifications"
//             name="certifications"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           
            
//           ></textarea>
//         </div> */}

//         <div className="mb-6">
//           <h2 className="text-xl font-bold mb-2">Projects</h2>
//           {/* {formData.projects.map((proj, index) => ( */}
//           {project.map((item,i) => {
//             return (
//               <div key={i} className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Project Title
//                 </label>
//                 <input
//                   type="text"             onChange={(e) => setProjectTitle(e.target.value)}

//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Description
//                 </label>
//                 <textarea  onChange={(e) => setProjectDescp(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
//               </div>
//             );
//           })}

//           {/* ))} */}
//           <button
//             type="button"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             onClick={addProject}
//           >
//             Add Project
//           </button>
//         </div>

//         {/* <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" >
//             Hobbies
//           </label>
//           <textarea
           
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
            
//           ></textarea>
//         </div> */}
//         {/* <div className="mb-6">
//           <h2 className="text-xl font-bold mb-2">Achievements</h2>
//           {formData.achievements.map((achievement, index) => (
//             <div key={index} className="mb-4">
//               <input
//                 type="text"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 value={achievement}
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Add Achievement
//           </button>
//         </div> */}

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={ResumeForm}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormPractise;
import React, { useState } from "react";

function ResumeForm() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (e, index, field, type = "") => {
    const { name, value } = e.target;
    const arrayCopy = [...resumeData[field]];
    if (type === "subHeading") {
      arrayCopy[index].subHeadings[0] = value;
    } else {
      arrayCopy[index][name] = value;
    }
    setResumeData({ ...resumeData, [field]: arrayCopy });
  };

  const handleSimpleArrayChange = (e, index, field) => {
    const { value } = e.target;
    const arrayCopy = [...resumeData[field]];
    arrayCopy[index] = value;
    setResumeData({ ...resumeData, [field]: arrayCopy });
  };

  const addItem = (field) => {
    const emptyItem = field === "skills"
      ? { mainHeading: "", subHeadings: [""] }
      : field === "projects"
      ? { heading: "", description: "" }
      : "";

    setResumeData({
      ...resumeData,
      [field]: [...resumeData[field], emptyItem],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resumeData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold">Resume Form</h2>

      {/* Name */}
      <input
        type="text"
        name="name"
        value={resumeData.name}
        onChange={handleChange}
        placeholder="Name"
        className="block w-full border p-2 rounded"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        value={resumeData.email}
        onChange={handleChange}
        placeholder="Email"
        className="block w-full border p-2 rounded"
      />

      {/* LinkedIn */}
      <input
        type="text"
        name="linkedin"
        value={resumeData.linkedin}
        onChange={handleChange}
        placeholder="LinkedIn"
        className="block w-full border p-2 rounded"
      />

      {/* GitHub */}
      <input
        type="text"
        name="github"
        value={resumeData.github}
        onChange={handleChange}
        placeholder="GitHub"
        className="block w-full border p-2 rounded"
      />

      {/* Objectives */}
      <textarea
        name="objectives"
        value={resumeData.objectives}
        onChange={handleChange}
        placeholder="Objectives"
        className="block w-full border p-2 rounded"
      />

      {/* Skills */}
      <div>
        <h3 className="font-semibold">Skills</h3>
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              name="mainHeading"
              value={skill.mainHeading}
              onChange={(e) => handleArrayChange(e, index, "skills")}
              placeholder="Skill Main Heading"
              className="block w-full border p-2 rounded"
            />
            <input
              type="text"
              name="subHeadings"
              value={skill.subHeadings[0]}
              onChange={(e) => handleArrayChange(e, index, "skills", "subHeading")}
              placeholder="Skill Sub Heading"
              className="block w-full border p-2 rounded"
            />
          </div>
        ))}
        <button type="button" onClick={() => addItem("skills")} className="mt-2 p-2 bg-blue-500 text-white rounded">
          Add Skill
        </button>
      </div>

      {/* Education */}
      <div>
        <h3 className="font-semibold">Education</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              name="collegeName"
              value={edu.collegeName}
              onChange={(e) => handleArrayChange(e, index, "education")}
              placeholder="College Name"
              className="block w-full border p-2 rounded"
            />
            <input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleArrayChange(e, index, "education")}
              placeholder="Degree"
              className="block w-full border p-2 rounded"
            />
            <input
              type="text"
              name="percentage"
              value={edu.percentage}
              onChange={(e) => handleArrayChange(e, index, "education")}
              placeholder="Percentage/CGPA"
              className="block w-full border p-2 rounded"
            />
            <input
              type="text"
              name="passoutYear"
              value={edu.passoutYear}
              onChange={(e) => handleArrayChange(e, index, "education")}
              placeholder="Year of Pass-out"
              className="block w-full border p-2 rounded"
            />
            <input
              type="text"
              name="location"
              value={edu.location}
              onChange={(e) => handleArrayChange(e, index, "education")}
              placeholder="Location"
              className="block w-full border p-2 rounded"
            />
          </div>
        ))}
      </div>

      {/* Responsibilities */}
      <div>
        <h3 className="font-semibold">Responsibilities</h3>
        {resumeData.responsibilities.map((resp, index) => (
          <input
            key={index}
            type="text"
            value={resp}
            onChange={(e) => handleSimpleArrayChange(e, index, "responsibilities")}
            placeholder="Responsibility"
            className="block w-full border p-2 rounded"
          />
        ))}
        <button type="button" onClick={() => addItem("responsibilities")} className="mt-2 p-2 bg-blue-500 text-white rounded">
          Add Responsibility
        </button>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="font-semibold">Achievements</h3>
        {resumeData.achievements.map((achieve, index) => (
          <input
            key={index}
            type="text"
            value={achieve}
            onChange={(e) => handleSimpleArrayChange(e, index, "achievements")}
            placeholder="Achievement"
            className="block w-full border p-2 rounded"
          />
        ))}
        <button type="button" onClick={() => addItem("achievements")} className="mt-2 p-2 bg-blue-500 text-white rounded">
          Add Achievement
        </button>
      </div>

      {/* Hobbies */}
      <div>
        <h3 className="font-semibold">Hobbies</h3>
        {resumeData.hobbies.map((hobby, index) => (
          <input
            key={index}
            type="text"
            value={hobby}
            onChange={(e) => handleSimpleArrayChange(e, index, "hobbies")}
            placeholder="Hobby"
            className="block w-full border p-2 rounded"
          />
        ))}
        <button type="button" onClick={() => addItem("hobbies")} className="mt-2 p-2 bg-blue-500 text-white rounded">
          Add Hobby
        </button>
      </div>

      {/* Projects */}
      <div>
        <h3 className="font-semibold">Projects</h3>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              name="heading"
              value={project.heading}
              onChange={(e) => handleArrayChange(e, index, "projects")}
              placeholder="Project Heading"
              className="block w-full border p-2 rounded"
            />
            <textarea
              name="description"
              value={project.description}
              onChange={(e) => handleArrayChange(e, index, "projects")}
              placeholder="Project Description"
              className="block w-full border p-2 rounded"
            />
          </div>
        ))}
        <button type="button" onClick={() => addItem("projects")} className="mt-2 p-2 bg-blue-500 text-white rounded">
          Add Project
        </button>
      </div>

      <button type="submit" className="block w-full bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default ResumeForm;
