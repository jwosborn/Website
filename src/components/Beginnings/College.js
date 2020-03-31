import React from "react";

function College() {
  return (
    <div className="section">
      <div className="content is-large font-main">
        <figure className="image is-2x3">
          <img
            className="crest "
            src={require("../../assets/Union_Crest.jpg")}
            alt="Union University Crest"
          />
        </figure>
        <p>
          For college, I attended Union University in Jackson, TN. While at
          Union I studied Business Administration with a concentration on
          Marketing.
        </p>
      </div>
    </div>
  );
}
export default College;
