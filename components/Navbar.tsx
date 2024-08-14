import React from "react";
import ToggleMode from "./ToggleMode";
import PulsatingButton from "./ui/pulsating-button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center md:px-10 lg:px-16">
      <div>
        <h1 className="text-2xl md:text-3xl font-medium tracking-widest uppercase underline decoration-primary underline-offset-8">
          lo<span className="text-primary font-bold">g</span>o
        </h1>
      </div>
      <div className="flex gap-5 md:gap-8 items-center justify-between">
        <ToggleMode />
        <PulsatingButton>Contact us</PulsatingButton>
      </div>
    </div>
  );
};

export default Navbar;
