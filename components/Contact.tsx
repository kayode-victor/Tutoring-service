"use client";
import React from "react";
import BoxReveal from "./magicui/box-reveal";

const Contact = () => {
  return (
    <div>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Magic UI<span className="text-primary">.</span>
        </p>
      </BoxReveal>
    </div>
  );
};

export default Contact;
