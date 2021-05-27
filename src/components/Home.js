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
            <li className="title is-4">
              <a href="#husband">
                <i className="fas fa-ring"></i> Husband
              </a>
            </li>
            <li className="title is-4">
              <a href="#father">
                <i className="fas fa-baby"></i> Father
              </a>
            </li>
            <li className="title is-4">
              <a href="#developer">
                <i className="fas fa-laptop-code"></i> Developer
              </a>
            </li>
            <li className="title is-4">
              <a href="#nerd">
                <i className="fas fa-glasses"></i> Nerd
              </a>
            </li>
          </ul>
        </div>
      </figure>
      <div id="husband" className="title husband is-5">
        <div>
          <i className="fas fa-ring"></i> HUSBAND
        </div>
        <hr />
        <figure className="image is-3by2 wedding relative">
          <img
            src={require("../assets/wedding_looking_up.jpg")}
            alt="Jeremy and Kelsey on their wedding day"
          />
          <p className="husband-photo-caption">
            I have been married to my wife Kelsey since June of 2013. She is my
            best friend and I don't deserve her.
          </p>
        </figure>
      </div>
      <div id="father" className="section title is-5 font-main">
        <span className="father">
          <i className="fas fa-baby fa-lg"></i> FATHER
        </span>
        <hr />
        Kelsey and I are expecting our first child in December 2021!
      </div>
      <div id="developer" className="section title is-5 font-main">
        <span className="developer">
          <i className="fas fa-laptop-code"></i> DEVELOPER
        </span>
        <hr />I have fallen in love with software engineering. It is how I spend
        a great deal of my time.
      </div>
      <div id="nerd" className="section title is-5 font-main">
        <span className="nerd">
          <i className="fas fa-glasses"></i> NERD
        </span>
        <hr />I am a nerd in the sense that when I am interested in something, I
        am <strong>INTERESTED</strong>. My interests range from theology to sci
        fi to sports of all kinds to languages.
      </div>
    </div>
  );
}
export default Home;
