import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./MealDetails.css";

const MealDetails = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState();
  //   console.log(meal);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [idMeal]);
  const history = useHistory();
  const handelReturnBtn = () => {
    history.push("/meals");
  };
  return (
    <div>
      <h2>This is meal details page</h2>
      <div className="detailDiv">
        {meal?.map((ml) => (
          <>
            <img src={ml.strMealThumb} alt="" />
            <h3>Name: {ml.strMeal}</h3>
            <p>Details: {ml.strInstructions}</p>
            <a
              className="ytBtn"
              href={ml.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <button onClick={handelReturnBtn} className="ytBtn">
              See All Meals
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default MealDetails;
