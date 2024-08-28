import React from 'react';
import {Link} from 'react-router-dom'

function GallerySection() {
  return (
    <div className="mt-20 mb-10">
      <h1 className="text-4xl font-bold text-gray-900 font-serif pl-32">Articles And Resources</h1>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="lg:w-5/6 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
          <img alt="gallery" className="w-full object-cover h-full object-center block opacity-90 absolute inset-0" src='./src/pictures/env.jpg' />
            <div className="text-left relative z-8 w-full">
            <h2 className="text-4xl font-bold text-gray-900 font-serif mb-4">7 Things to know about the upcoming <br />Australian climate-related financial <br />disclosure requirements</h2>
              <Link to="https://www.sustainabilitytracker.com/article/7-key-things-to-know-about-the-upcoming-australian-climate-related-financial-disclosure-requirements/" className="mt-3 text-green-500 inline-flex items-center border border-green-500 py-2 px-4 rounded-md bg-white hover:bg-green-500 hover:text-white transition duration-300 ease-in-out ">
               Read More</Link>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/3">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-16 sm:px-10 px-6 relative ">
                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-90 absolute inset-0" src="./src/pictures/earth.jpg" />
                <div className=" relative z-8 w-full">
                <h2 className="text-4xl font-bold text-gray-900 font-serif ">10 Steps for<br />sustainable office</h2>
              <Link to="https://www.sustainabilitytracker.com/article/10-steps-to-set-up-a-sustainable-office/" className="mt-3 text-green-500 inline-flex items-center border border-green-500 py-2 px-4 rounded-md bg-white hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">
               Read More
             </Link>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/3">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-16 sm:px-10 px-6 relative">
                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-90 absolute inset-0" src="./src/pictures/australia.jpg" />
                <div className=" relative z-8 w-full">
                <h2 className="text-4xl font-bold text-gray-900 font-serif ">Change is coming<br />for australia</h2>
              <Link to='https://www.livemint.com/news/world/australia-visa-announces-new-student-work-visa-rules-to-clamp-migration-heres-list-of-changes-11702288535848.html' className="mt-3 text-green-500 inline-flex items-center border border-green-500 py-2 px-4 rounded-md bg-white hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">
               Read More
             </Link>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/3">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-16 sm:px-10 px-6 relative">
                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-90 absolute inset-0" src="./src/pictures/cup.jpg" />
                <div className=" relative z-8 w-full">
                <h2 className="text-4xl font-bold text-gray-900 font-serif">Western goes single<br />Use cup free</h2>
              <Link to="https://au.madebyfressko.com/blogs/blog/western-australia-goes-single-use-cup-free" className="mt-3 text-green-500 inline-flex items-center border border-green-500 py-2 px-4 rounded-md bg-white hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">
               Read More
             </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-8 w-4/5 mx-auto border-t border-gray-300" />
    </section>
    </div>
  );
}

export default GallerySection;


