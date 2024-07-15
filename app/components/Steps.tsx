import React from 'react'
import Module from './stepModule';
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'], weight: ['700'] });

function Steps() {
  return (
    <section className=' mt-10'> 
      <div className=' flex-col'>
        <div className=' flex justify-center w-full'>
          <h1 className={`text-4xl md:text-5xl mt-10 text-blue-950 ${karla.className}`}>
            With 3 <span className="text-blue-400 md:pl-1">Easy</span> Steps
          </h1>
        </div>
  
        <Module />
      </div>
    </section>
  )
}

export default Steps