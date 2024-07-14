
import React from 'react'
import Image from 'next/image';
import Menu from './Nav';

function Navbar() {

  return (
    <div className=' shadow-2xl border border-b-4'>
      <section className="flex items-center justify-between py-6 md:px-36 px-7 w-full  ">
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
        <Menu />
      </section>
    </div>
  )
}

export default Navbar