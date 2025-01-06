import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { PiMapPinLine } from "react-icons/pi";
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <section className=" bg-primary">
  <div id="map" className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
    <iframe
      src="https://maps.google.com/maps?q=757%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060654%2C%20USA&t=m&z=10&output=embed&iwloc=near"
      width="100%" height="480" style={{border:"0"}} allowfullscreen="" aria-label='757 N Orleans St, Chicago, IL 60654, USA' loading="lazy" title='757 N Orleans St, Chicago, IL 60654, USA'></iframe>
  </div>
  <div className="container px-6 md:px-12">
    <div
      className="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-red-500 shadown-lg">
      <div className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-maroon data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput90" />
              <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-maroon peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  for="exampleInput90">Name
                </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="email"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-maroon data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput91" />
              <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-maroon peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  for="exampleInput91">Email address
                </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
                <input type='tel'
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-maroon data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="exampleInput92" />
                <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-maroon peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                    for="exampleInput92">Phone
                  </label>
                </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
  <select
    className="peer block min-h-[auto] w-full rounded border-2 border-gray-300 bg-transparent py-[0.9rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-maroon peer-data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
    id="exampleFormControlSelect1"
  >
    <option value="" disabled selected>-- Select a service --</option>
    <option>SEO</option>
    <option>PPC</option>
    <option>Website Management</option>
    <option>Amazon Management</option>
    <option>Graphics Design</option>
    <option>Content Management</option>
    <option>Brand Management</option>
  </select>
  <label
    for="exampleFormControlSelect1"
    className="pointer-events-none absolute  left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-0 leading-[1.6] text-gray-500 transition-all duration-200 top-[-0.6rem] scale-[0.8] ease-out peer-focus:top-[-0.6rem] peer-focus:scale-[0.8] peer-focus:text-maroon peer-data-[te-input-state-active]:top-[-0.6rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
  >
    Services
  </label>
</div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleFormControlTextarea1" rows="3"></textarea>
              <label for="exampleFormControlTextarea1"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-maroon peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
            </div>

            <button type="button"
                className="mb-6 w-full rounded bg-maroon text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                Send
              </button>
          </form>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-maroon p-4 text-white">
                    <AiOutlineMail className="h-6 w-6">
                    </AiOutlineMail>
                  </div>
                </div>
                <Link to={'mailto:help@precisewebworks.com'} className=''>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">
                    Email Us
                  </p>
                  <p className="text-sm text-neutral-500">
                   help@precisewebworks.com
                  </p>
                </div>
                </Link>
              </div>
            </div>
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="srink-0">
                  <div className="inline-block rounded-md bg-maroon p-4 text-white">
                    <FaPhoneAlt className="w-6 h-6">
                    </FaPhoneAlt>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">
                    Call
                  </p>
                  <p className="text-sm text-neutral-500">
                    +1
                  (163) 045-14599
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-maroon p-4 text-white">
                    <PiMapPinLine className="w-6 h-6">
                    </PiMapPinLine>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">Address</p>
                  <p className="text-neutral-500"> 757 N Orleans St 757 N Orleans St
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contact