import React, { useState } from "react";

const PlaceholderTooltip = ({ placeholderText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (!placeholderText) {
      setShowTooltip(true);
    }
  };

  const handleFocus = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative">
      {showTooltip && !placeholderText && (
        <div className="absolute z-10 bg-red-600 border border-gray-300 rounded-md p-2 mb-10 text-white text-xs pb-8 sm:pb-2">
          Please enter text
        </div>
      )}
      <input
        type="text"
        placeholder={placeholderText}
        onClick={handleClick}
        onFocus={handleFocus}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default PlaceholderTooltip;
