import React from "react";
import Beginnings from "./components/Beginnings";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
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
            <Route path="/about" render={() => <About />} />
            <Route path="*" render={() => <NotFound />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
