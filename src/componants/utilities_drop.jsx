import React, { useState } from 'react';

function UtilityForm() {
  const [selectedUtility, setSelectedUtility] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleUtilityChange = (e) => {
    setSelectedUtility(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = () => {
    // You can perform any actions needed when the OK button is clicked
    console.log('Selected Utility:', selectedUtility);
    console.log('Quantity:', quantity);
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      {/* Dropdown for utility item names */}
      <div className="mb-4">
        <label htmlFor="utility-item" className="block font-medium mb-2">Utility Item:</label>
        <select id="utility-item" name="utility-item" value={selectedUtility} onChange={handleUtilityChange} className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500">
          <option value="">Select Utility</option>
          <option value="utility1">Utility 1</option>
          <option value="utility2">Utility 2</option>
          <option value="utility3">Utility 3</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Placeholder for text quantity */}
      <div className="mb-4">
        <label htmlFor="quantity" className="block font-medium mb-2">Quantity:</label>
        <input type="text" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} placeholder="Enter quantity..." className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>

      {/* OK button */}
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">OK</button>
    </div>
  );
}

export default UtilityForm;
