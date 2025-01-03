import React from 'react';

const Contact = () => {
  return (
    <div
  id="container"
  className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative bg-primary"
>
      <div className="mr-10 flex flex-col items-center justify-center">
        <img
          className="rounded-lg min-w-[100px] w-full h-[500px] md:w-[100%] md:h-[500px]"
          src="https://precisewebworks.com/wp-content/uploads/2022/11/colmn-bg.png"
          alt="myself"
        />
      </div>
      
      <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[40%]">
        <h1 className="text-white font-bold mt-6 mb-8 text-center text-4xl">
          Contact Us
        </h1>

        <p className="text-white w-full  mb-10 text-center">
          Get in touch with our customer service representatives and designers to ensure that your business is nothing less than a success.
        </p>

        {/* Form Start */}
        <form className="space-y-6">
  <div className="flex space-x-2">
    <div className="flex-1">
      <label htmlFor="name" className="block text-white font-medium">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full p-3 rounded-lg bg-maroon text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon placeholder:text-white"
        placeholder="Enter your name"
      />
    </div>

    <div className="flex-1">
      <label htmlFor="email" className="block text-white font-medium">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full p-3 rounded-lg bg-maroon text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon placeholder:text-white"
        placeholder="Enter your email"
      />
    </div>
  </div>

  <div className="flex space-x-2">
    <div className="flex-1">
      <label htmlFor="service" className="block text-white font-medium">Service</label>
      <select
        id="service"
        name="service"
        className="w-full p-3 rounded-lg bg-maroon text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon"
      >
        <option value="web_design">Web Design</option>
        <option value="app_dev">App Development</option>
        <option value="seo">SEO</option>
        <option value="branding">Branding</option>
      </select>
    </div>

    <div className="flex-1">
      <label htmlFor="phone" className="block text-white font-medium">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        className="w-full p-3 rounded-lg bg-maroon text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon placeholder:text-white"
        placeholder="Enter your phone number"
      />
    </div>
  </div>

  <div>
    <label htmlFor="message" className="block text-white font-medium">Message</label>
    <textarea
      id="message"
      name="message"
      rows="3"
      className="w-full p-3 rounded-lg bg-maroon text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-maroon placeholder:text-white"
      placeholder="Your message"
    />
  </div>

  <div>
    <button
      type="submit"
      className="w-full py-3 rounded-lg bg-maroon text-white font-bold hover:bg-maroon-dark transition"
    >
      Send Message
    </button>
  </div>
</form>
        
      </div>
    </div>
  );
};

export default Contact;
