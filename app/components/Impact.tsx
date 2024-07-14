import React from "react";
import { Karla } from "next/font/google";
import { Stats } from "../../utils/rmaStats";

const karla = Karla({ subsets: ["latin"], weight: ["700"] });

function Impact() {
  return (
    <section className={`mx-auto flex flex-wrap justify-center md:px-36 px-10 mt-10 ${karla.className}`}>

      <h1 className={`text-3xl md:text-5xl text-blue-950 md:hidden ${karla.className}`}>
        With Over
      </h1>   
      {Stats.map((item, index) => (
        <div className="w-full sm:w-1/2 lg:w-1/2 p-4" key={index}>
          <dl className="flex flex-col rounded-lg bg-blue-400/50 px-6 py-8 text-center">
            <dt className="order-last text-lg font-medium ">
              {item.name}
            </dt>
            <dd className="text-4xl font-extrabold text-blue-950 md:text-5xl">
              {item.amount}
            </dd>
          </dl>
        </div>
      ))}
    </section>
  );
}

export default Impact;
