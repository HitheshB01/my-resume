import React, { useState } from "react";
import ResumeForm from "./ResumeForm";

const FormPractise = () => {
  // const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     phoneNumber: '',
  //     linkedIn: '',
  //     gitHub: '',
  //     // objective: '',
  //     // technicalSkills: '',
  //     // certifications: [''],
  //     // hobbies: [''],
  //     // education: [],
  //     // projects: [],
  //     // achievements: [''],
  //   });

  const [formData, SetFormData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [objective, setObjective] = useState("");

  const [project,setProject]=useState([])

  const ResumeForm = () => {
    const AllData = {
      name: name,
      email: email,
      phno: phno,
      linkedIn: linkedIn,
      gitHub: gitHub,
      objective: objective,
    };
    SetFormData(AllData)
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8">Resume Form</h1>

      <form>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
           
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setEmail(e.target.value)}
          
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
                       onChange={(e) => setPhno(e.target.value)}

            type="tel"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            LinkedIn Profile
          </label>
          <input
            type="url"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setLinkedIn(e.target.value)}

         />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            GitHub Profile
          </label>
          <input
            type="url"
            onChange={(e) => setGitHub(e.target.value)}

            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Objective
          </label>
          <textarea            onChange={(e) => setObjective(e.target.value)}
 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          {formData.projects.map((proj, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`title-${index}`}>
                Project Title
              </label>
              <input
                id={`title-${index}`}
                name="title"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={proj.title}
                onChange={(e) => handleProjectChange(index, e)}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`description-${index}`}>
                Description
              </label>
              <textarea
                id={`description-${index}`}
                name="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={proj.description}
                onChange={(e) => handleProjectChange(index, e)}
              ></textarea>
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={addProject}
          >
            Add Project
          </button>
        </div>

        {/* <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="technicalSkills">
            Technical Skills
          </label>
          <textarea
            id="technicalSkills"
            name="technicalSkills"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
            
          ></textarea>
        </div> */}

        {/* <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="certifications">
            Certifications
          </label>
          <textarea
            id="certifications"
            name="certifications"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           
            
          ></textarea>
        </div> */}

        
<div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Projects</h2>
          {/* {formData.projects.map((proj, index) => ( */}
            <div  className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`title-${index}`}>
                Project Title
              </label>
              <input
               
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => handleProjectChange(index, e)}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Description
              </label>
              <textarea
               
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => handleProjectChange(index, e)}
              ></textarea>
            </div>
          {/* ))} */}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={addProject}
          >
            Add Project
          </button>
        </div>

        {/* <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Hobbies
          </label>
          <textarea
           
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          
            
          ></textarea>
        </div> */}
        {/* <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Achievements</h2>
          {formData.achievements.map((achievement, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={achievement}
              />
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Achievement
          </button>
        </div> */}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={ResumeForm}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPractise;
