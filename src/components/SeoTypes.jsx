import React, { useState } from 'react';

const SeoTypes = () => {
  const [activeStep, setActiveStep] = useState(0);

  const seoContent = [
    {
      title: 'Technical SEO',
      description:
        'Although some consider technical SEO to be a part of on-page SEO, we’ll be discussing it separately in this article. In a nutshell, technical SEO is connected to on-page elements but focuses on operational issues.',
      image: 'https://img.freepik.com/premium-photo/black-office-desk-table-with-blank-screen-laptop-computer-notebook-watch-mobile-phone-red-cup-coffee-top-view_96727-1622.jpg?w=740',
    },
    {
      title: 'YouTube SEO',
      description:
        'YouTube SEO targets a certain audience, but it has a significant impact on the volume of traffic you receive. Many people are unaware that one of the most widely used search engines in the world is YouTube and that ranking for a popular search there is absolute gold.',
      image: 'https://img.freepik.com/free-photo/hands-working-laptop-glasses-notebook-cones-office-supplies_1163-2756.jpg',
    },
    {
      title: 'SEO for E-Commerce',
      description:
        'Let Precise Web Works deal with your SEO for e-commerce websites and start getting a guaranteed increase in sales and revenue. A solid SEO strategy gets more viewers on your pages, which means you are selling more products without spending crazy money on paid ads.',
      image: 'https://img.freepik.com/free-photo/shopping-trolley-gift-near-modern-laptop_23-2148015448.jpg?t=st=1736139505~exp=1736143105~hmac=e62b52417a0bfa72700ed5a254cbee70c4d0374c15b063de97f44b7ff1197c89&w=740',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* SEO Content */}
      <div className="relative flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center h-72">
          <img
            src={seoContent[activeStep].image}
            alt={seoContent[activeStep].title}
            className="rounded-lg shadow-xl w-full max-w-md object-cover"
          />
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-8 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-maroon mb-4">
            {seoContent[activeStep].title}
          </h2>
          <p className="text-gray-700">{seoContent[activeStep].description}</p>
        </div>
      </div>

      {/* Stepper */}
      <div className="relative flex items-center justify-center mt-8">
  {/* Stepper Line */}
  <div
    className="absolute h-1 bg-maroon"
    style={{
      width: `${(seoContent.length - 1) * 15}rem`, 
    }}
  ></div>


{seoContent.map((_, index) => (
    <button
      key={index}
      className={`h-6 w-6 rounded-full bg-red-600 border-2 z-10 ${
        activeStep === index
          ? 'border-white ring-2 ring-maroon/100'
          : 'border-gray-100'
      }`}
      style={{
        marginLeft: index > 0 ? '15rem' : 0, 
      }}
      onClick={() => setActiveStep(index)}
    />
  ))}
</div>
    </div>
  );
};

export default SeoTypes;
