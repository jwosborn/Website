import React from "react";

function Home() {
  return (
    <div>
      <figure className="image intro-img is-3x2">
        <img
          src={require("../assets/Banner-Pic.jpg")}
          alt="Kelsey and Jeremy hug."
        />
        <div className="banner-text">
          <div className="title-buffer"></div>
          <h1 className="title is-1 font-main">Jeremy Osborn</h1>
          <hr />
          <ul>
            <li className="title is-3">Husband</li>
            <li className="title is-3">Father</li>
            <li className="title is-3">Developer</li>
            <li className="title is-3">Nerd</li>
          </ul>
        </div>
      </figure>
      <div className="section title is-5 font-main">
        <span className="husband">HUSBAND</span>
        <hr />I have been married to my wife Kelsey since June of 2013. She is
        my best friend and I don't deserve her.
      </div>
      <div className="section title is-5 font-main">
        <span className="father">FATHER</span>
        <hr />
        Kelsey and I are expecting our first child in December 2021!
      </div>
      <div className="section title is-5 font-main">
        <span className="developer">DEVELOPER</span>
        <hr />I have fallen in love with software engineering. It is how I spend
        a great deal of my time.
      </div>
    </div>
  );
}
export default Home;
