import React from "react";
import Education from "./Education";
import Work from "./Work";

const Resume = () => {
  return (
    <div
      id="resume"
      className="flex flex-col md:flex-row justify-center items-center md:items-start gap-20 bg-[#9BB8CD] min-h-[75vh] py-10 md:py-20"
    >
      <Education />
      <Work />
    </div>
  );
};

export default Resume;
