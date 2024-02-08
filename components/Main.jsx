"use client";
import { useEffect } from "react";
import Nav from "./Nav";
import Contact from "./contents/Contact";
import Home from "./contents/Home";
import Projects from "./contents/Projects";
import Resume from "./contents/Resume";
import Skills from "./contents/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-h-screen">
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default Main;
