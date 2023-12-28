import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const ProjectItem = ({ image, name, tech, hosted }) => {
  return (
    <div className="max-w-[90%] relative flex items-center justify-center group h-full w-full  shadow-gray-400 rounded-xl hover:bg-gradient-to-b hover:scale-105 from-gray-700 to-[#14131a] ease-in-out duration-700">
      <Image
        className="w-full h-full rounded-xl group-hover:opacity-[0.1] object-cover transition-all duration-700 "
        src={image}
        alt="/"
      />
      <div className="absolute group-hover:flex hidden flex-col gap-3 justify-center items-center text-white">
        <div className="text-3xl font-bold">{name}</div>
        <div className="flex text-sm">
          {tech.map((t, index) => (
            <React.Fragment key={index}>
              {t}
              {index !== tech.length - 1 && ", "}
            </React.Fragment>
          ))}
        </div>
        <div className="flex gap-2">
          <a className="flex gap-1 hover:scale-110 duration-200 transition-all ease-in-out items-center justify-center bg-black hover:bg-white cursor-pointer hover:text-black font-semibold text-white p-2 rounded-lg">
            <MdOutlineWeb className="w-8 h-8" />
            <p>Hosted</p>
          </a>
          <a className="flex gap-1 hover:scale-110 duration-200 transition-all ease-in-out items-center justify-center bg-black hover:bg-white cursor-pointer hover:text-black font-semibold text-white p-2 rounded-lg">
            <FaGithub className="w-8 h-8" />
            <p>Code</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
