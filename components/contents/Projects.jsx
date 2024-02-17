import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import data from "../data/data.json";
import { Tabs } from "../ui/Tabs";
import { Lamp } from "../ui/Lamp";

const projects = data.projectData;

const uniqueCategories = [
  // "All",
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

  let tabs = uniqueCategories.map((c) => {
    return {
      title: (
        <h1
          className={` text-white w-full text-[12px] sm:text-xl cursor-pointer lg:text-3xl md:text-2xl text-center whitespace-nowrap font-semibold transition-all duration-200 ease-in-out rounded-lg`}
        >
          {c}
        </h1>
      ),
      value: c,
      content: (
        <div className="bg-slate-800 grid md:grid-cols-2 gap-4 p-3 max-h-[500px] overflow-y-auto ">
          {projects
            .filter((p) => p.category == c)
            .map((p) => (
              <ProjectItem
                key={p.name}
                image={p.image}
                name={p.name}
                link={p.link}
                tech={p.tech}
                hosted={p.hosted}
              />
            ))}
        </div>
      ),
    };
  });

  // tabs[0].content = projects.map((p) => (
  //   <ProjectItem
  //     key={p.name}
  //     image={p.image}
  //     name={p.name}
  //     link={p.link}
  //     tech={p.tech}
  //     hosted={p.hosted}
  //   />
  // ));

  return (
    <div
      id="projects"
      className="min-h-[900px] bg-slate-950 w-full flex flex-col items-center justify-start"
    >
      <Lamp title="My Projects" size />
      {/* <div
        data-aos="fade-up"
        className="bg-blue-300 flex flex-col gap-5 p-3 max-w-[90%] md:max-w-[85%]"
      >
        <div className="grid grid-flow-col place-content-between sm:place-content-around gap-1 md:gap-1 lg:gap-3">
          {uniqueCategories.map((c, index) => {
            return (
              <h1
                className={`${
                  category == uniqueCategories[index]
                    ? "bg-purple-600 hover:bg-purple-500 border-[2px] border-white text-white"
                    : "hover:bg-green-200"
                } w-full px-[10px] md:px-[2rem] lg:px-[2rem] xl:px-[60px] 2xl:px-[70px] p-2 py-3 md:py-5 text-[12px] sm:text-xl cursor-pointer lg:text-3xl md:text-2xl text-center whitespace-nowrap font-semibold transition-all duration-200 ease-in-out bg-green-50 rounded-lg`}
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
        <div className="bg-blue-400 rounded-lg p-5 max-h-[480px] grid md:grid-cols-2 place-items-center place-content-center content-start gap-5 md:max-h-[680px]  overflow-auto transition-all duration-200 ease-in-out">
          {displayingProjects?.map((p, index) => {
            return (
              <ProjectItem
                key={index}
                index={index}
                image={p.image}
                name={p.name}
                link={p.link}
                tech={p.tech}
                hosted={p.hosted}
              />
            );
          })}
        </div>
      </div> */}
      <div className="my-10 mx-12 p-3 flex flex-col justify-center items-center">
        <Tabs
          tabs={tabs}
          contentClassName="max-h-[600px]"
          containerClassName="bg-slate-900 rounded-2xl px-5 sm:px-[50px] lg:px-[100px] xl:px-[250px] py-5 gap-3"
          activeTabClassName="bg-blue-400 rounded-xl"
        />
      </div>
    </div>
  );
};

export default Projects;
