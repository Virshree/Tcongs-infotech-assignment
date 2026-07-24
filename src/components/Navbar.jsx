import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-32 md:w-36 cursor-pointer"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-white">
            <a href="#" className="hover:text-red-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Company
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Solution
            </a>
            <a href="#" className="hover:text-red-400 transition">
              Connect
            </a>
          </div>

          {/* Desktop Button */}
          <button className="hidden md:block bg-red-400 text-black cursor-pointer font-semibold px-5 py-2 rounded-xl hover:bg-red-500 transition">
            Launch Your Idea 🚀
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-xl p-5 mb-4">
            <div className="flex flex-col space-y-4 text-white">
              <a href="#" onClick={() => setIsOpen(false)}>
                Home
              </a>

              <a href="#" onClick={() => setIsOpen(false)}>
                Company
              </a>

              <a href="#" onClick={() => setIsOpen(false)}>
                Solution
              </a>

              <a href="#" onClick={() => setIsOpen(false)}>
                Connect
              </a>

              <button className="mt-4 bg-red-400 text-black font-semibold py-3 rounded-xl hover:bg-red-500 transition">
                Launch Your Idea 🚀
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;