"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = ({}) => {
  const params = useParams();
  const projectName = params.projectName.replace("%20", " ");

  return <div>ProjectName : {projectName}</div>;
};

export default page;
