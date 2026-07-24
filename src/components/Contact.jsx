import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(formData.captcha) !== 4) {
      alert("Human Verification Failed!");
      return;
    }

    alert("Inquiry Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      captcha: "",
    });
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-slate-900 to-indigo-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT CONTENT */}

          <div className="text-center lg:text-left">
            <h4 className="uppercase tracking-[3px] text-red-400 font-semibold">
              Contact Us
            </h4>

            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Let's Build
              <br />
              Something You'll
              <br />
              Be Proud Of
            </h2>

            <p className="mt-6 text-gray-300 leading-8 max-w-xl mx-auto lg:mx-0">
              Have a project in mind? Whether you need a website, mobile app, or
              digital solution, our team is ready to turn your ideas into
              reality.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <p className="text-gray-300">
                  You'll hear from us within one business day.
                </p>
              </div>

              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <p className="text-gray-300">
                  We'll understand your business goals and requirements.
                </p>
              </div>

              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <p className="text-gray-300">
                  You’ll receive a clear proposal with pricing & timeline.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}

          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#161616]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mb-5 rounded-xl border border-gray-700 bg-[#1b1b1b] px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-lime-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mb-5 rounded-xl border border-gray-700 bg-[#1b1b1b] px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-lime-400"
              />

              {/* Phone */}

              <div className="flex items-center gap-3 mb-5 rounded-xl border border-gray-700 bg-[#1b1b1b] px-5 py-4">
                <span className="text-xl">🇮🇳</span>

                <select className="bg-transparent text-white outline-none">
                  <option>+91</option>
                </select>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none min-w-0"
                />
              </div>

              <textarea
                rows={6}
                name="project"
                placeholder="Tell us about your project*"
                value={formData.project}
                onChange={handleChange}
                required
                className="w-full mb-5 rounded-xl border border-gray-700 bg-[#1b1b1b] px-5 py-4 text-white placeholder-gray-500 resize-none outline-none focus:border-lime-400"
              />

              <div className="rounded-xl border border-gray-700 bg-[#1b1b1b] p-5 mb-8">
                <p className="text-gray-400 mb-4">
                  Human Verification : 2 + 2 =
                </p>

                <input
                  type="number"
                  name="captcha"
                  placeholder="Enter Sum*"
                  value={formData.captcha}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-700 bg-[#171717] px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-lime-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full cursor-pointer bg-black py-4 font-semibold text-white border border-green-700
                hover:bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-700
                hover:scale-[1.02] transition"
              >
                Submit Inquiry
              </button>

              <div className="mt-8 ">
                <p className="text-gray-400">
                  Prefer email instead? Feel free to contact us directly.
                </p>

                <a
                  href="mailto:info@tcongsinfotech.com"
                  className="inline-block mt-2 text-white hover:text-lime-400"
                >
                  info@tcongsinfotech.com
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
