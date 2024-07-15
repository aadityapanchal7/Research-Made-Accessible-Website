import React from "react";
import { Karla } from "next/font/google";
import { questions } from "../../utils/Questions";
import { Outfit } from "next/font/google";

const karla = Karla({ subsets: ["latin"], weight: ["700"] });
const outfit = Outfit({ subsets: ['latin'], weight: ['400'] });

function Faqs() {
  return (
    <section className={`w-full flex justify-center md:mt-40 mt-14 ${outfit.className}`}>
      <div className="flex-col w-full max-w-3xl px-4">
        <h1 className={`text-4xl text-center md:text-5xl text-blue-950 ${karla.className}`}>
          Frequently Asked <span className="text-blue-400 md:pl-1">Questions</span>
        </h1>
        <div className="space-y-4 mt-10">
          {questions.map((element, index) => (
            <details
              className="group [&_summary::-webkit-details-marker]:hidden"
              key={index}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-semibold text-gray-800 rounded-lg bg-gray-50 p-4">
                <h2 className="font-medium text-wrap pr-4">{element.Title}</h2>
                <svg
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-2 leading-relaxed text-gray-700 text-wra pl-2">
                {element.Desc}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;