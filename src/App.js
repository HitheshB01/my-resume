import React from 'react'
import Resume from './components/Resume'
import FreshersResume from './components/FreshersResume'
import ResumeForm from './components/ResumeForm'
import FormPractise from './components/FormPractise'

const App = () => {
  return (
    <div>
    {/* <FormPractise/> */}
      <ResumeForm/>
      <Resume/>
      <FreshersResume/>
    </div>
  )
}

export default App
