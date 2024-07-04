import React from 'react';

const Resume = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Pradyumna Ravindra Hulekal</h1>
        <p className="text-lg">final | Master of Computer Application | hulekalpradyumna001@gmail.com | 9900372679</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold">LBAS and SBSC College Sagar</h3>
            <p>Bachelor of Computer Application | 7.2 CGPA | Sep 2022 | Sagar, India</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Chetana PU College Siddapur</h3>
            <p>MARCH 2019 | CLASS 12 | 74.16%</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">SV High School Siddapur(UK)</h3>
            <p>April 2017 | CLASS 10 | 90.56%</p>
          </div>

          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 mt-8">Projects</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Crime Reporting System | Sept 2023</h3>
            <p>The Online Crime Reporting System is a web-based application designed to facilitate the reporting and management of criminal incidents by the public. It provides a user-friendly platform for citizens to report crimes, emergencies, or suspicious activities to law enforcement agencies. Tech-Stack: HTML, CSS, JavaScript, PHP, MYSQL.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Car Rental Website | Jul 2023</h3>
            <p>The Car Rental System is a web-based platform designed to streamline the process of renting cars for individuals or businesses. This system aims to provide a convenient and efficient way for users to browse, select, and reserve rental cars online. It caters to the growing demand for hassle-free car rental services, offering a user-friendly interface and a range of features to enhance the overall experience. Tech-Stack: HTML, CSS, JavaScript, PHP, MYSQL.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Hotel Room Reservation Website | Sep 2022</h3>
            <p>The Online Hotel Room Reservation System is a web-based application designed to simplify and streamline the process of booking hotel rooms. Enables users to easily browse and book hotel rooms from the comfort of their homes or on the go. Tech-Stack: HTML, CSS, JavaScript, Python, Django</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Landing Page of Photography | Apr 2022</h3>
            <p>The landing page of a photography project serves as the first impression for visitors and potential clients. It's a crucial element in conveying the essence of the photography services offered. Serves as an online portfolio that allows the photographer to exhibit their best work Tech-Stack: HTML, CSS, JavaScript.</p>
          </div>
        </section>

        <aside>
          <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Skills</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Proficient Languages</h3>
            <p>Java • C++ • C</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Development</h3>
            <p>HTML5 • CSS3 • JavaScript • PHP • SQL • MySQL • OOPS • Servlet • JSP and JDBC</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Other Skills</h3>
            <p>Competitive Programming • Machine Learning • Git • GitHub • Web Designing</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Links</h2>
            <p>github.com/pradyumna2242</p>
            <p>linkedin.com/in/pradyumna001/</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Coursework</h2>
            <p>Data Structures and Algorithms</p>
            <p>Software Engineering</p>
            <p>Database Systems</p>
            <p>Operating Systems</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Hobbies</h2>
            <p>Chess • Cricket</p>
            <p>Reading books</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Achievements</h2>
            <p>Awarded Runner up in inter college fest in web design.</p>
            <p>Awarded Winner in inter college fest in IT Quiz.</p>
            <p>Ranked 90.56% in Secondary School Leaving Certificate.</p>
            <p>Awarded Merit certificate in "Hack To Future 2.0" Hackathon</p>
            <p>Held at SJE College , Mangaluru in association with EDGK Pvt ltd.</p>
            <p>Participated in International Project Innovation Challenge.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">Certifications</h2>
            <p>2023 AWS Cloud Certification</p>
            <p>2023 Java Crash Course</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Resume;
