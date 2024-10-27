import React from "react";
import Image from "next/image";
import { Teamutil } from "../../utils/Teamutil";

function Team() {
  return (
    <section>
      <hr className="mt-5" />

      <div className="w-full flex justify-center mt-32">
        <div className="flex flex-col text-center">
          <div className="mt-5 mx-10">
            {/* Adjust grid to be responsive */}
            <div className="grid grid-cols-1 md:space-y-0 space-y-2 sm:grid-cols-2 md:grid-cols-6  ">
              {Teamutil.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center  text-center mx-2"
                >
                  <Image
                    src={item.image}
                    alt="img"
                    width={400}
                    height={400}
                    className=" rounded-xl border-4 border-black"
                  />

                  <div className="font-semibold mt-2">{item.name}</div>

                  <span className="mt-1">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
