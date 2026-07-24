import React from "react";
import web from "../assets/web.svg";
import ecom from "../assets/ecom.svg";
import brand from "../assets/brand.svg";
import custom from "../assets/custom.svg";
import digital from "../assets/digital.svg";
import growth from "../assets/growth.svg";

function Services() {
  const services = [
    {
      title: "Web & App Development",
      subtitle: "For Businesses",
      icon: web,
    },
    {
      title: "E-commerce Solutions",
      subtitle: "For Online Sellers",
      icon: ecom,
    },
    {
      title: "Branding & UI/UX",
      subtitle: "Creative Design",
      icon: brand,
    },
    {
      title: "Software Development",
      subtitle: "Custom Solutions",
      icon: custom,
    },
    {
      title: "Digital Marketing",
      subtitle: "Growth Focused",
      icon: digital,
    },
    {
      title: "Business Growth",
      subtitle: "Scaling Business",
      icon: growth,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-500 via-blue-800 to-cyan-700 py-16 px-4">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-red-400 uppercase tracking-widest text-sm sm:text-base">
          We are great at
        </h4>

        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Digital Solutions & Development Services
        </h2>

        <p className="mt-4 text-gray-300 text-sm sm:text-base">
          Scalable solutions for modern businesses
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 to-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Icon */}
            <img
              src={service.icon}
              alt={service.title}
              className=" cursor-pointer
    absolute top-5 right-5
    h-10 w-10 sm:h-10 sm:w-10
    object-contain

    opacity-100 scale-100
    sm:opacity-0 sm:scale-50

    transition-all duration-500
    sm:group-hover:opacity-100
    sm:group-hover:scale-100
  "
            />

            {/* Content */}
            <div className="pr-10">
              <p className="text-gray-200 text-base sm:text-lg">
                {service.subtitle}
              </p>

              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
