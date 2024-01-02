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
  function openPdfWindow(pdfUrl) {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
        <head>
          <title>PDF Viewer</title>
        </head>
        <body style="margin: 0;">
          <iframe src="${pdfUrl}" style="width: 100%; height: 100vh; border: none;"></iframe>
        </body>
      </html>
    `);
  }

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
        <div
          className={`"shadow-gray-500 bg-gray-200 flex flex-col justify-center items-center text-black absolute right-2 bottom-2 z-1 rounded-full md:rounded-2xl shadow-sm sm:mx-2 mr-[-4px] sm:my-1 my-1 p-1 md:py-2  cursor-pointer group hover:scale-[1.2] ease-in duration-100 `}
        >
          {/* <div className="text-white group-hover:-translate-y-14 flex flex-col justify-center items-center group-hover:opacity-100 opacity-0 absolute transition-all duration-500 ease-in-out">
            <button className="bg-gray-700 px-3 py-2 rounded-lg">View</button>
          </div> */}
          <button
            onClick={() => openPdfWindow("/VISHNU.pdf")}
            className="sm:text-[13px] text-[9px]  font-bold  sm:h-[30px] h-[15px] sm:w-[100px] w-[60px] flex items-center justify-center"
          >
            My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
