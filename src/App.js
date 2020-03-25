import React from "react";
import Beginnings from "./components/Beginnings.js";
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/beginnings" render={() => <Beginnings />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
