import React, { useState } from 'react';

function GallerySection() {
  const goals = [
    'No Poverty',
    'Zero Hunger',
    'Good Health',
    'Quality Education',
    'Gender Equality',
    'Clean Water',
    'Clean Energy',
    'Economic Growth',
    'Industry Innovation',
    'Reduced Inequality',
    'Sustainable Cities',
    'Consumption Production',
    'Climate Action',
    'Below Water',
    'On Land',
    'Peace Justice',
    'Partnerships Goals'
  ];

  // Image URLs corresponding to each goal
  const imageUrls = [
    './src/pictures/No_Poverty.jpg',
    './src/pictures/Zero_Hunger.png',
    './src/pictures/Good_Health.png',
    './src/pictures/Quality_Education.png',
    './src/pictures/Gender_Equality.png',
    './src/pictures/Clean_Water.png',
    './src/pictures/Clean_Energy.jpeg',
    './src/pictures/Economic_Growth.png',
    './src/pictures/Industry_And_Innovation.png',
    './src/pictures/Reduced_Inequality.png',
    './src/pictures/Sustainable_Cities.png',
    './src/pictures/Responsible_Consumption.png',
    './src/pictures/Climate_Action.png',
    './src/pictures/Life_Below_Water.png',
    './src/pictures/Life_on_Land.png',
    './src/pictures/Peace_and_Justice.png',
    './src/pictures/Partnerships.png'
  ];

  const [startIndex, setStartIndex] = useState(0);

  const displayGoals = goals.slice(startIndex, startIndex + 5);

  return (
    <>
      <div className="mt-20 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 font-serif pl-32">Explore the UN Sustainable Development Goals</h1>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-32 py-10 mx-auto relative" style={{ overflowX: 'auto' }}>
          <div className="flex flex-nowrap -m-4" refstyle={{ transform: 'translateX(0)' }}>
            {displayGoals.map((goal, index) => (
              <div key={index} className="xl:w-1/5 md:w-1/2 p-4">
                <div className="bg-green-100 hover:bg-green-300 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={imageUrls[startIndex+index]} alt="content" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Goal {(startIndex+index+1)%(goals.length+1)}</h3>
                  {goal.split(' ').map((word, wordIndex) => (
                    <h2 key={wordIndex} className="text-lg text-gray-900 font-medium title-font leading-6">{word}</h2>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 bottom-0 px-36 py-32 flex items-center">
          <button
            onClick={() => setStartIndex(Math.max(0, (startIndex - 1)%(goals.length-4)))}
            className={`text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded-full text-lg transition-all duration-200 ${
              startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <svg class="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          </button>
        </div>
        <div className="absolute top-0 bottom-0 px-36 py-32 flex items-center right-0">
          <button
            onClick={() => setStartIndex(Math.min(goals.length - 1, (startIndex + 1)%(goals.length-4)))}
            className={`text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded-full text-lg transition-all duration-200 ${
              startIndex >= goals.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="5" y1="12" x2="19" y2="12" />  <polyline points="12 5 19 12 12 19" /></svg>
          </button>
        </div>
        <hr className="mt-8 w-4/5 mx-auto border-t border-gray-300" />
      </section>
    </>
  );
}

export default GallerySection;
