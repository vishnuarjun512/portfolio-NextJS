"use client";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
} from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsMailbox, BsPerson } from "react-icons/bs";
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

  const menu = (
    <AiOutlineMenu
      className={`w-7 h-7 hover:scale-110 opacity-1 duration-1000 ease-in-out transition-opacity`}
    />
  );

  const close = (
    <IoMdCloseCircleOutline
      className={`w-7 h-7 hover:scale-110 opacity-1 duration-1000 ease-in-out transition-opacity`}
    />
  );

  return (
    <div className="absolute z-10 w-full">
      <div className="md:fixed md:block hidden top-[50%] translate-y-[-50%] left-4">
        {/* Left Side Nav */}
        <div className="flex flex-col gap-7 justify-center items-start transition-all ease-out duration-150">
          <div className="flex justify-center items-center gap-3 group hover:scale-110 duration-200 ease-in-out transition-all">
            <a href="#main">
              <AiOutlineHome className="w-16 h-16 border rounded-full bg-white shadow-gray-600 shadow-lg p-2 cursor-pointer" />
            </a>
            <p
              className={`font-bold ${
                scroll ? "text-black" : "text-white"
              } text-xl group-hover:translate-x-1 group-hover:opacity-100 opacity-0 -translate-x-2 duration-200 ease-in-out transition-all`}
            >
              Home
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 group hover:scale-110 duration-200 ease-in-out transition-all">
            <a href="#skills">
              <GiSkills className="w-16 h-16 border rounded-full bg-white shadow-gray-600 shadow-lg p-2 cursor-pointer" />
            </a>
            <p
              className={`font-bold ${
                scroll ? "text-black" : "text-white"
              } text-xl group-hover:translate-x-1 group-hover:opacity-100 opacity-0 -translate-x-2 duration-200 ease-in-out transition-all`}
            >
              Skills
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 group hover:scale-110 duration-200 ease-in-out transition-all">
            <a href="#projects">
              <AiOutlineProject className="w-16 h-16 border rounded-full bg-white shadow-gray-600 shadow-lg p-2 cursor-pointer" />
            </a>
            <p
              className={`font-bold ${
                scroll ? "text-black" : "text-white"
              } text-xl group-hover:translate-x-1 group-hover:opacity-100 opacity-0 -translate-x-2 duration-200 ease-in-out transition-all`}
            >
              Projects
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 group hover:scale-110 duration-200 ease-in-out transition-all">
            <a href="#resume">
              <BsPerson className="w-16 h-16 border rounded-full bg-white shadow-gray-600 shadow-lg p-2 cursor-pointer" />
            </a>
            <p
              className={`font-bold ${
                scroll ? "text-black" : "text-white"
              } text-xl group-hover:translate-x-1 group-hover:opacity-100 opacity-0 -translate-x-2 duration-200 ease-in-out transition-all`}
            >
              Resume
            </p>
          </div>
          <div className="flex justify-center items-center gap-3 group hover:scale-110 duration-200 ease-in-out transition-all">
            <a href="#contact">
              <AiOutlineMail className="w-16 h-16 border rounded-full bg-white shadow-gray-600 shadow-lg p-2 cursor-pointer" />
            </a>
            <p
              className={`font-bold ${
                scroll ? "text-black" : "text-white"
              } text-xl group-hover:translate-x-1 group-hover:opacity-100 opacity-0 -translate-x-2 duration-200 ease-in-out transition-all`}
            >
              Contact Me
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Button */}
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="md:hidden fixed top-4 right-4 z-20"
      >
        <label className="hamburger">
          <input type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
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
