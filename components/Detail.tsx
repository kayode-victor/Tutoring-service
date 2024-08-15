import React from "react";
import Meteors from "./magicui/meteors";
import GridGlobe from "./GridGlobe";

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
    <div className="flex relative my-5 lg:my-10">
      <Meteors number={30} />
      <div className="relative flex w-full flex-col gap-5 lg:flex-row items-center justify-center overflow-hidden ">
        <div className="w-full md:w-1/2 relative flex flex-col overflow-hidden h-full border-2 rounded-xl hover:border-primary ">
          <span className="uppercase absolute py-5 px-10 pointer-events-none text-center md:text-left whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-3xl md:text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 tracking-wide">
            We teach across the globe
          </span>
          <GridGlobe />
        </div>
        <div className="w-full h-full lg:w-1/2 flex flex-col justify-start px-2 md:px-5 py-10  border-2 rounded-xl hover:border-primary z-10">
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
