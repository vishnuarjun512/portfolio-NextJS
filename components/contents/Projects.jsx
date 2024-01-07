import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import data from "../data/data.json";

const projects = data.projectData;

const uniqueCategories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

const Projects = () => {
  const [category, setCategory] = useState(uniqueCategories[1]);

  const [displayingProjects, setDisplayingProjects] = useState(null);

  useEffect(() => {
    const setProjects = () => {
      if (category === "All") {
        setDisplayingProjects(projects);
      } else {
        setDisplayingProjects(
          projects.filter((project) => project.category === category)
        );
      }
    };
    setProjects();
  }, [category]);

  return (
    <div
      id="projects"
      className="min-h-full bg-green-200 w-full flex flex-col items-center justify-start py-10"
    >
      <h1 className="text-4xl font-bold text-center my-5 ">My Projects</h1>
      <div className="bg-blue-300 flex flex-col gap-5 p-3 max-w-[90%] md:max-w-[85%]">
        <div className="grid grid-flow-col place-content-between sm:place-content-around gap-1 md:gap-1 lg:gap-3">
          {uniqueCategories.map((c, index) => {
            return (
              <h1
                className={`${
                  category == uniqueCategories[index]
                    ? "bg-purple-600 hover:bg-purple-500 border-[2px] border-white text-white"
                    : "hover:bg-green-200"
                } w-full px-[10px] md:px-[2rem] lg:px-[2rem] xl:px-[60px] 2xl:px-[70px] p-2 py-3 md:py-5 text-[12px] sm:text-xl lg:text-3xl md:text-2xl text-center whitespace-nowrap font-semibold transition-all duration-200 ease-in-out bg-green-50 rounded-lg`}
                key={index}
                onClick={() => {
                  setCategory(uniqueCategories[index]);
                }}
              >
                {c}
              </h1>
            );
          })}
        </div>
        <div className="bg-blue-400 rounded-lg p-5 max-h-[480px] md:max-h-[680px] min-h-[220px] md:min-h-[410px] overflow-auto transition-all duration-200 ease-in-out">
          <div
            className={`bg-blue-400 rounded-lg w-full h-full  grid md:grid-cols-2 place-items-center content-start gap-5 overflow-auto transition-all ease-in-out `}
          >
            {displayingProjects?.map((p, index) => {
              return (
                <ProjectItem
                  key={index}
                  image={p.image}
                  name={p.name}
                  link={p.link}
                  tech={p.tech}
                  hosted={p.hosted}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
