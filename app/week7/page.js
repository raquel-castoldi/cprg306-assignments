"use client"; 

import { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
        };
    
    function handleItemSelect(item) {
        let name = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
        setMealIdea(name);
    }

    return (
        <main className="flex min-h-screen  bg-pink-50 flex-col items-center pt-24">
        <div className="flex">
            <NewItem onAddItem={handleAddItem} />
            <MealIdeas ingredient={MealIdeas} />
        </div>
        <h1 className="text-2xl font-bold m-2">Shopping List</h1>
        <div className='flex'>
            <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        </main>
    );
}
