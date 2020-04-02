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
          Marketing. The business school at Union was ranked in the top 5
          Christian business programs at the time I attended. Since ministry was
          my main goal, rather than business, I wanted to get a practical degree
          with a Christian worldview.
        </p>
        <figure className="image is-2x3">
          <img
            className="soccer-pic"
            alt="Jeremy in a soccer uniform."
            src={require("../../assets/Union_soccer.jpg")}
          />
        </figure>
        <p>
          I was fortunate enough to walk on to Union's Soccer Team for my
          Sophomore and Junior years. What a blast that was! I got the chance to
          play with some AMAZING players. Though it was very demanding, I had a
          lot of fun and made a lot of good friends while playing soccer at
          Union.
        </p>
        <p>
          It was also during my sophomore year that I made the decision to join
          Alpha Tau Omega, A brotherhood of men on our campus.{" "}
        </p>
      </div>
    </div>
  );
}
export default College;
