import React from "react";
import Image from "next/image";
import Html from "../../public/Icons/html.png";
import css from "../../public/Icons/css.png";
import sass from "../../public/Icons/sass.png";
import js from "../../public/Icons/js.png";
import tailwind from "../../public/Icons/tailwind.png";
import react from "../../public/Icons/react.png";
import star from "../../public/Icons/star.png";
import php from "../../public/Icons/php.png";
import express from "../../public/Icons/express.png";
import node from "../../public/Icons/node.png";
import sql from "../../public/Icons/sql.png";
import mongodb from "../../public/Icons/mongodb.png";
import C from "../../public/Icons/C.png";
import Cpp from "../../public/Icons/cpp.png";
import Python from "../../public/Icons/python.png";
import git from "../../public/Icons/git.png";
import github from "../../public/Icons/github.png";
import SkillSection from "./SkillSection";

const Skills = () => {
  const frontend = {
    title: "Frontend",
    items: [
      { name: "HTML", source: Html, level: 4 },
      { name: "CSS", source: css, level: 4 },
      { name: "JavaScript", source: js, level: 3 },
      { name: "React", source: react, level: 4 },
      { name: "SASS", source: sass, level: 3 },
      { name: "Tailwind", source: tailwind, level: 4 },
    ],
  };

  const data = [
    {
      title: "Backend",
      items: [
        { name: "PHP", source: php, level: 3 },
        { name: "Node.js", source: node, level: 3 },
        { name: "Express.js", source: express, level: 4 },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "SQL", source: sql, level: 3 },
        { name: "MongoDB", source: mongodb, level: 4 },
      ],
    },
    {
      title: "Programming",
      items: [
        { name: "C", source: C, level: 4 },
        { name: "C++", source: Cpp, level: 4 },
        { name: "Python", source: Python, level: 4 },
      ],
    },
    {
      title: "Others",
      items: [
        { name: "Git", source: git, level: 4 },
        { name: "GitHub", source: github, level: 4 },
      ],
    },
  ];

  const renderStars = (level) => {
    const stars = [];
    for (let i = 0; i < level; i++) {
      stars.push(
        <Image
          key={i}
          className="w-4 h-4" // Adjust the width and height as needed
          src={star}
          alt="Star"
        />
      );
    }
    return stars;
  };

  return (
    <div
      id="skills"
      className={`bg-[#DF826C] min-h-[75vh] m-auto py-10 px-[65px] md:px-[80px] flex flex-col justify-center items-center`}
    >
      <h1 className={`text-black text-4xl font-bold text-center`}>Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center content-center gap-8 m-5 px-10">
        <div
          className={`bg-[#363062] md:row-span-2 border-1 min-h-[400px] min-w-[350px] p-2 items-center justify-evenly flex flex-col rounded-3xl shadow-2xl ease-in-out duration-100`}
        >
          <h1 className="text-[#D8D9DA] sm:text-2xl p-2 text-2xl font-semibold underline">
            {frontend.title.toUpperCase()}
          </h1>
          <div className="grid grid-cols-3 place-content-center content-around sm:gap-2 gap-2">
            {frontend.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-2 ease-in-out duration-100"
              >
                <div className="relative group/item">
                  <Image
                    className="w-[65px] rounded-lg h-[68px] translate-y-3 group-hover/item:translate-y-0 transition-all ease-in-out duration-300"
                    src={item.source}
                    alt={item.name}
                  />
                  <div
                    className={`bg-[#363062] group-hover/item:translate-y-1 -translate-y-2 flex-col items-center justify-center text-bold text-[15px] text-center transition-all opacity-0 group-hover/item:opacity-100 duration-150`}
                  >
                    <p className="text-[#F0F0F0]">{item.name}</p>
                    <div className="flex justify-center">
                      {renderStars(item.level)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {data.map((item, idx) => (
          <SkillSection key={idx} title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
