"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaTwitterSquare,
} from "react-icons/fa";
const Home = () => {
  return (
    <div
      id="main"
      className="min-h-screen flex items-center justify-center bg-custom bg-center bg-cover bg-no-repeat object-cover w-full"
    >
      <div className="w-[100vw] h-full absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]" />
      <div className="flex flex-col justify-center items-center z-[2] text-white">
        <h1 className="text-4xl md:text-6xl font-bold p-4">I'm Vishnu V V</h1>
        <h2 className="flex font-semibold md:text-3xl text-2xl p-4">
          I'm a
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "PHP Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "Tech Enthusiast",
              2000,
              "Python Developer",
              2000,
            ]}
            wrapper="div"
            speed={50}
            cursor={true}
            style={{ fontSize: "1em", paddingLeft: "5px" }}
            repeat={Infinity}
          />
        </h2>
        <div className="flex gap-3 items-center p-4 hover:scale-105 duration-200 ease-in-out transition-all">
          <FaInstagram className="md:w-16 md:h-16 w-12 h-12 border p-1 rounded-full shadow-lg hover:scale-110 duration-200 transition-all ease-in-out" />
          <FaGithub className=" md:w-16 md:h-16 w-12 h-12 border p-1 rounded-full shadow-lg hover:scale-110 duration-200 transition-all ease-in-out" />
          <FaLinkedin className=" md:w-16 md:h-16 w-12 h-12 border p-1 rounded-full shadow-lg hover:scale-110 duration-200 transition-all ease-in-out" />
          <FaFacebook className=" md:w-16 md:h-16 w-12 h-12 border p-1 rounded-full shadow-lg hover:scale-110 duration-200 transition-all ease-in-out" />
          <FaTwitterSquare className=" md:w-16 md:h-16 w-12 h-12 border p-1 rounded-full shadow-lg hover:scale-110 duration-200 transition-all ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default Home;
