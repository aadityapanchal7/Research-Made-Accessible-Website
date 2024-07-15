import React from "react";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"], weight: ["700"] });

function Testimonials() {
  return (
    <section className="flex justify-center mt-20 bg-gray-50 md:h-64" id='Testimonials'>
      <div className="w-full max-w-[1340px] flex flex-col md:flex-row">
        {/* Text Container */}
        <div className="md:w-1/2 flex items-center justify-center">
          <h2 className={`text-3xl font-bold text-balance text-center tracking-tight text-blue-950 sm:text-5xl ${karla.className}`}>
            Don't just take our <span className="text-blue-400">word</span> for
            it ...
          </h2>
        </div>

        {/* Video Container */}
        <div className="md:w-1/2 flex justify-center items-center md:mt-20 mt-10 mx-10 md:mx-0">
          <video className=" md:mr-20 shadow-md bg-blue-300 p-5" controls >
            <source src="/RMA.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
      </div>
    </section>
  );
}

export default Testimonials;
