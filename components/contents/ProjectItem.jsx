import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const ProjectItem = ({ image, name, tech, hosted, link }) => {
  return (
    <div className="min-h-[200px] md:min-h-[350px] md:max-h-[500px] max-w-[100%] relative flex items-center justify-center group h-full w-full shadow-gray-400 rounded-xl hover:bg-gradient-to-b hover:scale-105 from-gray-700 to-[#14131a] ease-in-out duration-700">
      <Image
        className="w-full h-full rounded-xl group-hover:opacity-[0.1] object-cover transition-all duration-700 "
        src={image}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-105 transition-all duration-300 text-white z-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-[20px] sm:text-[40px] whitespace-nowrap font-bold text-center">
            {name}
          </p>
          <div className="flex text-[12px] sm:text-[20px] text-center md:whitespace-nowrap">
            {tech.map((t, index) => (
              <React.Fragment key={index}>
                {t}
                {index !== tech.length - 1 && ", "}
              </React.Fragment>
            ))}
          </div>
          <div className="flex gap-2">
            {hosted.yes && (
              <a
                href={hosted.link}
                target="_blank"
                className="flex gap-1 md:gap-2 hover:scale-110 duration-200 transition-all ease-in-out items-center justify-between bg-black hover:bg-white cursor-pointer hover:text-black font-semibold text-white p-2 md:px-5 rounded-lg"
              >
                <MdOutlineWeb className="w-8 h-8" />
                <p>Hosted</p>
              </a>
            )}
            <a
              href={link}
              target="_blank"
              className="flex gap-1 md:gap-2 hover:scale-110 duration-200 transition-all ease-in-out items-center justify-between bg-black hover:bg-white cursor-pointer hover:text-black font-semibold text-white p-2 md:px-5 rounded-lg"
            >
              <FaGithub className="w-8 h-8" />
              <p>Code</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
