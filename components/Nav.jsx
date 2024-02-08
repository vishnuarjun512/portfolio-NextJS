"use client";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";

import { BsPerson } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 600) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const iconStyle =
    "w-16 h-16 border rounded-full bg-white shadow-gray-600 shadow-lg p-2 cursor-pointer";
  return (
    <div className="absolute z-10 w-full">
      <div className="md:fixed md:flex hidden justify-center items-center h-full  left-4">
        {/* Left Side Nav */}
        <div className="flex flex-col gap-7 justify-center items-start transition-all ease-out duration-150">
          {[
            {
              to: "#main",
              icon: <AiOutlineHome className={iconStyle} />,
              label: "Home",
            },
            {
              to: "#skills",
              icon: <GiSkills className={iconStyle} />,
              label: "Skills",
            },
            {
              to: "#projects",
              icon: <AiOutlineProject className={iconStyle} />,
              label: "Projects",
            },
            {
              to: "#resume",
              icon: <BsPerson className={iconStyle} />,
              label: "Resume",
            },
            {
              to: "#contact",
              icon: <AiOutlineMail className={iconStyle} />,
              label: "Contact Me",
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="fade-right"
              className="flex justify-center items-center gap-3 group hover:scale-110 duration-200 ease-in-out transition-all"
            >
              <a href={item.to}>{item.icon}</a>
              <p
                className={`font-bold ${
                  scroll ? "text-black" : "text-white"
                } text-xl group-hover:translate-x-1 group-hover:opacity-100 opacity-0 -translate-x-2 duration-200 ease-in-out transition-all`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Button */}
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="md:hidden absolute top-4 right-4 z-20 hover:scale-110"
      >
        <AiOutlineMenu
          className={` w-7 h-7 duration-1000 ease-in-out transition`}
        />
      </div>

      {/* Sliding Menu */}
      <div
        className={`md:hidden fixed top-0 bg-black flex justify-center items-center h-screen w-[70%] transform ${
          !nav
            ? "translate-x-[-100%] opacity-0 ease-in-out duration-300"
            : "translate-x-0 opacity-1 ease-in-out duration-300"
        }`}
      >
        <ul className="flex flex-col justify-center gap-4 bg-border text-white">
          <li className="p-3 pr-5 text-2xl font-bold hover:scale-110 duration-200 ease-in-out transition-all cursor-pointer border rounded-lg hover:text-black hover:bg-white">
            <a href="#main" className="flex items-center justify-start gap-2">
              <AiOutlineHome />
              <p>Home</p>
            </a>
          </li>
          <li className="p-3 pr-5 text-2xl font-bold hover:scale-110 duration-200 ease-in-out transition-all cursor-pointer border rounded-lg hover:text-black hover:bg-white">
            <a href="#skills" className="flex items-center justify-start gap-2">
              <GiSkills />
              <p>Skills</p>
            </a>
          </li>
          <li className="p-3 pr-5 text-2xl font-bold hover:scale-110 duration-200 ease-in-out transition-all cursor-pointer border rounded-lg hover:text-black hover:bg-white">
            <a
              href="#projects"
              className="flex items-center justify-start gap-2"
            >
              <AiOutlineProject />
              <p>Projects</p>
            </a>
          </li>
          <li className="p-3 pr-5 text-2xl font-bold hover:scale-110 duration-200 ease-in-out transition-all cursor-pointer border rounded-lg hover:text-black hover:bg-white">
            <a href="#resume" className="flex items-center justify-start gap-2">
              <BsPerson />
              <p>Resume</p>
            </a>
          </li>
          <li className="p-3 pr-5 text-2xl font-bold hover:scale-110 duration-200 ease-in-out transition-all cursor-pointer border rounded-lg hover:text-black hover:bg-white">
            <a
              href="#contact"
              className="flex items-center justify-start gap-2"
            >
              <AiOutlineMail />
              <p>Contact Me</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
