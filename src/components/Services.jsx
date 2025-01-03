import React from 'react';
import graphicDesignPic from '../assets/services/graphic-design.png';
import webDevelopmentPic from '../assets/services/web-development.jpg';
import uiUxDesignPic from '../assets/services/ui-ux.jpg';
import amazonManagementPic from '../assets/services/amazon.jpg';
import searchEngineOptimizationPic from '../assets/services/seo.png';
import contentManagementPic from '../assets/services/content-management.jpg';
const Services = () => {
  return (
    <>
      <div
        className="my-2 mt-20 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400">
        <h3 className="mx-6 mb-0 text-center capitalize text-6xl md:text-6xl  font-extrabold text-black">our services</h3>
      </div>
      <div className="pb-4 text-center">
          <span className="inline-flex items-center rounded-2xl  bg-red-50 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-maroon">Explore Our Wide Range of Expert Services </span>

          <p className="mt-4 text-lg sm:text-xl leading-8 text-gray-800 sm:px-16" style={{whiteSpace:"pre-line"}}>Discover a range of expert services tailored to meet your business needs and elevate your success in every way.</p>
        </div>
      <div className="bg-white dark:bg-gray-800  py-6 sm:py-4 lg:py-8 mb-40">
        <div className="mx-auto max-w-screen-lg px-6 md:px-10">
          <div className="grid grid-cols-4 gap-4 sm:gap-8">

            {/* First Card */}
            <a
              href="/"
              className="group relative col-span-2 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64">
              <img
                src={graphicDesignPic}
                loading="lazy"
                alt="Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Graphic Design</span>
            </a>

            {/* Second Card */}
            <a
              href="/"
              className="group relative col-span-1 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-72">
              <img
                src={webDevelopmentPic}
                loading="lazy"
                alt="Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Web Development</span>
            </a>

            {/* Third Card */}
            <a
              href="/"
              className="group relative col-span-1 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64">
              <img
                src={uiUxDesignPic}
                loading="lazy"
                alt="Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">UI/UX Design</span>
            </a>
            {/* Fourth Card */}
            <a
              href="/"
              className="group relative col-span-1 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64">
              <img
                src={amazonManagementPic}
                loading="lazy"
                alt="Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Amazon Managemnent</span>
            </a>
            {/* Fifth Card */}
            <a
              href="/"
              className="group relative col-span-1 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-72">
              <img
                src={searchEngineOptimizationPic}
                loading="lazy"
                alt="Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Search Engine Optimization</span>
            </a>

            {/* Sixth Card */}
            <a
              href="/"
              className="group relative col-span-2 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64">
              <img
                src={contentManagementPic}
                loading="lazy"
                alt="Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Content Management</span>
            </a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
