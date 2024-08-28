import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardList = () => { 
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/apifetch.json")
            .then((response) => response.json())
            .then((data) => setCards(data.categories));
    }, []);
    
    return (
        <>
            <div className="mt-20 mb-10">
                <h1 className="text-4xl font-bold text-gray-900 font-serif pl-32">Categories</h1>
            </div>
            <div className='cardList flex flex-wrap h-30 w-100 pl-32 pr-32 mb-20'>
                {cards.map((category, index) => ( 
                    <Link key={index} to={`/${category.name}`} className='text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-xl text-lg  text-center me-2  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 font-bold py-5 px-10 shadow-md ml-10 mb-10'>
                        {category.name}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default CardList;

