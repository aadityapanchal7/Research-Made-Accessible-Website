import React from "react";

function Lander() {
  return (
    <section className="bg-white z-[-10]">
      <div className="mx-auto max-w-screen-xl px-8 flex lg:h-[500px] items-center h-[800px]">
        <div className="mx-auto max-w-3xl text-center justify-center space-y-6">
          <h1 className="bg-gradient-to-r from-blue-950  to-blue-300 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
            Inclusive Academia
            <span className="sm:block py-2 "> for everyone </span>
          </h1>

          <p className="mx-auto max-w-xl sm:text-md/relaxed">
            Making research, well accessible
          </p>
        </div>
      </div>
    </section>
  );
}

export default Lander;