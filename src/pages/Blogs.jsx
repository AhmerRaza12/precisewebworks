import React from 'react'

const Blogs = () => {
  return (
<section class="bg-white dark:bg-gray-900 mb-10">

  <div class="text-center py-10">
    <h1 class="text-4xl font-bold text-black dark:text-white ">Blogs</h1>
   
  </div>

  <div class="px-8 py-4 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-6 sm:py-8">
    <div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
      <div class="relative">
        <a href="#_" class="block overflow-hidden group rounded-xl shadow-lg">
          <img src="https://img.freepik.com/free-photo/creative-thinking-creativity-design-process-concept_53876-127465.jpg?t=st=1736149956~exp=1736153556~hmac=5a3a4a590849f4e3e9998cbcd88998612cdf1d6bb20eb02a8ac061eeb5967020&w=740" class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Adventure" />
        </a>
        <div class="relative mt-5">
          <p class="uppercase font-semibold text-xs mb-2.5 text-maroon">September 10th 2024</p>
          <a href="/" class="block mb-3 ">
            <h2 class="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-red-800 dark:hover:text-purple-400">
            Precision in Digital Design: The Essence
            </h2>
          </a>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Precision in Digital Design: The Essence of Precise Web Works..</p>
          <a href="#_" class="font-medium underline text-maroon hover:text-xs duration-300 dark:text-purple-400">Read More</a>
        </div>
      </div>

      <div class="relative">
        <a href="#_" class="block overflow-hidden group rounded-xl shadow-lg">
          <img src="https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148089706.jpg?t=st=1736150049~exp=1736153649~hmac=67bcdf9ffd0e532a15e149142d6ac167a04115f68f75e20b2d704413d2350f86&w=740" class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Ocean" />
        </a>
        <div class="relative mt-5">
          <p class="uppercase font-semibold text-xs mb-2.5 text-maroon">September 15th 2023</p>
          <a href="/" class="block mb-3 ">
            <h2 class="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-red-900 dark:hover:text-purple-400 no-underline">
            Orchestrating Digital Artistry: How Precise Web
            </h2>
          </a>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Orchestrating Digital Artistry: How Precise Web Works Blends Imagination and..</p>
          <a href="#_" class="font-medium underline text-maroon hover:text-xs duration-300 dark:text-purple-400">Read More</a>
        </div>
      </div>

      <div class="relative">
        <a href="#_" class="block overflow-hidden group rounded-xl shadow-lg">
          <img src="https://img.freepik.com/premium-photo/young-startup-business-people-couple-working-laptop-computer-businesspeople-group-meeting-background-office-interior_530697-12430.jpg" class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Desert Adventure" />
        </a>
        <div class="relative mt-5">
          <p class="uppercase font-semibold text-xs mb-2.5 text-maroon">October 5th 2023</p>
          <a href="/" class="block mb-3 ">
            <h2 class="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-red-800 dark:hover:text-purple-400">
            Digital Legacies: Crafting History with Precise
            </h2>
          </a>
          <p class="mb-4 text-gray-700 dark:text-gray-300">Digital Legacies: Crafting History with Precise Web Works in the..</p>
          <a href="#_" class="font-medium underline text-maroon dark:text-purple-400  hover:text-xs duration-300 ">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Blogs