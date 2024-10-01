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
    AOS.init({
      offset: 20,
      duration: 400,
      easing: "ease-in-sine",
      delay: 50,
    });
  }, []);
  return (
    <div className="w-full bg-slate-950">
      {/* <Nav /> */}
      <Home />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default Main;
