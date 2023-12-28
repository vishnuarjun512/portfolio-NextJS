import React from "react";
import { useState } from "react";

const Skills = () => {
  const [change, setchange] = useState(false);

  return (
    <div
      id="skills"
      className="h-screen bg-red-300 flex flex-col gap-5 justify-center items-center"
    >
      <div
        className={`w-10 h-10 flex bg-green-300 transition-all ease-in-out duration-200 ${
          change ? "translate-x-[100%]" : " translate-x-[-100%]"
        }`}
      ></div>
      <button
        className="p-2 hover:scale-125 hover:bg-red-400 hover:text-white rounded bg-red-500"
        onClick={() => {
          setchange(!change);
          console.log(change);
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Skills;
