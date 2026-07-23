import React, { useState } from "react";
import discovery from '../assets/discovery.jpg';
import planning from '../assets/planning.jpg';
import development from '../assets/development.jpg';
import testing from '../assets/testing.jpg';
import design from '../assets/design.jpg';
import launch from '../assets/launch.jpg';
import { motion } from "framer-motion";


function Process() {
    const [active, setActive] = useState(0);

const steps = [
  { title: "Discovery", 
    content:"Business & Market Analysis",
    description:"We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation.",
  image: discovery },

  { title: "Planning", 
  content:"Strategy & Architecture",
  description:"We create detailed project plans, user flows, and system architecture to ensure smooth development and clear execution.",
  image: planning },

  { title: "Design",
  content:"UI/UX & Branding",
  description:"Our team designs modern, user-friendly interfaces that enhance user experience and reflect your brand identity.",
  image: design },

  { title: "Development",
  content:"Web & App Development",
  description:"We build fast, scalable, and secure websites and applications using modern technologies tailored to your business needs.  ",
  image: development },

  { title: "Testing",
  content:"Quality Assurance",
  description:"We test every feature to ensure performance, security, and usability across all devices before launch.",
  image: testing },

  { title: "Launch & Growth", 
  content:"Deployment & Marketing",
  description:"After launch, we help you scale with SEO, digital marketing, and continuous optimization to grow your business online.",
  image: launch },
];
  return (
    <div
      className="bg-gradient-to-l from-indigo-700 via-blue-700
     to-cyan-700 p-5 flex m-auto text-center flex-col "
    >
      <h4 className="text-red-400 uppercase   ">Our Process, Our Growth</h4>

      <h3 className="text-4xl font-bold max-w-4xl w-130 m-auto  text-white p-1">
        From Idea to Scalable Digital Solution
      </h3>
      <p className="text-gray-300 text-md w-150  mx-auto">
        At Tcongs Infotech, we follow a proven process to transform your ideas
        into high-performing digital products. From strategy to execution, we
        focus on delivering scalable and result-driven solutions.
      </p>

{/* Process timeline steps */}
<div className="grid lg:grid-cols-2 gap-20 max-w-7xl mx-auto px-6 py-20">

  {/* Left Timeline */}
  <div className="relative">

    {/* Background Line */}
    <div className="absolute left-8 top-0 h-full w-[2px] bg-gray-700"></div>

    {/* Filled Line */}
    <motion.div
      animate={{
        height: `${((active + 1) / steps.length) * 100}%`,
      }}
      transition={{ duration: 0.5 }}
      className="absolute left-8 top-0 w-[2px] bg-blue-500 origin-top"
    />

    {steps.map((step, index) => (
      <motion.div
        key={index}
        onViewportEnter={() => setActive(index)}
        viewport={{ amount: 0.6 }}
        className="relative flex gap-8 mb-24"
      >
        {/* Timeline Circle */}
        <motion.div
          animate={{
            scale: active === index ? 1.15 : 1,
          }}
          transition={{ duration: 0.3 }}
          className={`z-10 h-16 w-16 rounded-full border-4 flex items-center justify-center font-bold text-lg
          ${
            index <= active
              ? "bg-blue-600 border-blue-600 text-white"
              : "bg-gray-900 border-gray-500 text-gray-400"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>

        {/* Content */}
        <div className="flex-1 pt-2">

          <h3
            className="text-3xl font-bold transition-all duration-300 text-white" 
            
          >
            {step.title}
          </h3>

          <h5
            className="mt-2 text-lg font-medium transition-all duration-300 text-white"
            
          >
            {step.content}
          </h5>

          <p
            className=" text-gray-200 mt-4 leading-8 transition-all duration-300"
            
          >
            {step.description}
          </p>

        </div>
      </motion.div>
    ))}
  </div>

  {/* Right Sticky Image */}
  <div className="sticky top-22 h-screen cursor-pointer flex items-center justify-center">

    <motion.img
      key={active}
      src={steps[active].image}
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-450  h-100  object-cover shadow-2xl"
    />

  </div>

</div>

    </div>
  );
}

export default Process;
