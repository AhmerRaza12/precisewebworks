import React from 'react'

const HeroSections = () => {
  return (
    <section class="sm:mt-6 mt-4 mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div
        class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex lg:items-center flex-col lg:flex-row">
        <div class="sm:text-center lg:text-left lg:w-1/2">
          <h1 class="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Appealing And Creative</span>
            <span class="block text-maroon xl:inline">Design Services</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Precise Web Works is an award-winning branding services and graphic design agency USA, providing top-notch professional designing services for business branding. Whether you need a brand new appealing company logo design for a successful brand representation in your niche or a simple redesign, our team of qualified and creative designers is never short of ideas. We always fulfill our promise to provide the most excellent professional graphic design services. We aim to help you achieve your branding targets.
          </p>
        </div>

        <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 lg:flex lg:justify-center lg:items-center">
          <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
        </div>
      </div>

      <div class="my-10 mx-auto max-w-7xl px-4 flex gap-3 lg:flex lg:items-center flex-col lg:flex-row-reverse">
        <div class="sm:text-center lg:text-right lg:w-1/2">
          <h1 class="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Revolutionary Techniques</span>
            <span class="block text-maroon xl:inline">Tailored Designs</span>
          </h1>
          <div class="mt-3 sm:mt-5 ">
            <p class="text-base text-gray-500 sm:text-lg md:text-xl lg:mx-0">
              Our vision is to provide the best graphic design service that enables businesses to create a comprehensive brand image. That’s what to expect from the best Digital Design Agency in the USA.
            </p>
            <p class="mt-3 text-base text-gray-500 sm:text-lg md:text-xl lg:mx-0">
              A reputed graphic design services agency is all about making the visitors and target audience understand what you are trying to say and attract them. This is where you need the best graphic design agency. Precise Web works – a renowned graphic design agency USA, provides you the best solution for every designing and graphics project; no matter how sophisticated design you ask for, we can give you the design ideas created beyond your expectations. Our expert designers put every effort and use various digital designing tools, such as Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Abode Premier, Maya, Coral draw, and many more, to manifest and show to the client accordingly.
            </p>
          </div>
        </div>

        <div class="lg:inset-y-0 lg:left-0 lg:w-1/2 my-4 lg:flex lg:justify-center lg:items-center">
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full"
            src="https://precisewebworks.com/wp-content/uploads/2022/11/keyword-1024x1024.png"
            alt=""
          />
        </div>
      </div>

    </section>
  )
}

export default HeroSections
