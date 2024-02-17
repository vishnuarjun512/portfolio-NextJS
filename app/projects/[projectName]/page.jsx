"use client";
import { useParams } from "next/navigation";
import React from "react";
import data from "../../../components/data/data.json";
import Gallery from "./Gallery";
import { Lamp } from "../../../components/ui/Lamp";

const page = ({}) => {
  const params = useParams();
  const projectName = params.projectName.replaceAll("%20", " ");
  const projectDetails = data.projectData.find(
    (project) => project.name == projectName
  );

  return (
    <div className="p-2 bg-slate-950 min-h-screen">
      {/* <h1 className="text-3xl w-fit text-slate-100 m-auto flex items-center justify-center font-bold border-4 border-gray-200 rounded-xl mb-2 p-2">
        {projectDetails?.name}
      </h1> */}
      <Lamp title={projectDetails?.name} size />
      <div className="flex flex-col sm:flex-row rounded-xl">
        <div className="sm:w-[70%] bg-slate-800 p-3 md:rounded-l-xl">
          <div className="p-3">
            <Gallery images={projectDetails?.image} />
          </div>
        </div>
        <div className="sm:w-[30%] flex-col flex justify-start bg-slate-600 p-3 md:rounded-r-xl">
          <div className="flex flex-col gap-2 p-3">
            <h1 className="text-xl font-bold">Tech Stack Used:</h1>
            <ul>
              {projectDetails?.tech.map((t, index) => {
                return (
                  <li className="list-disc" key={index}>
                    {t}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" bg-slate-500 p-3 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-2">Project Description:</h2>
            <ul className="ml-2">
              {projectDetails?.description.map((d, index) => (
                <li key={index} className="list-disc text-sm text-gray-700">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 items-center justify-center p-3">
            {projectDetails?.hosted && (
              <a
                className="p-3 rounded-xl bg-slate-800 text-white hover:bg-violet-100 hover:text-black cursor-pointer font-semibold"
                href={projectDetails.hosted.link}
              >
                Hosted
              </a>
            )}

            <a
              className="p-3 rounded-xl bg-slate-800 text-white hover:bg-violet-100 hover:text-black cursor-pointer font-semibold"
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
