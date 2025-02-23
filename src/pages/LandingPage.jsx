import React from 'react'

import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'

function LandingPage() {
  return (
    <div>
      <div className='py-6 px-10 sm:px-20 md:px-24 lg:px-30 bg-[#121f28] w-screen text-white'>
        <Navbar />
        <Dashboard />
      </div>
      <Skills />
      <AboutMe/>
    </div>

  )
}

export default LandingPage