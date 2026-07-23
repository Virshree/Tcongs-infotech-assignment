import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import Blog from '../components/Blog'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Process/>
        <Blog/>
    </div>
  )
}

export default HomePage