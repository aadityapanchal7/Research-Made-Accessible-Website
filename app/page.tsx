import React from 'react'
import Navbar from './components/Navbar'
import Lander from './components/Lander'
import Info from './components/Info'
import Colleges from './components/Colleges'

function page() {
  return (
    <section className=' bg-white '>
      <Navbar />
      <Lander />
      <Info />
      <Colleges />
    </section>
  )
}

export default page