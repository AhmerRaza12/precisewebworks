
import React from 'react';

const Seo = () => {
    return (
        <div className="bg-maroon text-white p-8">
            <h1 className="text-4xl font-bold mb-4">We provide the best in-house SEO services for your brand to grow</h1>
            <div className="carousel relative">
                <div className="carousel-inner relative overflow-hidden w-full">
                    <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
                    <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
                        <div className="block h-full w-full bg-black text-white text-5xl text-center">SEO Service 1</div>
                    </div>
                    <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
                    <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
                        <div className="block h-full w-full bg-black text-white text-5xl text-center">SEO Service 2</div>
                    </div>
                    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
                    <div className="carousel-item absolute opacity-0" style={{ height: '50vh' }}>
                        <div className="block h-full w-full bg-black text-white text-5xl text-center">SEO Service 3</div>
                    </div>
                    <label htmlFor="carousel-3" className="carousel-control prev control-1 w-10 h-10 ml-2 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-black rounded-full bg-white hover:bg-gray-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label htmlFor="carousel-2" className="carousel-control next control-1 w-10 h-10 mr-2 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-black rounded-full bg-white hover:bg-gray-400 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                    <label htmlFor="carousel-1" className="carousel-control prev control-2 w-10 h-10 ml-2 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-black rounded-full bg-white hover:bg-gray-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label htmlFor="carousel-3" className="carousel-control next control-2 w-10 h-10 mr-2 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-black rounded-full bg-white hover:bg-gray-400 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                    <label htmlFor="carousel-2" className="carousel-control prev control-3 w-10 h-10 ml-2 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-black rounded-full bg-white hover:bg-gray-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                    <label htmlFor="carousel-1" className="carousel-control next control-3 w-10 h-10 mr-2 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-black rounded-full bg-white hover:bg-gray-400 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
                </div>
            </div>
        </div>
    );
};

export default Seo;