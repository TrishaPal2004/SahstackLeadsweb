import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="bg-[#0d1224] px-4 py-4 w-full border-b border-slate-800"
      style={{ position: "fixed", top: 0, left: 0, zIndex: 50 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-blue-500">SAHSTACK</span>{" "}
          <span className="text-white">Leads</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-8 text-white font-semibold text-sm">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/packages" className="hover:text-blue-400 transition-colors duration-200">
              Packages
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" className="hover:text-blue-400 transition-colors duration-200">
              How It Works
            </Link>
          </li>
          <li>
            <Link to="/why-choose-us" className="hover:text-blue-400 transition-colors duration-200">
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link to="/custom-leads" className="hover:text-blue-400 transition-colors duration-200">
              Custom Leads
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition-colors duration-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-blue-400 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col space-y-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d1224] border-b border-slate-800 shadow-lg">
          <ul className="flex flex-col text-white font-semibold text-sm">
            <li className="border-b border-slate-800 last:border-b-0">
              <Link 
                to="/" 
                className="block hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-200 py-3 px-4"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="border-b border-slate-800 last:border-b-0">
              <Link 
                to="/packages" 
                className="block hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-200 py-3 px-4"
                onClick={closeMenu}
              >
                Packages
              </Link>
            </li>
            <li className="border-b border-slate-800 last:border-b-0">
              <Link 
                to="/how-it-works" 
                className="block hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-200 py-3 px-4"
                onClick={closeMenu}
              >
                How It Works
              </Link>
            </li>
            <li className="border-b border-slate-800 last:border-b-0">
              <Link 
                to="/why-choose-us" 
                className="block hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-200 py-3 px-4"
                onClick={closeMenu}
              >
                Why Choose Us
              </Link>
            </li>
            <li className="border-b border-slate-800 last:border-b-0">
              <Link 
                to="/custom-leads" 
                className="block hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-200 py-3 px-4"
                onClick={closeMenu}
              >
                Custom Leads
              </Link>
            </li>
            <li className="border-b border-slate-800 last:border-b-0">
              <Link 
                to="/contact" 
                className="block hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-200 py-3 px-4"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;