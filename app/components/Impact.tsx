import React from "react";
import { Karla } from "next/font/google";
import { Stats } from "../../utils/rmaStats";

const karla = Karla({ subsets: ["latin"], weight: ["500"] });

function Impact() {
  return (
    <section className={`mx-auto flex flex-wrap justify-center md:px-36 px-10 mt-10 ${karla.className}`}>

      <h1 className={`text-3xl md:text-5xl text-blue-950 md:hidden ${karla.className}`}>
        With Over
      </h1>   
      {Stats.map((item, index) => (
        <div className=" p-4" key={index}>
          <dl className="flex flex-col rounded-lg bg-blue-400/50 px-5 py-5 text-center">
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
