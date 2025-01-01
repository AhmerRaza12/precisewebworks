import React from 'react';

const Services = () => {
  return (
    <>
      <div
        className="my-2 mt-10 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400">
        <h3 className="mx-6 mb-0 text-center capitalize text-6xl md:text-4xl font-bold text-black">our services</h3>
      </div>
      <div class="pb-4 text-center">
          <span class="inline-flex items-center rounded-2xl  bg-red-50 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-maroon">Explore Our Wide Range of Expert Services </span>

          <p class="mt-4 text-lg sm:text-xl leading-8 text-gray-800 sm:px-16" style={{whiteSpace:"pre-line"}}>Discover a range of expert services tailored to meet your business needs and elevate your success in every way.</p>
        </div>
      <div className="bg-white dark:bg-gray-800 h-screen py-6 sm:py-4 lg:py-8">
        <div className="mx-auto max-w-screen-lg px-6 md:px-10">
          <div className="grid grid-cols-4 gap-4 sm:gap-8">

            {/* First Card */}
            <a
              href="/"
              className="group relative col-span-2 flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64">
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
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
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
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
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
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
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
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
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
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
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
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
