import React from 'react'
import Resume from './components/Resume'
import FreshersResume from './components/FreshersResume'
import ResumeForm from './components/ResumeForm'
import FormPractise from './components/FormPractise'
import ResumeFormGPT from './components/ResumeFormGPT'
import ResumeFormc from './components/ResumeFormc'
import ResumeTemplate from './components/ResumeTemplate'
import ResumeBuilder from './components/ResumeBuilder'

const App = () => {
  return (
    <div>
    {/* <FormPractise onSubmit={setResumeData}/> */}
    {/* <FormPractise /> */}

    {/* <ResumeForm/> */}
      {/* <Resume/> */}
      <FreshersResume/>
      <ResumeFormGPT/>
      {/* <ResumeFormc/> */}
      {/* <ResumeTemplate resumeData={resumeData}/> */}
      {/* <ResumeTemplate /> */}
      {/* <ResumeBuilder/> */}

    </div>
  )
}

export default App
