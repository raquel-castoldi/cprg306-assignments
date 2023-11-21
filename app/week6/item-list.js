"use client";

import React, { useState } from "react";
import Item from "./item.js";
import itemsCopy from "./items.json";

export default function ItemList({ items }) {

    const [sortBy, setSortBy] = useState('name');

    if (sortBy === 'name') {
      itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (sortBy === 'category') {
      itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
    }
    
    const handleSortByName = (e) => {
      setSortBy('name');
  };

  const handleSortByCategory = (e) => {
      setSortBy('category');
  };
    return (
        <>
        <div>
        <div>
            <button
            onClick={handleSortByName}
            className="px-5 py-4 ml-4 bg-pink-600 hover:bg-pink-500 rounded-md text-white"
            >
            Sort by Name
            </button>

            <button
            onClick={handleSortByCategory}
            className="px-4 py-4 ml-4 bg-pink-600 hover:bg-pink-500 rounded-md text-white"
            >
            Sort by Category
            </button>
        </div>
        <div className='flex flex-col flex-grow'>
              {itemsCopy.map((item) => (
                  <Item 
                      key={item.id} 
                      name={item.name} 
                      quantity={item.quantity} 
                      category={item.category} 
                  />
              ))}
          </div>
        </div>
        </>
    );
}
