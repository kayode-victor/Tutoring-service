"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

import BoxReveal from "./magicui/box-reveal";
import PulsatingButton from "./ui/pulsating-button";
import Footer from "./Footer";
import DotPattern from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";

const socialMedia = [
  { icon: <FaFacebook />, url: "https://www.facebook.com" },
  { icon: <FaTwitter />, url: "https://www.twitter.com" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com" },
  { icon: <FaInstagram />, url: "https://www.instagram.com" },
];
const Contact = () => {
  return (
    <div className="relative flex flex-col gap-2 pt-10">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_bottom,white,transparent)]"
        )}
      />
      <div className="flex flex-col md:flex-row justify-center md:justify-between py-5 md:py-10">
        <div className="flex flex-col gap-5 items-center md:items-start">
          <BoxReveal boxColor={"#FF007F"} duration={0.5}>
            <p className="text-4xl md:text-6xl font-bold">
              Get in Touch<span className="text-primary">.</span>
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#FF007F"} duration={0.5}>
            <p className="text-lg md:text-xl font-light">
              Interested in discussing pricing{" "}
              <span className="text-primary">or </span>
              learning more about our services?
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#FF007F"} duration={0.5}>
            <p className="text-lg md:text-xl font-light">
              Click
              <span className="text-primary font-normal">
                {" "}
                the button below
              </span>
              .
            </p>
          </BoxReveal>
          <PulsatingButton className="w-96">contact now</PulsatingButton>
        </div>
        <div className="flex gap-5 md:items-end justify-center pt-10">
          {socialMedia.map((media, index) => (
            <a
              key={index}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary"
            >
              {media.icon}
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
