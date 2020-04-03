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
        <div className="section">
          <figure className="image is-2x3">
            <img
              className="soccer-pic"
              alt="Jeremy in a soccer uniform."
              src={require("../../assets/Union_soccer.jpg")}
            />
          </figure>
          <p>
            I was fortunate enough to walk on to Union's Soccer Team for my
            Sophomore and Junior years. What a blast that was! I got the chance
            to play with some AMAZING players. Though it was very demanding, I
            had a lot of fun and made a lot of good friends while playing soccer
            at Union. While I never played varsity, I didn't mind. I was playing
            for love of the sport, not because I had ambitions of playing
            professionally. Some of the varsity players play professionally in
            Spain and Brazil now.
          </p>
        </div>
        <div className="section">
          {" "}
          <figure className="ATO image is-128x128">
            <img
              src={require("../../assets/ATO_crest.png")}
              alt="The Crest of Alpha Tau Omega:Beta Tau, Since 1894"
            />
          </figure>
          <p>
            It was also during my sophomore year that I made the decision to
            join Alpha Tau Omega, A brotherhood of men on our campus. During
            those 3 years, I learned so much about what it meant to be a friend,
            a brother, a man. I will forever owe part of who I am to these
            years. It certainly wasn't all rainbows and butterflies. We were a
            diverse chapter, which lead to a LOT of disagreement. But one thing
            never changed, and never will, the Love and Respect we have for one
            another.
          </p>
        </div>
      </div>
    </div>
  );
}
export default College;
