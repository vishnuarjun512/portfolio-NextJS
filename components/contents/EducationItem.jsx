import React from "react";

const EducationItem = ({ year, title, college, details }) => {
  return (
    <div className="flex flex-col justify-start hover:scale-[1.04] lg:hover:scale-[1.3] hover:shadow-gray-300 duration-100 ease-in">
      <ol className="flex flex-col py-2 md:flex-row relative border-l border-white">
        <li className="mb-10 ml-4 flex flex-col gap-[.2px] ">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className=" inline-block px-2 py-1 font-semibold text-white bg-[#00b15e] rounded-md">
              {year}
            </span>
            <span className={`text-[#001b5e] text-lg font-semibold`}>
              {title}
            </span>
          </p>
          <span className={`text-black my-2 text-3xl font-bold leading-none `}>
            {college}
          </span>
          <p className="my-0 text-base font-normal text-gray-500">{details}</p>
        </li>
      </ol>
    </div>
  );
};

export default EducationItem;
