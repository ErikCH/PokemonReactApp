import "./App.css";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import React, { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    // fetch("./data/test.json")
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);

        console.log(data);
      });
  }, []);
  return (
    <Router>
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Link to="/">
            <header className="text-4xl text-yellow-700">Pokemon Picker</header>
          </Link>
        </div>
        <Switch>
          <Route path="/about/:slug">
            <About>hi</About>
          </Route>
          <Route path="/">
            <Home pokemon={pokemon} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
