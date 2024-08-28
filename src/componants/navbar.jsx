import React from 'react';
import {Link} from 'react-router-dom'

import { useAuth0 } from "@auth0/auth0-react";


function Header() {

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();


  return (
    <header className="text-gray-600 body-font z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-10">
        <a href="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="./src/pictures/icon.png" alt="icon" className="w-12 h-12" />
        <span className="ml-3 text-xl font-serif font-extrabold">EcoHub</span>

        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/home" className="mr-5 font-medium hover:text-green-500">Home</Link>
          <Link to="/contact" className="mr-5 font-medium hover:text-green-500">Contact us</Link>
          <Link to="/compass" className="mr-5 font-medium hover:text-green-500">Compass</Link>
          <Link to="/About" className="mr-5 font-medium hover:text-green-500">About Us</Link>
          <Link to="/feed" className="mr-5 font-medium hover:text-green-500">Feedback</Link>
        </nav>




        <div className='flex flex-row items-center'>
          <div className="userDetails gap-x-2 flex items-center">
            {isAuthenticated && (<img className='rounded-full w-10' src={user.picture} alt ="pf"/>)}
            {isAuthenticated && (<p>{user.nickname}</p>)}
          </div>

          <div className='w-48 flex flex-row justify-center items-center gap-x-10'>
              {isAuthenticated ? (
                <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </button>
              ) : (
                <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0" onClick={() => loginWithRedirect()}>Log In</button>
              )}
          </div>
        </div>









        {/* <Link to='/login'className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">Log In
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
        </Link> */}
      </div>
    </header>
  );
}

export default Header;
