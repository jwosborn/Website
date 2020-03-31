import React from "react";

function Childhood() {
  return (
    <div className="section">
      <div className="content is-large font-main">
        <figure className="image is-3x4">
          <img
            className="watertower"
            src={require("../../assets/Olive_Branch_MS_003_Watertower.jpg")}
            alt="Olive Branch Watertower"
            align="top"
          />
        </figure>
        <p>
          I grew up in a small-ish town in MS (Olive Branch). Truthfully, it is
          more a suburb of Memphis, TN than a part of the rest of MS. At one
          point in time, we were the fastest growing city in the US. I certainly
          had a fortunate upbringing. I have one sister. She is 6 1/2 years
          younger than I am. My parents stayed married and provided well for my
          sister and I. My dad worked for Mercedes-Benz his entire life and my
          mom floated between staying at home with us and working Customer
          Service for various businesses. While we were certainly not rich, we
          had little financial issues.
        </p>
      </div>
    </div>
  );
}
export default Childhood;
