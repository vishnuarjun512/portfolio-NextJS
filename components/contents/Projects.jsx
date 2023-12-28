import React, { useEffect, useState } from "react";
import Rozilla from "@/public/rozilla.png";
import Portfolio from "@/public/portfolio.png";
import Planti from "@/public/planti.png";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    name: "Rozilla",
    tech: ["MERN Stack", "Tailwind", "Firebase", "OAuth"],
    hosted: "",
    image: Rozilla,
    category: "Fullstack",
  },
  {
    name: "Planti",
    tech: ["ReactJS", "Sass"],
    hosted: "",
    image: Planti,
    category: "Frontend",
  },
  {
    name: "Portfolio",
    tech: ["ReactJS", "TailwindCSS", "Forms"],
    hosted: "",
    image: Portfolio,
    category: "Frontend",
  },
  {
    name: "Todo Web API",
    tech: ["ExpressJS", "Postman", "Swagger"],
    hosted: "",
    image: Portfolio,
    category: "Backend",
  },
  {
    name: "Portfolio NextJS",
    tech: ["NextJS"],
    hosted: "",
    image: Portfolio,
    category: "NextJS",
  },
];
// Your project data...

const uniqueCategories = [
  "All",
  ...new Set(projects.map((project, index) => project.category)),
];

const Projects = () => {
  const [category, setCategory] = useState(uniqueCategories[0]);
  const setProjects = () => {
    if (category === "All") {
      setDisplayingProjects(projects);
      return;
    }
    setDisplayingProjects(
      projects.filter((project) => project.category === category)
    );
  };
  const [displayingProjects, setDisplayingProjects] = useState(null);

  useEffect(() => {
    setProjects();
  }, [category]);

  return (
    <div
      id="projects"
      className="min-h-screen bg-green-200 w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold text-center my-4">My Projects</h1>
      <div className="bg-blue-300 flex flex-row md:flex-col gap-5 p-3 min-w-[9-%] md:w-[85%]">
        <div className="flex md:flex-row flex-col justify-around items-start md:items-center gap-2">
          {uniqueCategories.map((c, index) => {
            return (
              <h1
                className={`${
                  category == uniqueCategories[index]
                    ? "bg-purple-500 border-[2px] border-white text-white"
                    : " "
                } w-full md:w-fit md:px-20 text-center p-2 py-4 whitespace-nowrap  hover:bg-green-200 font-semibold transition-all duration-200 ease-in-out bg-green-50 rounded-lg`}
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
        <div className="bg-blue-400 grid md:grid-cols-2 place-items-center gap-5 p-4 max-h-[480px] md:max-h-[820px] min-h-[480px] overflow-auto">
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
  );
};

export default Projects;
