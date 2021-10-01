import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Meals from "./components/Meals/Meals";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import MealDetails from "./components/MealDetails/MealDetails";
import SearchFood from "./components/SearchFood/SearchFood";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/meals">
              <Meals></Meals>
            </Route>
            <Route exact path="/meal/:idMeal">
              <MealDetails></MealDetails>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/search">
              <SearchFood></SearchFood>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
