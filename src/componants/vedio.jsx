import React from 'react';

function VideoComponent() {
  return (
    <div className="w-full relative">
      {/* Video */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          frameBorder="10"
          height="95%"
          src="https://giphy.com/embed/AH1T6mkLUXgnOx5dp1/video"
          controls={false}
          autoPlay
        ></iframe>
        <h1 className="absolute top-0 left-0 right-0 flex justify-center items-center py-44 text-white font-bold text-5xl" style={{ textShadow: '8px 8px 16px rgba(0, 0, 0, 1)' }}>
            Check which brands have a public sustainability profile
        </h1>

        <div className="absolute top-0 left-0 right-0 flex justify-center rounded-lg items-center py-60">
            <div className="relative">
            <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 mr-2 w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <input
                type="text"
                placeholder="Search the brands..."
                className="pr-96 pl-8 py-2 border border-green-600 rounded-l-3xl rounded-r-3xl"
            />
            </div>
          {/* You can add a button for search functionality here if needed */}
        </div>
      </div>
      
      <hr className="mt-8 w-4/5 mx-auto border-t border-gray-300" />
    </div>
  );
}

export default VideoComponent;
