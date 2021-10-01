import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchFood.css";

const SearchFood = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  const handelSearch = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
  };
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  return (
    <div>
      <h3 className="search-title">Search here your favorite food</h3>
      <input
        onChange={handelSearch}
        className="search-field"
        placeholder="Search Your Food"
        type="text"
      />

      <hr />
      <div className="meal-div">
        {meals?.map((ml) => (
          <div className="meals">
            <img src={ml.strMealThumb} alt="" />
            <h4>Name: {ml.strMeal}</h4>
            <h4>Category: {ml.strCategory}</h4>
            <h4>Origin: {ml.strArea}</h4>
            <Link to={`/meal/${ml.idMeal}`}>
              <button className="mealBtn">Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFood;
