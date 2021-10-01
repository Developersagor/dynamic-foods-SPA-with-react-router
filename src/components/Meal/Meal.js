import React from "react";
import { Link /*useHistory*/ } from "react-router-dom";
import "./Meal.css";

const Meal = (props) => {
  //   console.log(props);
  const { idMeal, strMeal, strMealThumb, strCategory, strArea } = props.meal;
  const id = `/meal/${idMeal}`;
  // const history = useHistory();
  // const handelclick = () => {
  //   history.push(id);
  // };
  return (
    <div className="meal">
      <img className="mealImg" src={strMealThumb} alt="" />
      <h4>Name: {strMeal}</h4>
      <h4>Origin: {strArea}</h4>
      <h4>Category: {strCategory}</h4>
      <Link to={id}>
        <button className="mealBtn">See Details</button>
      </Link>
      <br />
      <br />
      {/* <button onClick={handelclick} className="mealBtn">
        See Details
      </button> */}
    </div>
  );
};

export default Meal;
