import React from "react";
import Childhood from "../components/Beginnings/Childhood";
import HighSchool from "../components/Beginnings/HighSchool.js";

function Beginnings() {
  let displayTile = "childhood";
  function toggleDisplay() {
    // Timeout here
  }
  return (
    <div>
      <div className="hero">
        <span className="hero-body">
          <p className="title underline">Beginnings</p>
        </span>
      </div>
      {displayTile === "childhood" ? <Childhood /> : <HighSchool />}
    </div>
  );
}
export default Beginnings;
