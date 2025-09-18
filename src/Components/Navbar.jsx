import React from "react";
import { NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between px-3 py-2 bg-[#6892d5b8] items-center w-[90%] mx-auto rounded-full mt-4">
      {/* Logo */}
      <div>
        <h1 className="text-white">LOGO</h1>
      </div>

      {/* Menu */}
      <div>
        <ul className="flex gap-10 bg-white rounded-full px-2 py-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-[#6892D5] text-white px-4 py-3 rounded-full"
                  : "text-black px-4 py-2"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#6892D5] text-white px-4 py-3 rounded-full"
                  : "text-black px-4 py-2"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#6892D5] text-white px-4 py-3 rounded-full"
                  : "text-black px-4 py-2"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Button */}
      <div>
        <button className="flex items-center gap-2 bg-white p-3 rounded-full">
          <IoCall /> Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
