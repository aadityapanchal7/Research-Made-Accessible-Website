import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({subsets: ['latin'], weight: ['400'] })

function Lander() {
  return (
    <section className={`bg-white z-[-10] ${outfit.className}`}>
      <div className="mx-auto max-w-screen-xl px-8 flex lg:h-[500px] items-center h-[800px]">
        <div className="mx-auto max-w-3xl text-center justify-start space-y-6 bg-blue-50/60 md:p-10 md:px-20 py-20 md:py-10 rounded-2xl shadow-md ">
          <h1 className="bg-gradient-to-r from-blue-950  to-blue-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl lg:text-7xl">
            Inclusive Academia
            <span className="sm:block py-2 "> for everyone </span>
          </h1>

          <p className="mx-auto max-w-xl sm:text-md/relaxed">
            Making research, well accessible
          </p>

          <div className=" space-x-4 ">
            <button className=" bg-blue-950 text-white py-2 px-4 rounded-2xl">
              Join Now!
            </button>
            <button className=" bg-blue-950 text-white py-2 px-4 rounded-2xl">
              Learn More!
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Lander;