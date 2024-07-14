import React from 'react'
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'], weight: ['700']})

function Colleges() {
  return (
    <section className=' flex justify-center w-full text-center mt-10'>
      <h1 className={`text-4xl md:text-5xl text-blue-950 ${karla.className}`}>
        In Collaboration <span className="text-blue-400 md:pl-1">With</span>
      </h1>
    </section>
  )
}

export default Colleges