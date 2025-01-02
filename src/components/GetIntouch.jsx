import React from 'react'
import { MdMail, MdPhone } from 'react-icons/md'

import bgImage from '../assets/getintouch-bg.jpg'
const GetIntouch = () => {
  return (
    <div className='bg-primary relative'>
    <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl xl:max-w-6xl py-6">

    
    <div class="w-full h-64 lg:w-1/2 lg:h-auto">
        <img class="h-[500px] w-full object-cover" src={bgImage} alt="Background Getintouch"/>
    </div>
    

   
    <div
        class="max-w-lg bg-primary md:max-w-2xl rounded-md md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        
        <div class="flex flex-col p-12 md:px-16">
            <h2 class="text-2xl font-medium uppercase  text-gray-300 lg:text-4xl">Get In Touch </h2>
            <p class="mt-4 text-gray-400">
            Whatever it is you need, an entirely new website or an old one revamped, our customer representatives are just a call away to answer all your queries. We{"'"}re always excited to start your project.
            </p>
          
            <div class="mt-8 flex space-x-4">
            <button onClick={() => window.location.href = 'mailto:help@precisetech.com'}
        class="w-full px-4 py-4 text-sm font-semibold leading-6 text-gray-50  uppercase duration-200 transform border-2 rounded-md cursor-pointer border-maroon focus:ring-4 hover:bg-maroon focus:bg-maroon focus:ring-maroon focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-2 tracking-wider">
            <MdMail className="inline-block mr-2 text-gray-400 " />
        Email
    </button>
    <button onClick={() => window.location.href = 'tel:+16304514599'}
        class="w-full px-4 py-4 text-sm font-semibold leading-6 text-gray-50 uppercase duration-200 transform border-2 rounded-md cursor-pointer border-maroon focus:ring-4 hover:bg-maroon focus:bg-maroon focus:ring-maroon focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-6 border-text  hover:shadow-lg hover:-translate-y-2 tracking-wider">
        <MdPhone className="inline-block mr-2 text-gray-400 " />
        Call Us
    </button>
            </div>
        </div>

        
       
    </div>
    

</div>
<div
        className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
        style={{
          backgroundImage: 'linear-gradient(to right top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)',
          borderColor: 'rgba(92, 79, 240, 0.2)'
        }}
      ></div>
</div>
  )
}

export default GetIntouch