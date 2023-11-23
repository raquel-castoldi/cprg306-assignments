"use client"
import React, { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient){

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const result = await response.json();
    return result.meals;
}

export default function MealIdeas({ingredient}){
    const [mealIdea, setMealIdea] = useState([]);

    async function loadMeals() {
        try{
            if (ingredient === "") {
                setMealIdea([]);
            }
            const meals = await fetchMealIdeas(ingredient);
            if (meals !== null) {
                setMealIdea(meals);
            } else {
                setMealIdea([]);
            }
        } catch (error) {
            console.log(error);
        }
      }

   useEffect(() => { loadMeals();}, [ingredient]);

    return (
        <main className="flex min-h-screen  bg-pink-50 flex-col items-center pt-24">
            <h1 className="text-2xl font-bold m-2">Meal Ideas with {ingredient}</h1>
            <ul>
                {mealIdea && mealIdea.map((meal) => (<li key={meal.idMeal}>{meal.strMeal}</li>))}
            </ul>
        </main>
        );
}




