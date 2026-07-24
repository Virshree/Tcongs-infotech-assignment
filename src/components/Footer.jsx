import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <p className="text-gray-400 leading-7">
              Empowering global brands with 8+ years of expertise in custom web
              development, e-commerce marketplace optimization, and Generative
              Engine Optimization (GEO). We turn complex challenges into
              seamless digital growth.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Company</li>
              <li className="hover:text-white cursor-pointer">Solutions</li>
              <li className="hover:text-white cursor-pointer">Connect</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Specialized Services</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Web & App Development
              </li>
              <li className="hover:text-white cursor-pointer">
                Software Development
              </li>
              <li className="hover:text-white cursor-pointer">
                E-commerce Solutions
              </li>
              <li className="hover:text-white cursor-pointer">
                Digital Marketing
              </li>
              <li className="hover:text-white cursor-pointer">
                Branding & UI/UX
              </li>
              <li className="hover:text-white cursor-pointer">
                Business Growth
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Scale Your Online Business
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Launch on Top Marketplaces</li>
              <li>Build High-Converting Stores</li>
              <li>Optimize Listings for Sales</li>
              <li>Run Profitable Ad Campaigns</li>
              <li>Grow Globally</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p className="text-center md:text-left">
            Mumbai Office: Based in Mumbai, India. Serving clients worldwide.
          </p>

          <p className="text-center md:text-right">
            © 2026 Tcongs Infotech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
