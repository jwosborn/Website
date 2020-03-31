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
  viewTitle() {
    if (this.state.i === 0) {
      return "Childhood";
    } else if (this.state.i === 1) {
      return "HighSchool";
    } else if (this.state.i === 2) {
      return "College";
    } else if (this.state.i === 3) {
      return "Grad School";
    }
  }
  render() {
    return (
      <div>
        <span>
          <p className="title is-1 underline">{this.viewTitle()}</p>
        </span>
        <div className="slide-wrapper">
          {this.state.i === 0 ? <Childhood /> : null}
          {this.state.i === 1 ? <HighSchool /> : null}
        </div>
        <div className="buttons section columns is-centered">
          {this.state.i >= 1 ? (
            <div
              className="button is-primary column is-1 next-view"
              onClick={this.viewsDecrement}>
              &lt;-
            </div>
          ) : null}
          {this.state.i <= 2 ? (
            <div
              className="button is-primary column is-1 prev-view"
              onClick={this.viewsIncrement}>
              -&gt;
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Beginnings;
