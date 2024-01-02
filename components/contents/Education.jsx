import React from "react";
import EducationItem from "./EducationItem";

const Education = () => {
  const data = [
    {
      year: "2023 - 2025",
      title: "Master of Computer Applications",
      college: "Jain University",
      details: "Cloud Computing Specialization",
    },
    {
      year: "2018 - 2021",
      title: "Bachelor of Computer Applications",
      college: "KLE's RLS Insitute of BCA",
      details: "Specialized with Cloud Computing",
    },
    {
      year: "2016 - 2018",
      title: "PUC",
      college: "Bangur Nagar Junior College",
      details: "Science - PCMC",
    },
  ];
  return (
    <div className="px-5 flex flex-col justify-center items-center">
      <h1 className={`text-[#001b5e] text-4xl font-bold text-center `}>
        Education
      </h1>

      <div className="flex justify-center flex-col pt-[16px]">
        {data.map((item, idx) => (
          <EducationItem
            key={idx}
            year={item.year}
            title={item.title}
            college={item.college}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
