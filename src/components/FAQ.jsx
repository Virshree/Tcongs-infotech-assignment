import React, { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does Tcongs Infotech offer?",
      answer:
        "We offer web development, mobile app development, custom software solutions, eCommerce management, and digital marketing services to help businesses grow online.",
    },
    {
      question: "How long does it take to build a website or app?",
      answer:
        "The timeline depends on project complexity. A basic website may take 7–15 days, while advanced platforms or mobile apps can take 3–8 weeks or more.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we work with clients from the USA, Canada, Dubai, and globally. We provide remote support and communication throughout the project.",
    },
    {
      question: "Can you help grow my business after development?",
      answer:
        "Yes, we offer SEO, digital marketing, and marketplace management services to help you generate leads, increase traffic, and boost sales.",
    },
    {
      question: "What makes Tcongs Infotech different?",
      answer:
        "We focus on complete business solutions—not just development. From idea to execution and marketing, we help you build, launch, and scale successfully.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply click on 'Book a Free Call 🚀', share your requirements, and our team will guide you with the best solution for your business.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-900 to-blue-700 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">

            <h4 className="text-red-400 uppercase font-bold tracking-widest text-lg">
              FAQ
            </h4>

            <h2 className="mt-4 text-4xl sm:text-4xl font-bold text-white leading-tight">
              Questions? We've
              <br/>
             Got Answers
            </h2>

            <p className="mt-6 text-gray-300 leading-8 max-w-xl mx-auto lg:mx-0">
              Tcongs Infotech helps businesses grow with web development,
              mobile apps, eCommerce solutions, and digital marketing.
              Here are answers to the most common questions from our clients.
            </p>

            <button className="mt-8 cursor-pointer bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
              Book a Free Call 🚀
            </button>

          </div>

          {/* Right FAQ */}
          <div className="flex-1 w-full">

            <div className="space-y-5">

              {faqs.map((faq, index) => (

                <div
                  key={index}
                  className="border border-white/20 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
                >

                  {/* Question */}

                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left px-6 py-5 cursor-pointer"
                  >
                    <h3 className="text-white font-semibold text-base sm:text-lg pr-4">
                      {faq.question}
                    </h3>

                    <span className="text-3xl text-red-400 font-light flex-shrink-0">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-gray-300 leading-7">
                      {faq.answer}
                    </p>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;