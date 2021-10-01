import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <NavLink className="menu" to="/home">
            Home
          </NavLink>
          <NavLink className="menu" to="/meals">
            Meals
          </NavLink>
          <NavLink className="menu" to="/about">
            About
          </NavLink>
          <NavLink className="menu search" to="/search">
            Search <i class="fas fa-search icon"></i>
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
