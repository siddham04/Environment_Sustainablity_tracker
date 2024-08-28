import React, { useState, useEffect } from 'react';

const ProductGallery = () => {
  const [cards, setCards] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedUtility, setSelectedUtility] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showFirstPopup, setShowFirstPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/apifetch.json")
      .then((response) => response.json())
      .then((data) => setCards(data.categories));
  }, []);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
    setShowFirstPopup(true);
  };

  const handleQuantityChange = (e) => {
    if (e.target.value === '' || (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 100)) {
      setQuantity(e.target.value);
    }
  };

  const handleUtilityChange = (e) => {
    setSelectedUtility(e.target.value);
  };

  const handlePurchase = () => {
    const confirmPurchase = window.confirm("Are you sure you want to purchase?");
    if (confirmPurchase) {
      console.log("User confirmed the purchase.");
    } 
    else {
      console.log("User cancelled the purchase.");
    }
  };

  const handleSubmit = () => {
    if (selectedUtility && quantity > 0) {
      const newItem = { 
        utility: selectedUtility, 
        quantity: parseInt(quantity), 
        company: selectedCompany.name // Include the company name
      };
      setCartItems([...cartItems, newItem]);
      setSelectedUtility('');
      setQuantity(1);
      setShowFirstPopup(false);
    } 
    else{
      alert('Please select a utility and enter a valid quantity.');
    }
  };

  return(
    <section className="bg-green-100 text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-6xl font-bold mb-28">Food & Drink</h1>
          <button 
            className="text-xl font-semibold px-4 py-4 rounded-md flex gap-2 bg-green-400 text-gray-800 hover:bg-green-600 transition-colors duration-300 ease-in-out"
            onClick={() => setShowSecondPopup(!showSecondPopup)}>
          <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <h5>My Cart</h5>
          </button>
        </div>
        <div className="flex flex-wrap -m-4">
          {cards.length > 0 && cards[1].companies.map(company => (
            <div key={company.name} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <button 
                onClick={() => handleSelectCompany(company)}
                className="block relative h-48 rounded w-72 overflow-hidden hover:scale-105 transform transition-transform duration-300 ease-in-out"
              >
                <img alt="ecommerce" className="object-cover rounded-lg object-center w-full h-full block" src={company.logo} />
              </button>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xl text-center tracking-widest title-font mb-1">{company.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {showFirstPopup && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md flex items-center justify-center">
            <div className="p-4 border rounded-md shadow-md">
              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">{selectedCompany.name}</h2>
                <div className="mb-2">
                  <label htmlFor="utility-item" className="block font-medium mb-2">Utility Item:</label>
                  <select 
                    id="utility-item" 
                    name="utility-item" 
                    value={selectedUtility} 
                    onChange={handleUtilityChange} 
                    className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500">
                    <option value="">Select Food & Drnk</option>
                    <option value="Bamboo">Bamboo</option>
                    <option value="uStainless steel">Stainless steel</option>
                    <option value="Ceramic">Ceramic</option>
                    <option value="Silicone">Silicone</option>
                    <option value="Cloth bags">Cloth bags</option>
                    <option value="Organic cotton">Organic cotton</option>
                  </select>
                </div>
                <label htmlFor="quantity" className="block mb-2">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border rounded px-2 py-1 mb-4"/>
                <div className="flex justify-between">
                  <button
                    onClick={() => setShowFirstPopup(false)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2">
                    Close
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

{showSecondPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
    <div className="relative w-auto my-6 mx-auto max-w-3xl">
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 className="text-3xl font-semibold">
            My Cart
          </h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => setShowSecondPopup(false)}
          >
            <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        <div className="relative p-6 flex-auto">
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={`${index}-${item.utility}`} className="text-lg mb-4">
                  <span className="font-semibold">Company:</span> {item.company}, <span className="font-semibold">Utility:</span> {item.utility}, <span className="font-semibold">Quantity:</span> {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg">Your cart is empty.</p>
          )}
        </div>
        <div className="p-6 border-t border-solid border-gray-300 flex justify-end">
          <button
            onClick={handlePurchase}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default ProductGallery;
