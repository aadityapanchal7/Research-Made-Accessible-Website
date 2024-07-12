"use client";

import React, { useState } from 'react'
import { GrMenu, GrClose } from "react-icons/gr";
import { links } from '../utils/Navlinks';
import Image from 'next/image';

function Navbar() {
  let [open, setOpen] = useState(false);

  return (
    <section className="flex items-center justify-between py-6 md:px-36 px-7 shadow-xl w-full  ">
      {/* Logo */}
      <div className="flex space-x-2 items-center bg-white z-[10] ">
          <Image
            src="/assets/RMA-Logo.webp"
            alt="Logo"
            width={80}
            height={60}
          />
      </div>

      {/* Menu icon for mobile */}
      <div
        onClick={() => setOpen(!open)}
        className="md:text-3xl text-xl right-8 top-6 cursor-pointer md:hidden items-center flex z-[10] bg-white "
      >
        {open ? <GrClose className=" " /> : <GrMenu className=" " />}
      </div>

      {/* Links */}
      <ul
        className={`md:flex items-center absolute md:static left-0 z-[5] w-full md:w-auto transition-all duration-500 ease-in md:space-x-8 py-5 md:py-0 border border-gray-400 md:border-none bg-white ${
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
    </section>
  )
}

export default Navbar