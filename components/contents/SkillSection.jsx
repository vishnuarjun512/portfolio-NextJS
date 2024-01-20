import React from "react";
import star from "../../public/Icons/star.png";

import Image from "next/image";

const SkillSection = ({ title, items }) => {
  const renderStars = (level) => {
    const stars = [];
    for (let i = 0; i < level; i++) {
      stars.push(
        <Image
          key={i}
          className="w-4 h-4" // Adjust the width and height as needed
          src={star}
          alt="Star"
        />
      );
    }
    return stars;
  };

  return (
    <div
      className={`bg-[#363062]  border-1 min-h-[170px] min-w-[350px] p-2 items-center justify-evenly flex flex-col rounded-3xl shadow-2xl ease-in-out duration-100`}
    >
      <h1 className="text-[#D8D9DA] sm:text-2xl p-2 text-2xl font-semibold underline">
        {title.toUpperCase()}
      </h1>
      <div className="grid grid-flow-col place-content-center content-around sm:gap-2 gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2 ease-in-out duration-100"
          >
            <div className="relative group/item">
              <Image
                className="w-[65px] rounded-lg h-[68px]  translate-y-3 group-hover/item:translate-y-0 transition-all ease-in-out duration-300"
                src={item.source}
                alt={item.name}
              />
              <div
                className={`bg-[#363062] group-hover/item:translate-y-1 -translate-y-2 flex-col items-center justify-center text-bold text-[15px] text-center transition-all opacity-0 group-hover/item:opacity-100 duration-150`}
              >
                <p className="text-[#F0F0F0]">{item.name}</p>
                <div className="flex justify-center">
                  {renderStars(item.level)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
