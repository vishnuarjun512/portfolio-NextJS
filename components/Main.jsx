"use client";
import Nav from "./Nav";
import Contact from "./contents/Contact";
import Home from "./contents/Home";
import Projects from "./contents/Projects";
import Resume from "./contents/Resume";
import Skills from "./contents/Skills";

const Main = () => {
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
