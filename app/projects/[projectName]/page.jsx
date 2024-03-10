"use client";
import { useParams } from "next/navigation";
import React from "react";

import Gallery from "./Gallery";
import { Lamp } from "../../../components/ui/Lamp";

const page = ({}) => {
  const projects = [
    {
      name: "Rozilla RealEstate",
      description: [
        "Explore the world of real estate with Rozilla RealEstate, a Full Stack MERN architecture",
        "Seamlessly upload, manage, and explore property listings for sale or rent with intuitive CRUD operations",
        "Enjoy optimized property management processes through powerful state management using Redux-Toolkit.",
        "Elevate your experience with integrated Firebase, ensuring streamlined authentication and an overall enhanced user journey.",
        "Immerse yourself in a visually stunning and highly functional interface crafted with modern design principles and Tailwind CSS.",
      ],
      link: "https://github.com/vishnuarjun512/mern-RealEstate",
      tech: ["MERN Stack", "TailwindCSS", "Redux", "Firebase"],
      image: [
        "/rozilla/rozilla-home.png",
        "/rozilla/rozilla-listing-explore.png",
        "/rozilla/rozilla-listings-update.png",
        "/rozilla/rozilla-listings.png",
      ],
      hosted: {
        yes: true,
        link: "https://rozilla-realestate.onrender.com/",
      },
      category: "FullStack",
    },
    {
      name: "Ecommerce - Admin",
      description: [
        "Elevate your ecommerce experience with Ecommerce-Admin, a comprehensive Content Management System (CMS).",
        "Manage all product activities and payments seamlessly.",
        "Custom billboards for categories, categorized products for variability, and a dedicated dashboard for store statistics.",
        "Built with Next.js, Stripe for payments, Zod for data validation, Cloudinary for image management, and styled with ShadCN.",
      ],
      link: "https://github.com/vishnuarjun512/Ecommerce-NextJS-Admin",
      tech: ["NextJS", "Stripe", "Zod", "Cloudinary", "ShadCN"],
      image: [
        "/ecommerce/ecommerce-admin-products.png",
        "/ecommerce/ecommerce-admin-create-products.png",
        "/ecommerce/ecommerce-admin-billboards.png",
        "/ecommerce/ecommerce-admin-dashboard.png",
        "/ecommerce/ecommerce-admin-categories.png",
      ],
      hosted: {
        yes: true,
        link: "https://ecommercenextjsadmin.onrender.com",
      },
      category: "FullStack",
    },
    {
      name: "Image Gallery",
      description: [
        "Immerse yourself in a visually stunning Image Gallery powered by ReactJS and TailwindCSS.",
        "Designed for the frontend, this project showcases a dedication to delivering an exceptional user experience.",
        "Explore a curated collection of beautiful images sourced through seamless interactions with the Unsplash API.",
      ],
      link: "https://github.com/vishnuarjun512/unsplash-image-gallery-ReactJS",
      tech: ["ReactJS", "TailwindCSS", "Unsplash API"],
      image: ["/imageGallery.png"],
      hosted: {
        yes: false,
        link: "",
      },
      category: "Frontend",
    },
    {
      name: "Social Media",
      description: [
        "This Backend Project is a collective set of RESTful API routes designed to facilitate the management of a Social Media App efficiently.",
        "Developed a robust and scalable backend API using Node.js, Express.js, and MongoDB for a social media platform.",
        "Implemented RESTful API endpoints to handle user authentication, post creation, following/follower functionality, and more.",
        "Employed MongoDB as the NoSQL database to store user profiles, posts, and relationship data efficiently.",
        "Implemented unit tests using Jest and Supertest to validate the functionality and behavior of API endpoints.",
        "Created detailed documentation for API endpoints, request/response payloads, and error codes using tools like Swagger.",
      ],
      tech: ["ExpressJS", "Jest", "Supertest", "Swagger"],
      link: "https://github.com/vishnuarjun512/Social-Media-Backend",
      image: ["/socialMedia.png"],
      hosted: {
        yes: true,
        link: "https://social-media-backend-2dqa.onrender.com/api-docs/",
      },
      category: "Backend",
    },
    {
      name: "Todo Web API",
      description: [
        "The Task Management API Backend is a collective set of API routes designed to facilitate the management of a TaskList App efficiently.",
        "Simplify task management with the Todo Web API built using ExpressJS and NodeJS",
        "The API is designed with scalability in mind, allowing for the addition of more endpoints and features to meet future requirements.",
        "The API supports tracking task completion statistics over different time intervals, facilitating maintenance and monitoring of task-related activities.",
        "The provided example requests and responses serve as comprehensive documentation made with POSTMAN, making it easy for developers to understand and utilize the API.",
      ],
      tech: ["ExpressJS", "Postman"],
      link: "https://github.com/vishnuarjun512/Task-Manager-API",
      image: ["/todo.png"],
      hosted: {
        yes: true,
        link: "https://documenter.getpostman.com/view/30059269/2s9YeD9DRt",
      },
      category: "Backend",
    },
    {
      name: "MTVx Movies",
      description: [
        "Experience the world of movies with MTVx Movies, a frontend project crafted with ReactJS and TailwindCSS.",
        "Built to showcase movies using the MovieListAPI.",
      ],
      link: "https://github.com/vishnuarjun512/Movie-Website/tree/dev",
      tech: ["ReactJS", "TailwindCSS", "MovieListAPI"],
      image: ["/mtvx.png"],
      hosted: {
        yes: false,
        link: "",
      },
      category: "Frontend",
    },
    {
      name: "Plantii Ecommerce",
      description: [
        "Explore the Plantii Ecommerce project, a frontend endeavor developed with ReactJS and styled with SASS.",
      ],
      link: "https://github.com/vishnuarjun512/Plant_Ecommerce",
      tech: ["ReactJS", "SASS"],
      image: ["/planti.png"],
      hosted: {
        yes: false,
        link: "",
      },
      category: "Frontend",
    },
    {
      name: "Data Analytics",
      description: [
        "Dive into the world of finance with Data Analytics, a frontend project developed using ReactJS and styled with TailwindCSS.",
      ],
      link: "https://github.com/vishnuarjun512/Data-Finance-React",
      tech: ["ReactJS", "Tailwind"],
      image: ["/dataAnalytics.png"],
      hosted: {
        yes: false,
        link: "",
      },
      category: "Frontend",
    },
    {
      name: "Portfolio",
      description: [
        "Explore a portfolio showcasing various projects, built with ReactJS and styled with TailwindCSS.",
      ],
      link: "https://github.com/vishnuarjun512/portfolio",
      tech: ["ReactJS", "TailwindCSS"],
      image: ["/portfolio.png"],
      hosted: {
        yes: true,
        link: "https://vishnuarjun512.github.io/portfolio/",
      },
      category: "Frontend",
    },
    {
      name: "Simple Calculator",
      description: ["Experience a simple calculator built with JavaScript."],
      link: "https://github.com/vishnuarjun512/Calculator",
      tech: ["Javascript"],
      image: ["/calculator.png"],
      hosted: {
        yes: true,
        link: "https://vishnuarjun512.github.io/Calculator/",
      },
      category: "Frontend",
    },
    {
      name: "Portfolio NextJS",
      description: [
        "Explore a Next.js version of my Portfolio.",
        "Added Categorisation of Projects with their Details in a New Tab",
        "New User Interface with colorful picks",
        "Form to Contact me with your meaningful message",
      ],
      tech: ["NextJS"],
      link: "https://github.com/vishnuarjun512/portfolio-NextJS",
      hosted: "",
      image: ["/portfolio2.png"],
      category: "NextJS",
    },
    {
      name: "Ecommerce - Client",
      description: [
        "Experience the client-side of the Ecommerce project built with Next.js and styled with TailwindCSS.",
        "Utilizes MongoDB and Zustand for state management.",
      ],
      link: "https://github.com/vishnuarjun512/Ecommerce-NextJS-Client",
      tech: ["NextJS", "TailwindCSS", "MongoDB", "Zustand"],
      image: ["/ecommerce-client.png"],
      hosted: {
        yes: true,
        link: "https://ecommerce-client-d6z2.onrender.com",
      },
      category: "NextJS",
    },
    {
      name: "Notes API",
      description: [
        "The Notes Taking Application Backend is a robust set of RESTful API routes designed to support a comprehensive note-taking system.",
        "The API provides functionalities for creating, updating, retrieving, and deleting notes, offering a complete set of CRUD operations.",
        "The API supports robust maintenance and monitoring capabilities, allowing developers to track note-related activities efficiently.",
        "Developed with ExpressJS, NodeJS,",
        "Performed Unit testing with Jest, Supertest ",
        "Documentation done right with Swagger.",
      ],
      tech: ["ExpressJS", "NodeJS", "Jest", "Supertest", "Swagger"],
      link: "https://github.com/vishnuarjun512/backend-notes-api",
      hosted: "",
      image: ["/notes.png"],
      category: "Backend",
    },
  ];
  const params = useParams();
  const projectName = params.projectName.replaceAll("%20", " ");
  const projectDetails = projects.find(
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
