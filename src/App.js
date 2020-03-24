import React from "react";
import Beginnings from "./components/beginnings.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="router-wrapper">
        <Router>
          <div className="nav-wrapper">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/beginnings">Beginnings</Link>
                </li>
              </ul>
            </nav>
          </div>

          <Switch>
            <Route path="/"></Route>
            <Route path="/beginnings">
              <Beginnings />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
