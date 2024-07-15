import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"], weight: ["300"] });

function Module() {
  return (
    <article className="md:space-x-8 space-y-8 px-10 md:space-y-0 md:flex-row flex flex-col mt-10 justify-center ">
      <section>
        <div className="bg-blue-300 rounded-3xl p-6 md:p-8 flex flex-col items-center md:w-80">
          <div className="w-40 h-auto">
            <Image
              src="/Avatar_Thinking_3.png"
              width={160}
              height={160}
              alt="Thinking"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start mt-6">
            <h2 className="font-semibold text-2xl md:text-3xl text-blue-950">
              Interest
            </h2>
            <p className={`text-lg text-left mt-3 leading-relaxed text-balance ${outfit.className}`}>
              Are you looking to dive into the world of research? Fill out the
              interest form with your contact and academic interests to get
              started.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-950 rounded-3xl p-7 flex flex-col items-center md:w-64">
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-xl md:text-2xl text-white mt-4">
              Matchmaking
            </h2>
            <p className={`text-md text-left mt-3 leading-relaxed text-balance text-blue-300 ${outfit.className}`}>
              After filling out the form, you&apos;ll be placed on a waitlist. Once
              matched with a professor, you&apos;ll receive an email with further
              instructions. Keep an eye on your inbox!
            </p>
          </div>
          <div className="w-40 h-auto mt-6">
            <Image
              src="/Aeroplane.png"
              width={160}
              height={160}
              alt="Plane"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-300 rounded-3xl p-6 md:p-8 flex flex-col items-center md:w-80">
          <div className="flex flex-col items-start mt-6">
            <h2 className="font-semibold text-2xl md:text-3xl text-blue-950">
              Research
            </h2>
            <p className={`text-lg text-left mt-3 leading-relaxed text-balance ${outfit.className}`}>
              If chosen based on your experience, you&apos;ll either start with introductory materials
              or get direct guidance from your matched professor. You&apos;ll be able to
              contact your mentor via email, Zoom, and more.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Module;
