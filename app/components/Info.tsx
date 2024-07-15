import React from 'react'
import Impact from './Impact';
import { Karla } from "next/font/google";
import { Outfit } from "next/font/google";

const outfit = Outfit({subsets: ['latin'], weight: ['400'] })
const karla = Karla({ subsets: ['latin'], weight: ['700']})

function Info() {
  return (
    <section className="flex justify-center w-full md:mt-10">
      <div className="w-full max-w-4xl text-center">
        <h1 className={`text-4xl md:text-5xl text-blue-950 ${karla.className}`}>
          Transforming Lives Through <span className="text-blue-400 md:pl-1">Research</span>
        </h1>
        <div className= {` flex items-center text-2xl md:text-2xl p-10 md:p-0 pt-10  ${outfit.className}`}>

          <div className=" bg-blue-200 p-5 text-2xl shadow-2xl rounded-2xl  mt-5 ">
            Our mentorship program provides underserved 
            students with the opportunity to learn and 
            grow through research mentorship.
            <Impact />
          </div>

        </div>        

      </div>
    </section>
  )
}

export default Info
