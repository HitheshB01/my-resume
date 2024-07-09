import React from 'react'
import Resume from './components/Resume'
import FreshersResume from './components/FreshersResume'
import ResumeForm from './components/ResumeForm'

const App = () => {
  return (
    <div>
      <ResumeForm/>
      <Resume/>
      <FreshersResume/>
    </div>
  )
}

export default App
