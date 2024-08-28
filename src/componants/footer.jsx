import React from 'react';
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-green-500 text-gray-600 body-font text-center border-2">
      <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <h1 className="sm:text-3xl text-2xl font-medium flex title-font mb-2 text-gray-900"><img src="./src/pictures/icon.png" alt="icon" className="w-12 h-12" />EcoHub.com</h1>
          <p className="leading-relaxed text-base">EcoHub.com acknowledges the Australian Aboriginal and Torres Strait Islander peoples as the traditional custodians of the lands where we live, learn and create. We pay our respects to their cultures; and to their Elders past, present and future..</p>
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12">
          <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">CATEGORIES</h2>
          <nav className="flex flex-wrap list-none -mb-1">
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link to="/Utilities" className="text-gray-600 hover:underline hover:text-gray-800">Utilities</Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link to="/Food & Drink" className="text-gray-600 hover:underline hover:text-gray-800">Food & Drink</Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link to="/Health & Beauty" className="text-gray-600 hover:underline hover:text-gray-800">Health & Beauty</Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link to="/Home & Garden" className="text-gray-600 hover:underline hover:text-gray-800">Home & Garden</Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link to="/Construction" className="text-gray-600 hover:underline hover:text-gray-800">Construction</Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link to="/Services" className="text-gray-600 hover:underline hover:text-gray-800">Services</Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link to="/Motor" className="text-gray-600 hover:underline hover:text-gray-800">Motor</Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link to="/Fashion and Clothing" className="text-gray-600 hover:underline hover:text-gray-800">Fasion and Clothing</Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link to="/Technology" className="text-gray-600 hover:underline hover:text-gray-800">Technology</Link>
            </li>
            <li className="lg:w-1/3 mb-1 w-1/2">
              <Link to="/Travel" className="text-gray-600 hover:underline hover:text-gray-800">Travel</Link>
            </li>
          </nav>
        </div>
      </div>
    </section>
      <div className="bg-green-900">
        <div className="container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
            <img src="./src/pictures/icon.png" alt="icon" className="w-12 h-12" />
            <span className="ml-3 text-xl">EcoHub</span>
          </a>
          <p className="text-sm text-black sm:ml-6 sm:mt-0 mt-4">© 2024 EcoHub —
            <a href="https://twitter.com/EcoHub" rel="noopener noreferrer" className="text-black ml-1 font-italic hover:underline" target="_blank">@EcoHub</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <button className="text-black">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </button>
            <button className="ml-2 text-black">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </button>
            <button className="ml-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
