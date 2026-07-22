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
    <div className="bg-gradient-to-r from-indigo-500 via-blue-800 to-cyan-700 p-5 flex m-auto text-center flex-col  ">
      <h4 className="text-red-400 uppercase  p-2 ">We are great at</h4>

      <h3 className="text-3xl font-bold  text-white p-1">
        Digital Solutions & Development Services
      </h3>
      <p className="text-gray-300 text-md">
        Scalable solutions for modern businesses
      </p>

      {/**Cards */}

      <div className="mt-10   w-300 m-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative cursor-pointer rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 to-white/5 p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Icon */}
            <img
              src={service.icon}
              alt={service.title}
              className="absolute top-6 right-6 h-10 w-10 object-contain
               opacity-0 scale-50
               transition-all duration-500
               group-hover:opacity-100
               group-hover:scale-100"
            />

            {/* Content */}
            <div className="pr-16">
              <p className="text-lg text-gray-200">{service.subtitle}</p>

              <h3 className="mt-2 text-xl font-bold text-white">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
