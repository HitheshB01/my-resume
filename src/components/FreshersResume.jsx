// import React from 'react';
// import { pdfMake } from 'pdfmake/build/pdfmake';
// import { vfsFonts } from 'pdfmake/build/vfs_fonts';

// pdfMake.vfs = vfsFonts.pdfMake.vfs;

// const FreshersResume = () => {
//   const handleDownload = () => {
//     const docDefinition = {
//       content: [
//         { text: 'Hithesh B', style: 'header' },
//         { text: 'Email: hitesh99017@gmail.com | Phone: 9901767545', style: 'subheader' },
//         { text: 'LinkedIn: https://linkedin.com/in/hithesh-b-149b68229 | GitHub: https://github.com/hitheshb01', style: 'subheader' },
//         { text: 'Career Objectives', style: 'sectionHeader' },
//         { text: 'To begin my coding career by utilizing my skills to develop impactful software solutions and advance my growth as a developer.', style: 'text' },
//         { text: 'Education', style: 'sectionHeader' },
//         {
//           ul: [
//             'BMS Institute Of Technology\n   Masters of Computer Application | 8.38 CGPA | 2024',
//             'Seshadripuram First Grade College\n   Bachelor of Computer Application | 8.5 CGPA | Sep 2021',
//             'SET Pu College\n   Class 12 | 77.16% | March 2018'
//           ],
//           style: 'text'
//         },
//         { text: 'Projects', style: 'sectionHeader' },
//         {
//           ul: [
//             'Resume Builder Application: Developed a resume builder application using React.js for the frontend, Tailwind CSS for responsive design, and Firebase for backend data management and authentication, enabling users to create and customize professional resumes.',
//             'Job Portal Application: Designed and developed the "HireMe" job portal application using Firebase for backend data management and user authentication, and React.js with Tailwind CSS for creating a responsive and user-friendly frontend, enabling seamless interaction between job seekers and recruiters.'
//           ],
//           style: 'text'
//         },
//         { text: 'Achievements', style: 'sectionHeader' },
//         {
//           ul: [
//             '2nd Place at CodeXpress competition at Instellation(Inter-college), organized by DSATM – 2024.',
//             '1st place at CrackTheCode Competition at TechTransform, Organized by BMSIT -- 2024.'
//           ],
//           style: 'text'
//         },
//         { text: 'Position of Responsibility', style: 'sectionHeader' },
//         {
//           ul: [
//             'Event Coordinator for HackHustler at Seshadripuram First Grade College',
//             'Event Coordinator for Techtrickie at Kristu Jayanti College'
//           ],
//           style: 'text'
//         },
//         { text: 'Hobbies', style: 'sectionHeader' },
//         {
//           ul: [
//             'Chess',
//             'Carrom'
//           ],
//           style: 'text'
//         }
//       ],
//       styles: {
//         header: {
//           fontSize: 24,
//           bold: true,
//           alignment: 'center'
//         },
//         subheader: {
//           fontSize: 16,
//           alignment: 'center'
//         },
//         sectionHeader: {
//           fontSize: 18,
//           bold: true,
//           margin: [0, 20, 0, 10]
//         },
//         text: {
//           fontSize: 12
//         }
//       }
//     };

//     pdfMake.createPdf(docDefinition).download('resume.pdf');
//   };

//   return (
//     <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-blue-900">Hithesh B</h1>
//         <p className="text-lg text-gray-700">hitesh99017@gmail.com | 9901767545</p>
//         <p className="text-lg text-gray-700">LinkedIn: <a href="https://linkedin.com/in/hithesh-b-149b68229" className="text-blue-500">https://linkedin.com/in/hithesh-b-149b68229</a> | GitHub: <a href="https://github.com/hitheshb01" className="text-blue-500">https://github.com/hitheshb01</a></p>
//       </header>

//       <button 
//         onClick={handleDownload} 
//         className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//       >
//         Download PDF
//       </button>
//     </div>
//   );
// };

// export default FreshersResume;










// FreshersResume.js
// import React from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import ResumeDocument from './ResumeDocument';

// const FreshersResume = () => {
//   return (
//     <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg" style={{ width: '210mm', height: '297mm' }}>
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-blue-900">Hithesh B</h1>
//         <p className="text-lg text-gray-700">hitesh99017@gmail.com | 9901767545</p>
//         <p className="text-lg text-gray-700">
//           <a href="https://linkedin.com/in/hithesh-b-149b68229" className="text-blue-600">LinkedIn Profile</a> |{' '}
//           <a href="https://github.com/hitheshb01" className="text-blue-600">GitHub Profile</a>
//         </p>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <aside className="col-span-1">
//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Objective</h2>
//           <p className="text-gray-800 mb-8">A highly motivated and enthusiastic fresher seeking a technical role in a dynamic organization where I can apply my skills and contribute to the company's success while growing professionally.</p>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Technical Skills</h2>
//           <ul className="list-disc list-inside text-gray-800 mb-8">
//             <li className="font-bold">• Java</li>
//             <li className="font-bold">• JavaScript</li>
//             <li className="font-bold">• HTML</li>
//             <li className="font-bold">• CSS</li>
//             <li className="font-bold">• React</li>
//             <li className="font-bold">• Tailwind CSS</li>
//             <li className="font-bold">• Firebase</li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Roles</h2>
//           <ul className="list-disc list-inside text-gray-800">
//             <li>Event coordinator for HackHustler at Seshadripuram First Grade College</li>
//             <li>Event coordinator for Techtrickie at Kristu Jayanti College</li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Hobbies</h2>
//           <ul className="list-disc list-inside text-gray-800">
//             <li>Chess</li>
//             <li>Carrom</li>
//           </ul>
//         </aside>

//         <section className="col-span-2">
//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Education</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">BMS Institute Of Technology</h3>
//             <p className="text-gray-700">Masters of Computer Application | 8.38 CGPA | 2024</p>
//           </div>
//           <div className="mb-8">
//             <h3 className="text-xl font-bold text-gray-800">Seshadripuram First Grade College</h3>
//             <p className="text-gray-700">Bachelor of Computer Application | 8.5 CGPA | Sep 2021</p>
//           </div>
//           <div className="mb-8">
//             <h3 className="text-xl font-bold text-gray-800">SET Pu College</h3>
//             <p className="text-gray-700">CLASS 12 | 77.16% | March 2018</p>
//           </div>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Projects</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">Resume Builder Application</h3>
//             <p className="text-gray-700">Developed using React.js, Tailwind CSS, and Firebase.</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">Job Portal Application</h3>
//             <p className="text-gray-700">Designed with React.js, Tailwind CSS, and Firebase.</p>
//           </div>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Achievements</h2>
//           <ul className="list-disc list-inside text-gray-800">
//             <li>2nd Place at CodeXpress competition at Instellation, organized by DSATM – 2024.</li>
//             <li>1st Place at CrackTheCode Competition at TechTransforn, organized by BMSIT – 2024.</li>
//           </ul>
//         </section>
//       </div>

//       <div className="mt-8 text-center">
//         <PDFDownloadLink document={<ResumeDocument />} fileName="Hithesh_B_Resume.pdf">
//           {({ loading }) => (loading ? 'Preparing document...' : 'Download Resume')}
//         </PDFDownloadLink>
//       </div>
//     </div>
//   );
// };

// export default FreshersResume;











// import React from 'react';

// const FreshersResume = () => {
//   return (
//     <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg" style={{ width: '210mm', height: '297mm' }}>
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-blue-900">Hithesh B</h1>
//         <p className="text-lg text-gray-700">hitesh99017@gmail.com | 9901767545</p>
//         <p className="text-lg text-gray-700">
//           <a href="https://linkedin.com/in/hithesh-b-149b68229" className="text-blue-500">LinkedIn</a> |
//           <a href="https://github.com/hitheshb01" className="text-blue-500 ml-2">GitHub</a>
//         </p>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <aside className="col-span-1">
//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Career Objectives</h2>
//           <p className="text-gray-800 mb-8">To begin my coding career by utilizing my skills to develop impactful software solutions and advance my growth as a developer.</p>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Technical Skills</h2>
//           <ul className="list-disc list-inside text-gray-800 mb-8">
//             <li>Programming Languages: Java, JavaScript, HTML, CSS</li>
//             <li>Frameworks: React.js, Tailwind CSS</li>
//             <li>Database Management: Firebase</li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Position of Responsibility</h2>
//           <ul className="list-disc list-inside text-gray-800 mb-8">
//             <li>Event Coordinator for HackHustler (Seshadripuram First Grade College)</li>
//             <li>Event Coordinator for Techtrickie (Kristu Jayanti College)</li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Hobbies</h2>
//           <ul className="list-disc list-inside text-gray-800">
//             <li>Chess</li>
//             <li>Carrom</li>
//           </ul>
//         </aside>

//         <section className="col-span-2">
//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Education</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">BMS Institute Of Technology</h3>
//             <p className="text-gray-700">Master of Computer Application | 8.38 CGPA | 2024 | Bangalore, India</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">Seshadripuram First Grade College</h3>
//             <p className="text-gray-700">Bachelor of Computer Application | 8.5 CGPA | Sep 2021 | Bangalore, India</p>
//           </div>
//           <div className="mb-8">
//             <h3 className="text-xl font-bold text-gray-800">SET Pu College</h3>
//             <p className="text-gray-700">Class 12 | 77.16% | March 2018</p>
//           </div>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Projects</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">Resume Builder Application</h3>
//             <p className="text-gray-700">Developed a resume builder application using React.js for the frontend, Tailwind CSS for responsive design, and Firebase for backend data management and authentication, enabling users to create and customize professional resumes.</p>
//           </div>
//           <div className="mb-8">
//             <h3 className="text-xl font-bold text-gray-800">Job Portal Application</h3>
//             <p className="text-gray-700">Designed and developed the 'HireMe' job portal application using Firebase for backend data management and user authentication, and React.js with Tailwind CSS for creating a responsive and user-friendly frontend, enabling seamless interaction between job seekers and recruiters.</p>
//           </div>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Achievements</h2>
//           <ul className="list-disc list-inside text-gray-800">
//             <li>2nd Place at CodeXpress competition at Instellation(Inter-college), organized by DSATM – 2024</li>
//             <li>1st place at CrackTheCode Competition at TechTransform, Organised by BMSIT – 2024</li>
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FreshersResume;

// import React from 'react';

// const FreshersResume = () => {
//   return (
//     <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg" style={{ width: '210mm', height: '297mm' }}>
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-blue-900">Hithesh B</h1>
//         <p className="text-lg text-gray-700">hitesh99017@gmail.com | 9901767545</p>
//         <p className="text-lg text-gray-700">
//           <a href="https://linkedin.com/in/hithesh-b-149b68229" className="text-blue-500">LinkedIn</a> |
//           <a href="https://github.com/hitheshb01" className="text-blue-500 ml-2">GitHub</a>
//         </p>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <aside className="col-span-1">
//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Career Objectives</h2>
//           <p className="text-gray-800 mb-8">To begin my coding career by utilizing my skills to develop impactful software solutions and advance my growth as a developer.</p>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Technical Skills</h2>
//           <ul className="list-disc list-inside text-gray-800 mb-8">
//             <li><strong>Programming Languages:</strong> Java, JavaScript, HTML, CSS</li>
//             <li><strong>Frameworks:</strong> React.js, Tailwind CSS</li>
//             <li><strong>Database Management:</strong> Firebase</li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Position of Responsibility</h2>
//           <ul className="list-disc list-inside text-gray-800 mb-8">
//             <li>Event Coordinator for HackHustler (Seshadripuram First Grade College)</li>
//             <li>Event Coordinator for Techtrickie (Kristu Jayanti College)</li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Hobbies</h2>
//           <ul className="list-disc list-inside text-gray-800">
//             <li>Chess</li>
//             <li>Carrom</li>
//           </ul>
//         </aside>

//         <section className="col-span-2">
//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Education</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">BMS Institute Of Technology</h3>
//             <p className="text-gray-700">Master of Computer Application | 8.38 CGPA | 2024 | Bangalore, India</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">Seshadripuram First Grade College</h3>
//             <p className="text-gray-700">Bachelor of Computer Application | 8.5 CGPA | Sep 2021 | Bangalore, India</p>
//           </div>
//           <div className="mb-8">
//             <h3 className="text-xl font-bold text-gray-800">SET Pu College</h3>
//             <p className="text-gray-700">Class 12 | 77.16% | March 2018</p>
//           </div>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Projects</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">Resume Builder Application</h3>
//             <p className="text-gray-700">Developed a resume builder application using React.js for the frontend, Tailwind CSS for responsive design, and Firebase for backend data management and authentication, enabling users to create and customize professional resumes.</p>
//           </div>
//           <div className="mb-8">
//             <h3 className="text-xl font-bold text-gray-800">Job Portal Application</h3>
//             <p className="text-gray-700">Designed and developed the 'HireMe' job portal application using Firebase for backend data management and user authentication, and React.js with Tailwind CSS for creating a responsive and user-friendly frontend, enabling seamless interaction between job seekers and recruiters.</p>
//           </div>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Achievements</h2>
//           <ul className="list-disc list-inside text-gray-800">
//             <li>2nd Place at CodeXpress competition at Instellation(Inter-college), organized by DSATM – 2024</li>
//             <li>1st place at CrackTheCode Competition at TechTransform, Organised by BMSIT – 2024</li>
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FreshersResume;

// import React from 'react';

// const FreshersResume = () => {
//   return (
//     <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg" style={{ width: '210mm', height: '297mm' }}>
// <header className="text-center mb-8">
//   <h1 className="text-4xl font-bold text-blue-900">Hithesh B</h1>
//   <p className="text-lg text-gray-700">hitesh99017@gmail.com | 9901767545</p>
//   <p className="text-lg text-gray-700">
//     <a href="https://linkedin.com/in/hithesh-b-149b68229" className="text-blue-500">LinkedIn</a> |
//     <a href="https://github.com/hitheshb01" className="text-blue-500 ml-2">GitHub</a>
//   </p>
// </header>

// <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//   <aside className="col-span-1">
//     <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Career Objectives</h2>
//     <p className="text-gray-800 mb-8">To begin my coding career by utilizing my skills to develop impactful software solutions and advance my growth as a developer.</p>

//     <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Technical Skills</h2>
//     <ul className=" list-inside text-gray-800 mb-8">
//       <li><strong>Programming Languages:</strong>
//         <ul className="list-disc list-inside pl-4">
//           <li>Java</li>
//           <li>JavaScript</li>
//         </ul>
//       </li>
//       <li><strong>Web Development:</strong>
//         <ul className="list-disc list-inside pl-4">
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>React.js</li>
//           <li>Tailwind CSS</li>
//         </ul>
//       </li>
//       <li><strong>Database Management:</strong>
//         <ul className="list-disc list-inside pl-4">
//           <li>Firebase</li>
//         </ul>
//       </li>
//     </ul>

//     <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Responsibilities</h2>
//     <ul className="list-disc list-inside text-gray-800 mb-8">
//       <li>Event Coordinator for HackHustler (Seshadripuram First Grade College)</li>
//       <li>Event Coordinator for Techtrickie (Kristu Jayanti College)</li>
//     </ul>

//     <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Hobbies</h2>
//     <ul className="list-disc list-inside text-gray-800">
//       <li>Chess</li>
//       <li>Carrom</li>
//     </ul>
//   </aside>

//   <section className="col-span-2">
//     <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Education</h2>
//     <div className="mb-4">
//       <h3 className="text-xl font-bold text-gray-800">BMS Institute Of Technology</h3>
//       <p className="text-gray-700">Master of Computer Application | 8.38 CGPA | 2024 | Bangalore, India</p>
//     </div>
//     <div className="mb-4">
//       <h3 className="text-xl font-bold text-gray-800">Seshadripuram First Grade College</h3>
//       <p className="text-gray-700">Bachelor of Computer Application | 8.5 CGPA | Sep 2021 | Bangalore, India</p>
//     </div>
//     <div className="mb-8">
//       <h3 className="text-xl font-bold text-gray-800">SET Pu College</h3>
//       <p className="text-gray-700">Class 12 | 77.16% | March 2018</p>
//     </div>

//     <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Projects</h2>
//     <div className="mb-4">
//       <h3 className="text-xl font-bold text-gray-800">Resume Builder Application</h3>
//       <p className="text-gray-700">Developed a resume builder application using React.js for the frontend, Tailwind CSS for responsive design, and Firebase for backend data management and authentication, enabling users to create and customize professional resumes.</p>
//     </div>
//     <div className="mb-8">
//       <h3 className="text-xl font-bold text-gray-800">Job Portal Application</h3>
//       <p className="text-gray-700">Designed and developed the 'HireMe' job portal application using Firebase for backend data management and user authentication, and React.js with Tailwind CSS for creating a responsive and user-friendly frontend, enabling seamless interaction between job seekers and recruiters.</p>
//     </div>

//     <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Achievements</h2>
//     <ul className="list-disc list-inside text-gray-800">
//       <li>2nd Place at CodeXpress competition at Instellation(Inter-college), organized by DSATM – 2024</li>
//       <li>1st place at CrackTheCode Competition at TechTransform, Organised by BMSIT – 2024</li>
//     </ul>
//   </section>
// </div>
//     </div>
//   );
// };

// export default FreshersResume;













import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const FreshersResume = () => {
 
  const resumeRef = useRef();
  const downloadButtonRef = useRef();

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
    <div
      className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg"
      style={{ width: "210mm", height: "297mm" }}
      ref={resumeRef}
    >
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900">Hithesh B</h1>
        <p className="text-lg text-gray-700">
          hitesh99017@gmail.com | 9901767545
        </p>
        <p className="text-lg text-gray-700">
          <a
            href="https://linkedin.com/in/hithesh-b-149b68229"
            className="text-blue-500"
          >
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/hitheshb01"
            className="text-blue-500 ml-2"
          >
            GitHub
          </a>
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="col-span-1">
          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
            Career Objectives
          </h2>
          <p className="text-gray-800 mb-8">
            To begin my coding career by utilizing my skills to develop
            impactful software solutions and advance my growth as a developer.
          </p>

          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
            Technical Skills
          </h2>
          <ul className=" list-inside text-gray-800 mb-8">
            <li>
              <strong>Programming Languages:</strong>
              <ul className="list-disc list-inside pl-4">
                <li>Java</li>
                <li>JavaScript</li>
              </ul>
            </li>
            <li>
              <strong>Web Development:</strong>
              <ul className="list-disc list-inside pl-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </li>
            <li>
              <strong>Database Management:</strong>
              <ul className="list-disc list-inside pl-4">
                <li>Firebase</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
            Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-800 mb-8">
            <li>
              Event Coordinator for HackHustler (Seshadripuram First Grade
              College)
            </li>
            <li>Event Coordinator for Techtrickie (Kristu Jayanti College)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
            Hobbies
          </h2>
          <ul className="list-disc list-inside text-gray-800">
            <li>Chess</li>
            <li>Carrom</li>
          </ul>
        </aside>

        <section className="col-span-2">
          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
            Education
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">
              BMS Institute Of Technology
            </h3>
            <p className="text-gray-700">
              Master of Computer Application | 8.38 CGPA | 2024 | Bangalore,
              India
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">
              Seshadripuram First Grade College
            </h3>
            <p className="text-gray-700">
              Bachelor of Computer Application | 8.5 CGPA | Sep 2021 |
              Bangalore, India
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800">SET Pu College</h3>
            <p className="text-gray-700">Class 12 | 77.16% | March 2018</p>
          </div>

          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
            Projects
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-800">
              Resume Builder Application
            </h3>
            <p className="text-gray-700">
              Developed a resume builder application using React.js for the
              frontend, Tailwind CSS for responsive design, and Firebase for
              backend data management and authentication, enabling users to
              create and customize professional resumes.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800">
              Job Portal Application
            </h3>
            <p className="text-gray-700">
              Designed and developed the 'HireMe' job portal application using
              Firebase for backend data management and user authentication, and
              React.js with Tailwind CSS for creating a responsive and
              user-friendly frontend, enabling seamless interaction between job
              seekers and recruiters.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">
            Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-800">
            <li>
              2nd Place at CodeXpress competition at
              Instellation(Inter-college), organized by DSATM – 2024
            </li>
            <li>
              1st place at CrackTheCode Competition at TechTransform, Organised
              by BMSIT – 2024
            </li>
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
  );
};

export default FreshersResume;



// import React from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import ResumeDocument from './ResumeDocument';

// const FreshersResume = () => {
//   return (
//     <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg" style={{ width: '210mm', height: '297mm' }}>
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-blue-900">Hithesh B</h1>
//         <p className="text-lg text-gray-700">hitesh99017@gmail.com | 9901767545</p>
//         <p className="text-lg text-gray-700">
//           <a href="https://linkedin.com/in/hithesh-b-149b68229" className="text-blue-600">LinkedIn Profile</a> | 
//           <a href="https://github.com/hitheshb01" className="text-blue-600"> GitHub Profile</a>
//         </p>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <aside className="col-span-1">
//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Objective</h2>
//           <p className="text-gray-800 mb-8">A highly motivated and enthusiastic fresher seeking a technical role in a dynamic organization where I can apply my skills and contribute to the company's success while growing professionally.</p>
          
//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Technical Skills</h2>
//           <ul className="list-disc list-inside text-gray-800 mb-8">
//             <li className="font-bold">• Java</li>
//             <li className="font-bold">• JavaScript</li>
//             <li className="font-bold">• HTML</li>
//             <li className="font-bold">• CSS</li>
//             <li className="font-bold">• React</li>
//             <li className="font-bold">• Tailwind CSS</li>
//             <li className="font-bold">• Firebase</li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Roles</h2>
//           <ul className="list-disc list-inside text-gray-800">
//             <li>Event coordinator for HackHustler at Seshadripuram First Grade College</li>
//             <li>Event coordinator for Techtrickie at Kristu Jayanti College</li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Hobbies</h2>
//           <ul className="list-disc list-inside text-gray-800">
//             <li>Chess</li>
//             <li>Carrom</li>
//           </ul>
//         </aside>

//         <section className="col-span-2">
//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Education</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">BMS Institute Of Technology</h3>
//             <p className="text-gray-700">Masters of Computer Application | 8.38 CGPA | 2024</p>
//           </div>
//           <div className="mb-8">
//             <h3 className="text-xl font-bold text-gray-800">Seshadripuram First Grade College</h3>
//             <p className="text-gray-700">Bachelor of Computer Application | 8.5 CGPA | Sep 2021</p>
//           </div>
//           <div className="mb-8">
//             <h3 className="text-xl font-bold text-gray-800">SET Pu College</h3>
//             <p className="text-gray-700">CLASS 12 | 77.16% | March 2018</p>
//           </div>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Projects</h2>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">Resume Builder Application</h3>
//             <p className="text-gray-700">Developed using React.js, Tailwind CSS, and Firebase.</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-xl font-bold text-gray-800">Job Portal Application</h3>
//             <p className="text-gray-700">Designed with React.js, Tailwind CSS, and Firebase.</p>
//           </div>

//           <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 pb-2 mb-4">Achievements</h2>
//           <ul className="list-disc list-inside text-gray-800">
//             <li>2nd Place at CodeXpress competition at Instellation, organized by DSATM – 2024.</li>
//             <li>1st Place at CrackTheCode Competition at TechTransforn, organized by BMSIT – 2024.</li>
//           </ul>
//         </section>
//       </div>

//       <div className="mt-8 text-center">
//         <PDFDownloadLink document={<ResumeDocument />} fileName="Hithesh_B_Resume.pdf">
//           {({ loading }) => (loading ? 'Preparing document...' : 'Download Resume')}
//         </PDFDownloadLink>
//       </div>
//     </div>
//   );
// };

// export default FreshersResume;
