import React from 'react';

function CardGrid() {
  return (
    <>
      <div>
      <div className="mt-20 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 font-serif pl-32">Your one-stop resource for business sustainability information</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-32 pr-32 mt-10">
          <Card title="About Us" content="We exist as the central location to view business sustainability records, credentials and supporting documentation." />
          <Card title="About The Brands" content="Our brand Members choose to maintain this public record, they voluntarily report their progress & have committed to honesty." />
          <Card title="Here for You" content="We’re here to help you make more informed choices about the businesses you support, work with, invest in and buy from." />
        </div>
      </div>
      <hr className="mt-8 w-4/5 mx-auto border-t border-gray-300" />
      </div>
    </>
  );
}

function Card({ title, content }) {
  return (
    <div className="relative w-full bg-grey-900 rounded-3xl overflow-hidden shadow hover:shadow-lg hover: border-2">
      <h3 className="text-xl font-bold text-gray-600 pl-5 pt-5 underline">
        {title}
      </h3>
      <p className="text-base pl-5 pb-5 pr-5 pt-4 md:text-lg text-gray-800">
        {content}
      </p>
    </div>
  );
}

export default CardGrid;
