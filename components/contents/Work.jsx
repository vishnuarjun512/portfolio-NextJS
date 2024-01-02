import React from "react";
import WorkItem from "./WorkItem";

const Work = () => {
  const data = [
    {
      year: 2023,
      title: "Freelancing Web Developer",
      company: "Self-Independent",
      duration: "Present",
      details: "Willing to build MERN Stack Web Apps",
    },
    // {
    //   year: 2023,
    //   title: "Web Developer",
    //   company: "Solar Secure Solutions",
    //   duration: "3 Months",
    //   details: "Trained and Working on Industry Level Projects",
    // },
  ];

  return (
    <div
      id="work"
      className="flex flex-col justify-center items-center max-w-[1540px] p-5"
    >
      <h1 className={`text-[#001b5e] text-4xl font-bold text-center`}>Work</h1>
      <div className="flex justify-center flex-col pt-[16px]">
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
