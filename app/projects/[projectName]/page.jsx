"use client";
import { useParams } from "next/navigation";
import React from "react";
import data from "../../../components/data/data.json";
import Gallery from "./Gallery";

const page = ({}) => {
  const params = useParams();
  const projectName = params.projectName.replaceAll("%20", " ");
  const projectDetails = data.projectData.find(
    (project) => project.name == projectName
  );

  return (
    <div className="p-2 bg-green-300 min-h-screen">
      <h1 className="text-3xl w-fit m-auto flex items-center justify-center font-bold border-2 rounded-xl mb-2 p-2">
        {projectDetails.name}
      </h1>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-[70%] bg-amber-500 p-3">
          <div className="p-3">
            <Gallery images={projectDetails.image} />
          </div>
        </div>
        <div className="sm:w-[30%] flex-col flex justify-start bg-violet-600 p-3">
          <div className="flex flex-col gap-2 p-3">
            <h1 className="text-xl font-bold">Tech Stack Used:</h1>
            <ul>
              {projectDetails.tech.map((t, index) => {
                return (
                  <li className="list-disc" key={index}>
                    {t}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" bg-violet-300 p-3 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-2">Project Description:</h2>
            <ul className="ml-2">
              {projectDetails.description.map((d, index) => (
                <li key={index} className="list-disc text-sm text-gray-700">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 items-center justify-center p-3">
            {projectDetails.hosted && (
              <a
                className="p-3 rounded-xl bg-violet-800 text-white hover:bg-violet-200 hover:text-black cursor-pointer"
                href={projectDetails.hosted}
              >
                Hosted
              </a>
            )}

            <a
              className="p-3 rounded-xl bg-violet-800 text-white hover:bg-violet-200 hover:text-black cursor-pointer"
              href={projectDetails.link}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
