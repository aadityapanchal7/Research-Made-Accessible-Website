'use client';
import React,{useState} from 'react'
import { links } from '../../utils/Navlinks';
import { GrMenu, GrClose } from "react-icons/gr";


function Menu() {
  let [open, setOpen] = useState(false);

  return (
    <>
      <div 
      onClick={() => setOpen(!open)} 
      className="md:text-3xl text-xl right-8 top-6 cursor-pointer md:hidden items-center flex z-[10] bg-white"
      >
  
      {open ? <GrClose className=" " /> : <GrMenu className=" " />}
  
      </div>
  
      {/* Links */}
      <ul
      className={`md:flex items-center absolute md:static left-0 z-[5] w-full shadow-xl md:shadow-none md:w-auto transition-all duration-500 ease-in md:space-x-8 py-5 md:py-0 bg-white ${
        open ? " top-20" : " top-[-500px] "
      }`}
    >
      {links.map((item, index) => (
        <>
          <li key={index} className="md:ml-8 text-md md:my-0 my-7 w-full items-center flex justify-center space-y-4 md:space-y-0 md:w-auto ">
            <a
              href={item.path}
              className=" duration-200"
            >
              {item.name}
            </a>
          </li>
        </>
      ))}
      <a href="#Join" className=' w-full items-center flex justify-center space-y-4 md:space-y-0 md:w-auto'>
        <button className=" bg-blue-950 py-2 px-2 rounded-xl text-white hover:bg-blue-300 duration-500">
          Join Now!
        </button>
      </a>
    </ul>
    </>
  )
}

export default Menu