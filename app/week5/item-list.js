"use client";

import { useState } from "react";
import Item from "./item.js";
import items from "./items.json"

function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const handleSortByName = () => {
        setSortBy('name');
    };

    const handleSortByCategory = () => {
        setSortBy('category');
    };

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
        return 0;
      });

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
        <div className="text-center">
            {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
            ))}
        </div>
        </div>
        </>
    );
}

export default ItemList;