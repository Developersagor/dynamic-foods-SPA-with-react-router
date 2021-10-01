import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  // console.log(meals);
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=f";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div>
      <h4>This is Meals page</h4>
      <hr className="hr" />
      <div className="meals-container">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
