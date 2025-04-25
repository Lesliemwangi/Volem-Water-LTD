import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white/90 backdrop-blur-md ${scrolled ? 'shadow-xl' : 'shadow-md'} sticky top-0 z-50 transition-all duration-500 ease-in-out`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo with your gradient */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex flex-col">
              <span className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#0ef] to-blue-500">
                VOLEM WATER LTD.
              </span>
              <span className="text-blue-500 text-sm font-medium">Just Water</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="relative py-2 px-3 text-gray-700 hover:text-blue-800 font-medium group transition-colors duration-300"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0ef] to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="about"
              className="relative py-2 px-3 text-gray-700 hover:text-blue-500 font-medium group transition-colors duration-300"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0ef] to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="services"
              className="relative py-2 px-3 text-gray-700 hover:text-blue-500 font-medium group transition-colors duration-300"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0ef] to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="contact"
              className="relative py-2 px-3 text-gray-700 hover:text-blue-500 font-medium group transition-colors duration-300"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0ef] to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-100 focus:outline-none transition duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 transform transition duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm">
          <a
            href="/"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300"
          >
            Home
          </a>
          <a
            href="about"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300"
          >
            About
          </a>
          <a
            href="services"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300"
          >
            Services
          </a>
          <a
            href="contact"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;