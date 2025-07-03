import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="bg-[#0d1224] px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center w-full"
      style={{ position: "fixed", top: 0, left: 0, zIndex: 50 }}
    >
      <div className="text-2xl font-bold">
        <span className="text-blue-500">SAHSTACK</span>{" "}
        <span className="text-white">Leads</span>
      </div>
      <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-white font-semibold text-sm mt-4 md:mt-0">
        <li>
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/packages" className="hover:text-blue-400">
            Packages
          </Link>
        </li>
        <li>
          <Link to="/how-it-works" className="hover:text-blue-400">
            How It Works
          </Link>
        </li>
        <li>
          <Link to="/why-choose-us" className="hover:text-blue-400">
            Why Choose Us
          </Link>
        </li>
        <li>
          <Link to="/custom-leads" className="hover:text-blue-400">
            Custom Leads
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
