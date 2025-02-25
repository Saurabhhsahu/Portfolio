import React from 'react'

import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import Skills from '../components/Skills'
import Skills1 from '../components/Skills1'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'

function LandingPage() {
  return (
    <div className='w-screen'>
      <div className='py-6 px-10 sm:px-20 md:px-24 lg:px-30 bg-[#121f28] w-screen text-white'>
        <Navbar />
        <Dashboard />
      </div>
      <hr className='h-[5px] bg-[#ff715b] w-full'/>
      <Skills1 />
      <hr className='h-[5px] bg-[#ff715b] w-full'/>
      <AboutMe/>
      <hr className='h-[5px] bg-[#ff715b] w-full'/>
      <Contact />
    </div>

  )
}

export default LandingPage