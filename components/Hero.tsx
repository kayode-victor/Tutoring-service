import React from "react";
import SparklesText from "./magicui/sparkles-text";
import PulsatingButton from "./ui/pulsating-button";
const Hero = () => {
  return (
    <div className="relative flex flex-col gap-5 md:gap-10 md:flex-row w-full rounded-lg h-full justify-center items-center bg-background px-0 md:pl-5 lg:pl-10 my-10">
      <div className="flex flex-col w-full lg:w-3/5 items-center h-full lg:items-start text-center lg:text-left gap-5 md:gap-8 lg:gap-10 md:mt-5 ">
        <p className="text-primary text-lg font-medium">SECURE THEIR FUTURE</p>
        <SparklesText text="Build Your Child's Confidence and Skills!" />
        <p className="text-md font-medium">
          Expert One-on-One Tutoring Tailored for Ages 3 to 13.
        </p>
        <PulsatingButton className="hidden md:block">
          Get Started Now
        </PulsatingButton>
      </div>
      <div className="relative flex flex-col lg:w-2/5 items-center h-[500px] w-[500px] rounded-full bg-primary">
        <img
          src="/imgBg.svg"
          alt="Background-image"
          className="h-[400px] w-[400px] absolute -bottom-10 z-0"
        />
        <img
          src="/lilGirl.svg"
          alt="Confident-young-student"
          className="h-[440px] w-[440px] -bottom-20 -left-10 relative z-10"
        />
      </div>
    </div>
  );
};

export default Hero;
