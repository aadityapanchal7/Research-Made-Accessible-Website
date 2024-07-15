import React from 'react';
import { Karla } from 'next/font/google';
import Image from 'next/image';
import { collegeList } from '../../utils/collegeLists';

const karla = Karla({ subsets: ['latin'], weight: ['700'] });

function Colleges() {
  return (
    <section className="flex flex-col justify-center items-center bg-blue-100/45 w-full text-center mt-20 px-4 md:px-0" id='Colleges'>
      <h1 className={`text-4xl md:text-5xl mt-10 text-blue-950 ${karla.className}`}>
        In Collaboration <span className="text-blue-400 md:pl-1">With</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-8 md:mt-16 px-5 md:px-32">
        {collegeList.map((item, index) => (
          <div className="flex justify-center p-2 py-0" key={index}>
            <Image 
              src={item.name}
              width={item.width}
              height={item.height}
              alt={item.alt}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <h1 className={`text-2xl bg-blue-50 px-2 py-3 rounded-2xl mt-2 md:text-3xl text-blue-950 ${karla.className}`}>
        and many more! <span className="text-blue-400 md:pl-1"></span>
      </h1>

    </section>
  );
}

export default Colleges;
