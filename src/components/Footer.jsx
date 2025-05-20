import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiXdotorg } from "react-icons/si";

function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 bg-gradient-to-r from-[#0ef]/20 to-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                VOLEM WATER LTD.
              </span>
            </a>
            <p className="mt-2 text-blue-600">Just Water</p>
          </div>
          <div className="grid grid-cols-2 gap-16 sm:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-black tracking-wider uppercase">
                Navigation
              </h3>
              <div className="mt-4 space-y-2">
                <a href="/" className="text-blue-600 hover:text-blue-800 block">
                  Home
                </a>
                <a
                  href="about"
                  className="text-blue-600 hover:text-blue-800 block"
                >
                  About
                </a>
                <a
                  href="services"
                  className="text-blue-600 hover:text-blue-800 block"
                >
                  Services
                </a>
                <a
                  href="contact"
                  className="text-blue-600 hover:text-blue-800 block"
                >
                  Contact
                </a>
              </div>
            </div>
            {/* <div>
                  <h3 className="text-sm font-semibold text-black tracking-wider uppercase">Legal</h3>
                  <div className="mt-4 space-y-2">
                    <a href="#" className="text-blue-600 hover:text-blue-800 block">Privacy</a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 block">Terms</a>
                  </div>
                </div> */}

           <div>
  <h3 className="text-lg font-semibold text-black tracking-wider uppercase">
    Connect
  </h3>
  <div className="mt-4 space-y-2">
    <a
      href="https://linkedin.com"
      className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
    >
      <span>LinkedIn</span>
      <FaLinkedinIn size={24} className="text-[#0077B5]" />
    </a>
    <a
      href="https://instagram.com"
      className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
    >
      <span>Instagram</span>
      <FaInstagram size={24} className="text-[#E1306C]" />
    </a>
    <a
      href="https://x.com"
      className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
    >
      <span>Twitter</span>
      <SiXdotorg size={24} className="text-black" />
    </a>
    <a
      href="https://facebook.com"
      className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
    >
      <span>Facebook</span>
      <FaFacebookF size={24} className="text-[#1877F2]" />
    </a>
  </div>
</div>

          </div>
        </div>
        <div className="mt-12 border-t border-blue-200 pt-8 text-center text-black text-sm">
          &copy; {new Date().getFullYear()} VOLEM WATER LTD. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
