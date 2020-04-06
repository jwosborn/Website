import React, { Component } from "react";
import Childhood from "./Beginnings/Childhood";
import HighSchool from "./Beginnings/HighSchool";
import College from "./Beginnings/College";
import GradSchol from "./Beginnings/GradSchool";

class Beginnings extends Component {
  state = {
    i: 0,
  };

  viewsIncrement = () => {
    this.setState({
      i: this.state.i + 1,
    });
  };
  viewsDecrement = () => {
    this.setState({
      i: this.state.i - 1,
    });
  };
  viewTitle() {
    if (this.state.i === 0) {
      return "Childhood";
    } else if (this.state.i === 1) {
      return "High School";
    } else if (this.state.i === 2) {
      return "College";
    } else if (this.state.i === 3) {
      return "Grad School";
    }
  }
  prevView() {
    if (this.state.i === 1) {
      return "Childhood";
    } else if (this.state.i === 2) {
      return "High School";
    } else if (this.state.i === 3) {
      return "College";
    }
  }
  nextView() {
    if (this.state.i === 0) {
      return "High School";
    } else if (this.state.i === 1) {
      return "College";
    } else if (this.state.i === 2) {
      return "Grad School";
    }
  }
  render() {
    return (
      <div>
        <span>
          <p className="title banner is-1 underline">{this.viewTitle()}</p>
        </span>{" "}
        <div className="buttons is-centered columns">
          {this.state.i >= 1 ? (
            <div
              className="button is-primary is-2 column prev-view"
              onClick={this.viewsDecrement}>
              &lt;- {this.prevView()}
            </div>
          ) : null}
          <div
            className={
              this.state.i === 0 || this.state.i === 3
                ? "column is-9"
                : "column is-7"
            }></div>
          {this.state.i <= 2 ? (
            <div
              className="button is-primary column  is-2 next-view"
              onClick={this.viewsIncrement}>
              {this.nextView()} -&gt;
            </div>
          ) : null}
        </div>
        <div className="slide-wrapper">
          {this.state.i === 0 ? <Childhood /> : null}
          {this.state.i === 1 ? <HighSchool /> : null}
          {this.state.i === 2 ? <College /> : null}
          {this.state.i === 3 ? <GradSchol /> : null}
        </div>
      </div>
    );
  }
}
export default Beginnings;
