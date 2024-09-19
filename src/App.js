import React from 'react'
import Resume from './components/Resume'
import FreshersResume from './components/FreshersResume'
import ResumeForm from './components/ResumeForm'
import FormPractise from './components/FormPractise'
import ResumeFormGPT from './components/ResumeFormGPT'
import ResumeFormc from './ResumeFormc'

const App = () => {
  return (
    <div>
    <FormPractise/>
      <ResumeForm/>
      {/* <Resume/> */}
      <FreshersResume/>
      <ResumeFormGPT/>
      <ResumeFormc/>
    </div>
  )
}

export default App
