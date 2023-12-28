import React, { useEffect, useState } from "react";
import Rozilla from "@/public/rozilla.png";
import Portfolio from "@/public/portfolio.png";
import Portfolio2 from "@/public/portfolio2.png";
import MTVX from "@/public/mtvx.png";
import imageGallery from "@/public/imageGallery.png";
import Calculator from "@/public/calculator.png";
import Todo from "@/public/todo.png";
import DA from "@/public/dataAnalytics.png";
import Planti from "@/public/planti.png";
import ProjectItem from "./ProjectItem";

const projects2 = [
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
];

const projects = [
  {
    name: "Rozilla RealEstate",
    link: "https://github.com/vishnuarjun512/mern-RealEstate",
    tech: ["MERN Stack", "TailwindCSS", "Redux", "Firebase"],
    image: Rozilla,
    hosted: {
      yes: true,
      link: "https://rozilla-realestate.onrender.com/",
    },
    category: "FullStack",
  },

  {
    name: "Image Gallery",
    link: "https://github.com/vishnuarjun512/unsplash-image-gallery-ReactJS",
    tech: ["ReactJS", "TailwindCSS", "Unsplash API"],
    image: imageGallery,
    hosted: {
      yes: false,
      link: "",
    },
    category: "Frontend",
  },
  {
    name: "Todo Web API",
    tech: ["ExpressJS", "Postman", "Swagger"],
    link: "https://github.com/vishnuarjun512/Task-Manager-API",
    image: Todo,
    hosted: {
      yes: true,
      link: "https://documenter.getpostman.com/view/30059269/2s9YeD9DRt",
    },
    category: "Backend",
  },
  {
    name: "MTVx Movies",
    link: "https://github.com/vishnuarjun512/Movie-Website/tree/dev",
    tech: ["ReactJS", "TailwindCSS", "MovieListAPI"],
    image: MTVX,
    hosted: {
      yes: false,
      link: "",
    },
    category: "Frontend",
  },
  {
    name: "Plantii Ecommerce",
    link: "https://github.com/vishnuarjun512/Plant_Ecommerce",
    tech: ["ReactJS", "SASS"],
    image: Planti,
    hosted: {
      yes: false,
      link: "",
    },
    category: "Frontend",
  },
  {
    name: "Data Analytics",
    link: "https://github.com/vishnuarjun512/Data-Finance-React",
    tech: ["ReactJS", "Tailwind"],
    image: DA,
    hosted: {
      yes: false,
      link: "",
    },
    category: "Frontend",
  },
  {
    name: "Portfolio",
    link: "https://github.com/vishnuarjun512/portfolio",
    tech: ["ReactJS", "TailwindCSS"],
    image: Portfolio,
    hosted: {
      yes: true,
      link: "https://vishnuarjun512.github.io/portfolio/",
    },
    category: "Frontend",
  },
  {
    name: "Simple Calculator",
    link: "https://github.com/vishnuarjun512/Calculator",
    tech: ["Javascript"],
    image: Calculator,
    hosted: {
      yes: true,
      link: "https://vishnuarjun512.github.io/Calculator/",
    },
    category: "Frontend",
  },
  {
    name: "Portfolio NextJS",
    tech: ["NextJS"],
    link: "https://github.com/vishnuarjun512/portfolio-NextJS",
    hosted: "",
    image: Portfolio2,
    category: "NextJS",
  },
];
// Your project data...

const uniqueCategories = [
  "All",
  ...new Set(projects.map((project, index) => project.category)),
];

const Projects = () => {
  const [category, setCategory] = useState(uniqueCategories[1]);
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
      className="min-h-screen bg-green-200 w-full flex flex-col items-center justify-start pt-10"
    >
      <h1 className="text-4xl font-bold text-center my-4">My Projects</h1>
      <div className="bg-blue-300 flex flex-col gap-5 p-3 max-w-[90%] md:max-w-[85%]">
        <div className="flex flex-row md:flex-row justify-around items-center md:items-center gap-2">
          {uniqueCategories.map((c, index) => {
            return (
              <h1
                className={`${
                  category == uniqueCategories[index]
                    ? "bg-purple-600 hover:bg-purple-500 border-[2px] border-white text-white"
                    : "hover:bg-green-200"
                } w-full md:w-fit md:px-6 lg:px-20 p-2 py-3 md:py-4 text-[12px] lg:text-2xl md:text-xl sm:text-base text-center whitespace-nowrap font-semibold transition-all duration-200 ease-in-out bg-green-50 rounded-lg`}
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
        <div className="bg-blue-400 rounded-lg grid md:grid-cols-2 place-items-center content-start gap-5 p-5 max-h-[480px] md:max-h-[680px] min-h-[220px] md:min-h-[410px] overflow-auto">
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
