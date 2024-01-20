import React from "react";

import { Tab } from "@headlessui/react";

import Image from "next/image";

const GalleryTab = ({ image }) => {
  return (
    <Tab className="relative flex h-[60px] sm:h-[120px] cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <Image
              src={image}
              alt="Image 1"
              className="object-cover object-center"
              fill
            />
          </span>
          <span
            className={`absolute inset-0 rounded-md ring-2 ring-offset-2 
              ${selected ? "ring-black" : "ring-transparent"} `}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
