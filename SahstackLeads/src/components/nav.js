import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-[#0d1224] px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <span className="text-blue-500">SAHSTACK</span>{" "}
        <span className="text-white">Leads</span>
      </div>
      <ul className="flex space-x-8 text-white font-semibold text-sm">
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
