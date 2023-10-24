"use client"; 

import { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main className="flex min-h-screen  bg-pink-50 flex-col items-center pt-24">
            <h1 className="text-2xl font-bold m-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList />
        </main>
    )
}