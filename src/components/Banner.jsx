import React from 'react'

export const Banner = () => {
  return (
    <div className="relative lg:h-[75vh]  lg:mb-40 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background " className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
  <h1
  className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-white-300 dark:text-gray-300 sm:text-6xl">
  Boost Your Business with a Custom Website
  <span className="relative whitespace-nowrap text-maroon">
    <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-maroon dark:fill-orange-300/60" preserveAspectRatio="none">
      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
    </svg>
    <span className="relative"> & Grow</span>
  </span>
</h1>

    <p className="text-xl text-gray-400 mb-6 my-4">Discover amazing features and services that await you.</p>
    <button
        className="w-full px-4 py-4 text-sm font-semibold leading-6 uppercase duration-200 transform border-2 rounded-md cursor-pointer border-maroon focus:ring-4 hover:bg-maroon focus:bg-maroon focus:ring-maroon focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-2 tracking-wider">
        Get Started
    </button>
  </div>
</div>
  )
}
