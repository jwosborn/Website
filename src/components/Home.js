import React from "react";

function Home() {
  return (
    <div>
      <div className="hero is-small">
        <span className="hero-body">
          <p className="title is-1 underline">Welcome</p>
        </span>
      </div>
      <div className="section">
        <figure className="image intro-img is-3x2">
          <img
            src={require("../assets/Banner-Pic.jpg")}
            alt="Kelsey and Jeremy hug."
          />
        </figure>
      </div>
      <div className="section">
        <div className="content is-large font-main">
          <p>
            My name is Jeremy Osborn. Welcome to my site! This site serves a
            bio/information center for my life. You'll find information about
            where I grew up, what I like to do, as well as professional
            experience and contact information. Happy Browsing!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
