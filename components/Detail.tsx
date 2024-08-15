import React from "react";
import Meteors from "./magicui/meteors";

const classDetails = [
  {
    title: "Age Group",
    content: "For ages 3 to 16 years",
  },
  {
    title: "Frequency",
    content: "Classes are held twice a week, ensuring consistent progress.",
  },
  {
    title: "Duration",
    content:
      "Each session lasts 2 hours, providing ample time for in-depth learning and practice.",
  },
  {
    title: "Format",
    content:
      "One-on-one personalized tutoring tailored to meet the unique learning needs of each student.",
  },
  {
    title: "Outcome",
    content:
      "Our program is designed to boost your child's confidence, enhance their academic skills, and foster a love for learning.",
  },
];

const Detail = () => {
  return (
    <div className="flex relative py-5 lg:py-10">
      <Meteors number={30} />
      <div className="relative flex w-full flex-col gap-5 lg:flex-row items-center justify-center overflow-hidden">
        <div className="w-full md:w-1/2 relative flex items-center justify-center mb-10 md:mb-0">
          <img
            src="/imgBg2.svg"
            alt="Background-image"
            className="hidden md:block h-[400px] w-[400px] absolute z-0"
          />
          <img
            src="/dancingBoy.svg"
            alt="Confident-dancing-boy"
            className="hidden md:block h-[440px] w-[440px] relative z-10"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-start px-2 md:px-5 py-10  border-2 rounded-xl hover:border-primary z-10">
          <div className="block md:hidden absolute inset-0 z-0 opacity-10 bg-cover bg-center">
            <img
              src="/imgBg2.svg"
              alt="Background-image"
              className="h-[400px] w-[400px] absolute z-0"
            />
            <img
              src="/dancingBoy.svg"
              alt="Confident-dancing-boy"
              className=" h-[440px] w-[440px] relative z-10"
            />
          </div>
          <span className="uppercase pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-3xl md:text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 tracking-wide">
            Our Class Overview
          </span>
          {classDetails.map((detail, index) => (
            <p key={index} className="text-sm md:text-md font-normal py-2">
              <span className="font-semibold">{detail.title}:</span>{" "}
              {detail.content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
