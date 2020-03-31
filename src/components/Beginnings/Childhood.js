import React from "react";

function Childhood() {
  return (
    <div className="section columns is-centered is-gapless">
      <div className="column is-half">
        <figure className="image is-3x4">
          <img
            className="watertower"
            src={require("../../assets/Olive_Branch_MS_003_Watertower.jpg")}
            alt="Olive Branch Watertower"
          />
        </figure>
      </div>
      <div className="column is-half">
        <div className="content is-large font-main">
          <p>
            I grew up in a small-ish town in MS (Olive Branch). Truthfully, it
            is more a suburb of Memphis, TN than a part of the rest of MS.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Childhood;
