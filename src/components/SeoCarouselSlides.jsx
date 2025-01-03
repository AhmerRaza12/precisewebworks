import React, { useState, useEffect } from "react";

const SeoCarouselSlides = () => {
  const slides = [
    "https://img.freepik.com/free-photo/older-man-home-showing-graph-notepad-with-tablet-desk_23-2148991662.jpg?t=st=1735882840~exp=1735886440~hmac=b8c228876361fce5946ff4b49de95e11531bd49517aecdaf23651603ffb0f636&w=900", // Slide 1
    "https://img.freepik.com/free-photo/handsome-male-browsing-laptop_23-2148729649.jpg", // Slide 2
    "https://img.freepik.com/premium-photo/seo-search-engine-optimization-modish-ecommerce-online-retail-business_31965-503618.jpg", // Slide 3
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[550px] overflow-hidden">

      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide]})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-center text-white text-3xl md:text-5xl font-bold px-6">
          We Provide The Best SEO Services for <br />
          <span className="text-maroon">Your Business</span> To Grow
        </h1>
      </div>
    </section>
  );
};

export default SeoCarouselSlides;
