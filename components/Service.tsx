import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaClock } from "react-icons/fa";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const services = [
  {
    title: "Personalized Attention",
    description:
      "One-on-one sessions tailored to your child's unique learning needs.",
    icon: <FaUserGraduate className="text-4xl text-primary mb-4 mx-auto" />,
  },
  {
    title: "Experienced Instructor",
    description: "Dedicated and skilled educators with passion for teaching.",
    icon: (
      <FaChalkboardTeacher className="text-4xl text-primary mb-4 mx-auto" />
    ),
  },
  {
    title: "Flexible Scheduling",
    description: "Convenient class times to fit your busy schedule.",
    icon: <FaClock className="text-4xl text-primary  mb-4 mx-auto" />,
  },
];
const Service = () => {
  return (
    <div className="flex relative flex-col gap-10 items-center md:items-start py-5 md:py-10 px-5 md:px-10 md:-top-32">
      <h1 className="text-2xl font-bold tracking-wider text-center md:text-left pt-5 md:py-0 md:px-20">
        Why Choose Our Tutoring Services?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:px-20 gap-8 z-20">
        {services.map((service, index) => (
          <NeonGradientCard
            key={index}
            className="max-w-sm  items-center justify-center text-center"
          >
            {service.icon}
            <h2 className="text-lg font-semibold border-b-2 border-primary text-primary mb-2">
              {service.title}
            </h2>
            <p className="font-serif text-md tracking-wider">
              {service.description}
            </p>
          </NeonGradientCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
