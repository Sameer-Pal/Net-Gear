import React, { useState } from "react";
import { PaperAirplaneIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling

// ✅ Navbar Component
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [open, setOpen] = useState(false); // Make sure it's false by default

  const handleMenuToggle = () => {
    setToggleMenu((prev) => !prev);
    setOpen((prev) => !prev);
};
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 backdrop-blur-lg bg-opacity-50 p-5 md:p-6 text-white fixed top-0 left-0 w-full z-10 shadow-lg ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center gap-2 hover: Scale-105">
          <PaperAirplaneIcon className="h-8 w-8 text-white" />
          <a href="/">
            <span className="text-white font-extrabold">NetGear</span>
          </a>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
          <Link to="about-us" smooth={true} duration={500}
              className=" !important transition-all duration-300 transform hover:text-blue-300 hover:scale-105 hover:underline ">
              <span className="text-white hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">
                {" "}
                About Us
              </span>
              </Link>          </li>
          <li className="text-white">
          <Link to="services" smooth={true} duration={500}
              className=" !important transition-all duration-300 transform hover:text-blue-300 hover:scale-105 hover:underline ">
              <span className="text-white hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">
                {" "}
               Services
              </span>
              </Link> 
          </li>
          <li className="text-white">
          <Link to="testimonials" smooth={true} duration={500}
              className=" !important transition-all duration-300 transform hover:text-blue-300 hover:scale-105 hover:underline ">
              <span className="text-white hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">
                {" "}
               Testimonials
              </span>
              </Link> 
          </li>
          <li>
          <Link to="how" smooth={true} duration={500}
              className=" !important transition-all duration-300 transform hover:text-blue-300 hover:scale-105 hover:underline ">
              <span className="text-white hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">
                {" "}
              How It Works
              </span>
              </Link> 
          </li>
          <li>
          <Link to="contact" smooth={true} duration={500}
              className=" !important transition-all duration-300 transform hover:text-blue-300 hover:scale-105 hover:underline ">
              <span className="text-white hover:text-blue-600 transition duration-300 ease-in-out cursor-pointer">
                {" "}
              Contact Us
              </span>
              </Link> 
          </li>
        </ul>

 
<div
  className="flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
  onClick={handleMenuToggle}
>
  <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
  <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
  <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
</div>

      </div>

      {/* Mobile Menu */}
      <div
  className={`fixed mt-1 z-40 w-full bg-gray-800 text-white overflow-hidden flex flex-col gap-12 origin-top transform rounded-lg transition-all duration-500 ease-in-out ${
    toggleMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
  }`}
>

        <div className="flex flex-col gap-8 p-8 font-bold">
        <Link to="about" smooth={true} duration={500}
            className="text-white hover:text-blue-300 transition-all duration-300"
          >
           About Us
           </Link>         
           <Link to="testimonials" smooth={true} duration={500}
            className="text-white hover:text-blue-300 transition-all duration-300"
          >
            Testimonials
            </Link>         
            <Link to="services" smooth={true} duration={500}
            className="text-white hover:text-blue-300 transition-all duration-300"
          >
           services
           </Link>         
           <Link to="how" smooth={true} duration={500}
            className="text-white hover:text-blue-300 transition-all duration-300"
          >
           How It Works
           </Link>         
           <Link to="contact" smooth={true} duration={500}
            className="text-white hover:text-blue-300 transition-all duration-300"
          >
            Contact
            </Link>         
            </div>
      </div>
    </nav>
  );
}
