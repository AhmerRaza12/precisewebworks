import React, { useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logoimg from "../assets/logo.gif";

export const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const timeoutRef = useRef(null);


  const handleMouseLeave = () => {

    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);  
    }, 200); 
  };


  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  return (
    <header className="bg-primary dark:bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-10 py-2 flex justify-between items-center">
        <Link to="/">
          <img src={Logoimg} alt="logo" height={70} width={70} />
        </Link>
        <div className="hidden md:flex justify-between items-center space-x-10">
          <a
            href="/"
            className="nav-link text-white dark:text-gray-200 hover:text-maroon dark:hover:text-white transition-colors duration-300 uppercase"
          >
            Home
          </a>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}   
            onMouseLeave={handleMouseLeave}   
          >
            <button className="flex items-center space-x-1 nav-link text-white dark:text-gray-200 hover:text-maroon dark:hover:text-white transition-colors duration-300 uppercase">
              <span>Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`absolute bg-gray-800 dark:bg-gray-700 text-white py-2 mt-2 rounded shadow-lg w-48 z-50 transition-all ${isDropdownOpen ? "block" : "hidden"}`}
            >
              <Link
                to="/web-development"
                className="block px-4 py-2 hover:bg-maroon hover:text-white transition-colors"
              >
                SEO
              </Link>
              <Link
                to="/mobile-app"
                className="block px-4 py-2 hover:bg-maroon hover:text-white transition-colors"
              >
                PPC
              </Link>
              <Link
                to="/seo"
                className="block px-4 py-2 hover:bg-maroon hover:text-white transition-colors"
              >
                Development
              </Link>
              <Link
                to="/ppc"
                className="block px-4 py-2 hover:bg-maroon hover:text-white transition-colors"
              >
                Graphics Design
              </Link>
              <Link
                to="/graphics-design"
                className="block px-4 py-2 hover:bg-maroon hover:text-white transition-colors"
              >
                Brand Management
              </Link>
              <Link
                to="/brand-management"
                className="block px-4 py-2 hover:bg-maroon hover:text-white transition-colors"
              >
                Content Management
              </Link>
              <Link
                to="/content-management"
                className="block px-4 py-2 hover:bg-maroon hover:text-white transition-colors"
              >
                Amazon Management
              </Link>
            </div>
          </div>

          <a
            href="/about"
            className="nav-link text-white dark:text-gray-200 hover:text-maroon dark:hover:text-white transition-colors duration-300 uppercase"
          >
            About Us
          </a>
          <a
            href="/portfolio"
            className="nav-link text-white dark:text-gray-200 hover:text-maroon dark:hover:text-white transition-colors duration-300 uppercase"
          >
            Portfolio
          </a>
          <a
            href="/pricing"
            className="nav-link text-white dark:text-gray-200 hover:text-maroon dark:hover:text-white transition-colors duration-300 uppercase"
          >
            Pricing
          </a>
          <a
            href="/contact"
            className="nav-link text-white dark:text-gray-200 hover:text-maroon dark:hover:text-white transition-colors duration-300 uppercase"
          >
            Contact Us
          </a>
          <a
            href="/blogs"
            className="nav-link text-white dark:text-gray-200 hover:text-maroon dark:hover:text-white transition-colors duration-300 uppercase"
          >
            Blogs
          </a>
        </div>
        <button
          id="mobileMenuButton"
          className="md:hidden text-white dark:text-gray-200 hover:text-maroon dark:hover:text-white focus:outline-none transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};
