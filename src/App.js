import React from "react";
import Beginnings from "./components/Beginnings.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <Link to="/">
            <div className="navbar-item">Home</div>
          </Link>
          <Link to="/beginnings">
            <div className="navbar-item">Beginnings</div>
          </Link>{" "}
          <Link to="/about">
            <div className="navbar-item">About</div>
          </Link>{" "}
          <Link to="/dev">
            <div className="navbar-item">My Dev Journey</div>
          </Link>
        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/beginnings">
            <Beginnings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
