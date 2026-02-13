import React from "react";
import Image from "next/image";

const Skills = ({ title, items }) => {
  return (
    <>
      <div className="w-11/12 sm:w-2/3 mx-auto mb-10">
        <h1 className="focus:outline-none xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pt-4">
          {title}
        </h1>
      </div>
      <div className="sm:py-6 px-8 sm:24 flex flex-wrap items-center">
        {items.map((item) => (
          <div
            key={item}
            className="w-1/3 sm:w-1/6 flex justify-center xl:pb-10 pb-16 items-center inset-0 transform hover:scale-75 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-xl"
          >
            <Image
              src={`/icons/svg/${item}.svg`}
              width={96}
              height={96}
              alt={item}
              loading="lazy"
              className="focus:outline-none w-12 sm:w-16"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
