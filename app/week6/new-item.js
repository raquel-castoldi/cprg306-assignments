"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        const parseInput = parseInt(event.target.value);

        if (!isNaN(parseInput)) {
            setQuantity(parseInput);
        }
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = (event) => { 
        event.preventDefault();

        const id = Math.random();
        const item = {id, name, quantity, category};
        console.log("Item Created: ", item);
        
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

return (
    <main>
        <div className="min-h-screen bg-pink-50 flex events-center justify-center">
            <form>
                <div className="w-full max-w-md bg-pink-200 p-8 rounded-lg shadow-md">
                    <label className="block mb-4">
                        <span className="text-gray-800">Name:</span>
                        <input
                            required
                            type="text"
                            value={name}
                            onChange={(event) => setName (event.target.value)}
                            className="mt-1 p-1 block w-full rounded-md text-black bg-white focus:bg-pink-50"

                        />
                    </label>
                    <br />
                    <label className="block mb-4">
                        <span className="text-gray-800">Quantity:</span>
                        <input
                            required
                            type="number"
                            min={1}
                            max={99}
                            value={quantity}
                            onChange={(event) => setQuantity (event.target.value)}
                            className="mt-1 p-1 block w-full rounded-md text-black bg-white focus:bg-pink-50"
                        />
                    </label>
                    <br />
                    <label className="block mb-4">
                        <span className="text-gray-800">Category:</span>
                        <select
                            value={category}
                            onChange={(event) => setCategory (event.target.value)}
                            className="mt-1 p-1 block w-full rounded-md text-black bg-white focus:bg-pink-50"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <br />
                    <button 
                    type="submit"
                    className="w-full py-2 px-4 bg-pink-600 hover:bg-pink-500 rounded-md text-white"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </main>
)
};