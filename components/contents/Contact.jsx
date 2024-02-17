import React from "react";
import { Lamp } from "../ui/Lamp";

const Contact = () => {
  const isDarkMode = false;
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-full min-w-full bg-slate-950"
    >
      <Lamp title="Contact Me" size />
      <form
        action="https://getform.io/f/6c5d4a0a-3945-4e2b-89cf-cc52412ab93a"
        method="post"
        encType="multipart/form-data"
        className={`w-[95%] md:w-[70%] p-3 rounded-xl`}
        data-aos="fade-up"
      >
        <div
          data-aos="fade-up"
          className="grid md:grid-cols-2 gap-4 w-full py-2"
        >
          <div data-aos="fade-up" className="flex flex-col">
            <label
              className={`uppercase text-sm py-2 text-white z-2"`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border-2 rounded-lg flex p-3 border-gray-300"
              type="text"
              name="name"
              id="name"
              autoComplete="name"
            />
          </div>
          <div data-aos="fade-up" className="flex flex-col">
            <label
              className={`uppercase text-sm py-2 text-white z-2"`}
              htmlFor="mobile"
            >
              Phone Number
            </label>
            <input
              className="border-2 rounded-lg flex p-3 border-gray-300"
              type="text"
              name="mobile"
              id="mobile"
              autoComplete="mobile"
            />
          </div>
          <div data-aos="fade-up" className="flex flex-col">
            <label
              className={`uppercase text-sm py-2 text-white z-2"`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-2 rounded-lg flex p-3 border-gray-300"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
            />
          </div>
          <div data-aos="fade-up" className="flex flex-col">
            <label
              className={`uppercase text-sm py-2 text-white z-2"`}
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="border-2 rounded-lg flex p-3 border-gray-300"
              type="text"
              name="subject"
              id="subject"
              autoComplete="subject"
            />
          </div>
          <div
            data-aos="fade-up"
            className="w-full flex flex-col col-span-1 md:col-span-2 py-2"
          >
            <label
              className={`uppercase text-sm py-2 text-white z-2"`}
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              autoComplete="message"
              rows="10"
              className="w-[100%] border-4 rounded-lg flex p-3 border-gray-300"
            ></textarea>
          </div>
        </div>
        <button
          className={`bg-slate-700 mb-10 text-gray-200 mt-4 w-full p-4 rounded-lg cursor-pointer hover:scale-110 ease-in duration-200`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
