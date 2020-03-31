import React, { Component } from "react";
import Childhood from "../components/Beginnings/Childhood";
import HighSchool from "../components/Beginnings/HighSchool.js";

class Beginnings extends Component {
  state = {
    i: 0
  };

  viewsIncrement = () => {
    this.setState({
      i: this.state.i + 1
    });
  };
  viewsDecrement = () => {
    this.setState({
      i: this.state.i - 1
    });
  };
  render() {
    return (
      <div>
        <div className="hero">
          <span className="hero-body">
            <p className="title underline">Beginnings</p>
          </span>
        </div>
        {this.state.i === 0 ? <Childhood /> : ""}
        {this.state.i === 1 ? <HighSchool /> : ""}
        <div className="buttons ">
          {this.state.i >= 1 ? (
            <div className="button  next-view" onClick={this.viewsDecrement}>
              &lt;-
            </div>
          ) : (
            ""
          )}{" "}
          {this.state.i <= 3 ? (
            <div className="button prev-view" onClick={this.viewsIncrement}>
              -&gt;
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default Beginnings;
