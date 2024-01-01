import React, { useEffect } from "react";
import { useState } from "react";

const Skills = () => {
  const [change, setchange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leftLoad, setLeftLoad] = useState(false);
  const [rightLoad, setRightLoad] = useState(false);

  const next = [
    { name: "Vishnu" },
    { name: "Dhanush" },
    { name: "Vinayak" },
    { name: "Pradeep" },
  ];

  const present = [
    { name: "Vishnu" },
    { name: "Suraj" },
    { name: "Keshav" },
    { name: "Sanket" },
  ];

  const prev = [
    { name: "Vishnu" },
    { name: "Guruprasad" },
    { name: "Sai" },
    { name: "Sahil" },
  ];

  return (
    <div
      id="skills"
      className="h-screen bg-red-300 flex flex-col gap-5 justify-center items-center"
    >
      <div className={`w-screen grid grid-cols-3 gap-3 bg-red-300 h-[40%]`}>
        <div
          className={`${
            leftLoad ? "translate-x-[100%]" : "translate-x-[-100%]"
          } gap-3 w-240px bg-green-300 m-1 justify-center transition-all duration-200 ease-in-out`}
        >
          {prev.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
        <div
          className={`${rightLoad ? "translate-x-[-100%]" : ""} ${
            leftLoad ? "translate-x-[100%]" : ""
          } flex gap-3 w-240px bg-green-300 m-1 justify-center transition-all duration-200 ease-in-out`}
        >
          {present.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
        <div
          className={`${
            rightLoad ? "translate-x-[-100%]" : "translate-x-[100%]"
          } flex gap-3 w-240px bg-green-300 m-1 justify-center transition-all duration-200 ease-in-out`}
        >
          {next.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        <button
          className="p-2 hover:scale-125 hover:bg-red-400 hover:text-white rounded bg-red-500"
          onClick={() => {
            setTimeout(() => {
              setchange(!change);
              setLeftLoad(!leftLoad);
            }, 1000);
          }}
        >
          Change
        </button>
        <button
          className="p-2 hover:scale-125 hover:bg-red-400 hover:text-white rounded bg-red-500"
          onClick={() => {
            setTimeout(() => {
              setchange(!change);
              setRightLoad(!rightLoad);
            }, 1000);
          }}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default Skills;
