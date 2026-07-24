import React, { useState } from "react";
import { motion } from "framer-motion";

import discovery from "../assets/discovery.jpg";
import planning from "../assets/planning.jpg";
import development from "../assets/development.jpg";
import testing from "../assets/testing.jpg";
import design from "../assets/design.jpg";
import launch from "../assets/launch.jpg";

function Process() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      title: "Discovery",
      content: "Business & Market Analysis",
      description:
        "We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation.",
      image: discovery,
    },
    {
      title: "Planning",
      content: "Strategy & Architecture",
      description:
        "We create detailed project plans, user flows, and system architecture to ensure smooth development and clear execution.",
      image: planning,
    },
    {
      title: "Design",
      content: "UI/UX & Branding",
      description:
        "Our team designs modern, user-friendly interfaces that enhance user experience and reflect your brand identity.",
      image: design,
    },
    {
      title: "Development",
      content: "Web & App Development",
      description:
        "We build fast, scalable, and secure websites and applications using modern technologies tailored to your business needs.",
      image: development,
    },
    {
      title: "Testing",
      content: "Quality Assurance",
      description:
        "We test every feature to ensure performance, security, and usability across all devices before launch.",
      image: testing,
    },
    {
      title: "Launch & Growth",
      content: "Deployment & Marketing",
      description:
        "After launch, we help you scale with SEO, digital marketing, and continuous optimization to grow your business online.",
      image: launch,
    },
  ];

  return (
    <section className="bg-gradient-to-l from-indigo-700 via-blue-700 to-cyan-700 py-16 px-4">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-red-400 uppercase tracking-widest text-sm sm:text-base">
          Our Process, Our Growth
        </h4>

        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          From Idea to Scalable Digital Solution
        </h2>

        <p className="mt-6 text-gray-200 text-sm sm:text-base max-w-3xl mx-auto leading-7">
          At Tcongs Infotech, we follow a proven process to transform your ideas
          into high-performing digital products. From strategy to execution, we
          focus on delivering scalable and result-driven solutions.
        </p>
      </div>

      {/* Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto mt-16">
        {/* Left */}
        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-6 sm:left-8 top-0 h-full w-[2px] bg-gray-500"></div>

          {/* Active Line */}
          <motion.div
            animate={{
              height: `${((active + 1) / steps.length) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
            className="absolute left-6 sm:left-8 top-0 w-[2px] bg-blue-400"
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              onViewportEnter={() => setActive(index)}
              viewport={{ amount: 0.6 }}
              className="relative flex gap-5 sm:gap-8 mb-16 sm:mb-20"
            >
              {/* Circle */}
              <motion.div
                animate={{
                  scale: active === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className={`z-10 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-4 font-bold text-sm sm:text-lg ${
                  index <= active
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-slate-900 border-gray-500 text-gray-400"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {step.title}
                </h3>

                <h5 className="mt-2 text-base sm:text-lg font-semibold text-white">
                  {step.content}
                </h5>

                <p className="mt-4 text-sm sm:text-base text-gray-200 leading-7">
                  {step.description}
                </p>

              
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Sticky Image */}
        
<div className="hidden lg:flex sticky top-24 h-screen items-center justify-center">
  <motion.img
    key={active}
    src={steps[active].image}
    alt={steps[active].title}
    initial={{ opacity: 0, scale: 0.9, x: 40 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full hidden md:block max-w-2xl h-[600px] object-cover rounded-3xl shadow-2xl"
  />
</div>
        </div>
      
    </section>
  );
}

export default Process;