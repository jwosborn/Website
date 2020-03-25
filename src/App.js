import React from "react";
import Beginnings from "./components/Beginnings.js";
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import NotFound from "./components/NotFound.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <div className="switch-wrapper">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/beginnings" render={() => <Beginnings />} />
            <Route path="*" render={() => <NotFound />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
