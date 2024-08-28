import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []); 

  return (
    <div className={`preloader ${isLoading ? 'flex' : 'hidden'} justify-center items-center h-screen`}>
      <div className="loader border-8 border-gray-300 border-t-8 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Preloader;
