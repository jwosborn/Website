import React from "react";

function Beginnings() {
  return (
    <div>
      <div className="hero">
        <span className="hero-body">
          <p className="title underline">Beginnings</p>
        </span>
      </div>
      <div className="section">
        <div className="columns">
          <div className="column is-4">
            <figure className="image  is-3x4">
              <img
                className="watertower"
                src={require("../assets/Olive_Branch_MS_003_Watertower.jpg")}
                alt="Olive Branch Watertower"
              />
            </figure>
          </div>
          <div className="column">
            <div className="content is-large font-main">
              <p>
                I grew up in a small-ish town in MS(Olive Branch). Truthfully we
                are more a suburb of Memphis,TN than we are a part of MS.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">FOOTER ELEMENT HERE</div>
    </div>
  );
}
export default Beginnings;
