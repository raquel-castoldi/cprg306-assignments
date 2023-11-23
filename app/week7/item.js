import React from "react";

export default function Item({ name, quantity, category, onSelect, onHover }) {

    return (
        <div className="border border-pink-500 bg-pink-300 w-full max-w-xs m-4 p-2 cursor-pointer" 
        onClick={onSelect}> 
            <h3 className='text-xl font-bold'>{name}</h3>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
        </div> 
    );
    
}



