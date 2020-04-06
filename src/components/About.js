import React from "react";

function About() {
  return (
    <div>
      <div className="title is-1 underline">
        <p>About Me</p>
      </div>
      <div className="logos columns is-centered">
        <div className="column">
          <figure className="image">
            <img
              src={require("../assets/Arsenal_logo.jpeg")}
              alt="arsenal football club logo"
              className="logo bounce-top"
            />
          </figure>{" "}
          <figure className="image">
            <img
              src={require("../assets/Coffee.jpeg")}
              alt="a cup of coffee"
              className="logo bounce-middle"
            />
          </figure>{" "}
          <figure className="image">
            <img
              src={require("../assets/Osu_logo.png")}
              alt="the ohio state university logo"
              className="logo bounce-middle"
              style={{ animationDelay: "2s" }}
            />
          </figure>
          <figure className="image">
            <img
              src={require("../assets/Office_logo.jpg")}
              alt="the office logo"
              className="logo bounce-bottom"
            />
          </figure>
        </div>
        <div className="column">
          <figure className="image">
            <img
              src={require("../assets/F1_logo.png")}
              alt="formula 1 logo"
              className="logo logo-right bounce-top-reverse"
            />
          </figure>{" "}
          <figure className="image">
            <img
              src={require("../assets/Harry_potter_logo.png")}
              alt="harry potter logo"
              className="logo logo-right bounce-middle-reverse"
            />
          </figure>{" "}
          <figure className="image">
            <img
              src={require("../assets/Overwatch_logo.jpg")}
              alt="overwatch logo"
              className="logo logo-right bounce-middle-reverse"
              style={{ animationDelay: "2s" }}
            />
          </figure>
          <figure className="image">
            <img
              src={require("../assets/Lotr_logo.png")}
              alt="lord of the rings logo"
              className="logo logo-right bounce-bottom-reverse"
            />
          </figure>
        </div>
      </div>
      <div className="content is-large">
        <p>
          Above you'll find some logos and pictures of some of my favorite
          things! I have been a huge Arsenal fan since middle school. I was born
          an Ohio State fan. I LOVE both Harry Potter and Lord of the Rings (as
          any good nerd does). I also thorougly enjoy watching Formula 1,
          playing Overwatch and a good cup of coffee. Enjoy watching them bounce
          around!
        </p>
      </div>
    </div>
  );
}
export default About;
