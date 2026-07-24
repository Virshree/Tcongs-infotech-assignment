import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import Blog from '../components/Blog'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Process/>
        <Blog/>
        <FAQ/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default HomePage