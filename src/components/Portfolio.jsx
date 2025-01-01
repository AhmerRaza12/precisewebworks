import React, { useState } from 'react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Array of image objects to make the component more dynamic and easily editable.
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rotation: 'rotate-6',
      title: 'Solcraft',
    },
    {
      url: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rotation: '-rotate-12',
        title: 'Regal',
    },
    {
      url: 'https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rotation: 'rotate-6',
      title: 'Eco Solutions',
    },
    {
      url: 'https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rotation: '-rotate-12',
      title:'MaxiBank',
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="portfolio" className="portfolio-section py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Portfolio</h2>
          <p className="text-lg text-maroon font-semibold">Browse some of our Awesome Projects</p>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-8 justify-center">
          {['All', 'Web Design', 'App Development', 'Search Engine Optimization', 'PPC', 'Branding'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`filter-button px-4 py-2 mr-2 mb-2 rounded ${activeTab === tab ? 'bg-maroon text-white' : 'bg-gray-100 text-primary hover:bg-gray-300 hover:ring-maroon hover:ring-2'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row mx-auto">
          {images.map((image, index) => (
            <a href="#_" key={index}>
              <img
                src={image.url}
                className={`rounded-xl ${image.rotation} hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
                alt="Portfolio Project"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
