"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import GalleryTab from "./GalleryTab";
import Image from "next/image";

const Gallery = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className={`grid grid-cols-5 gap-4`}>
          {images.map((image, index) => (
            <GalleryTab key={index} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="">
        {images.map((image, index) => (
          <Tab.Panel key={index}>
            <div className="aspect-square relative h-[520px] w-full overflow-hidden sm:rounded-lg">
              <Image
                fill
                src={image}
                alt="image"
                className="object-fill object-center rounded-xl"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
