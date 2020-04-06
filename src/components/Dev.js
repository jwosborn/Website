import React from "react";

function Dev() {
  return (
    <div>
      <div className="title is-1 underline">
        <p>My Dev Journey</p>
      </div>
      <div className="section columns is-centered">
        <img
          src={require("../assets/python_logo.png")}
          alt="python log"
          className="logo column"
        />
        <img
          src={require("../assets/bootstrap_icon.png")}
          alt="bootstrap logo"
          className="logo column"
        />
        <img
          src={require("../assets/React_logo.png")}
          alt="ReactJS logo"
          className="logo column"
        />
        <img
          src={require("../assets/Vue_logo.png")}
          alt="VueJS logo"
          className="logo column"
        />
        <img
          src={require("../assets/bulma-logo.png")}
          alt="Bulma logo"
          className="logo column"
        />
        <img
          src={require("../assets/Gopher.png")}
          alt="gopher logo"
          className="logo column"
        />
        <img
          src={require("../assets/Laravel_icon.png")}
          alt="laravel logo"
          className="logo column"
        />{" "}
        <img
          src={require("../assets/grommet_icon.jpg")}
          alt="Grommet-Icons logo"
          className="logo column"
        />
      </div>
      <div className="content is-medium">
        <p>
          As mentioned in my "Where I came from" section, I intend my primary
          vocation to be a pastor. However, in many churches (even most these
          days) , pastors have secular jobs as well. Once I started to realize
          this, I began to explore some career options that offer flexibility,
          certainty, as well as fulfillment! I searched for about a year and in
          late 2018, upon the advice of a good friend, started to explore
          software development.
        </p>
        <p>
          Like many people, I started with Treehouse to learn the most basic
          principles of HTML, CSS, and JavaScript, the bones on which sit much
          of the internet. Once I had a decent grasp of the basics, I started to
          build my own apps and explore frameworks and their power. At the time
          of writing I have experience in Vue.js, React (obviously),
          Laravel(PHP), and a little Golang and Python.
        </p>
        <p>
          I still have SO much to learn, but isn't that the point? There is no
          "ceiling" for software development. There will ALWAYS be problems to
          solve. and that excites me! Problem solving is one of the best parts
          of Software Engineering. You have the power to automate something that
          makes someone else's (or even your own) life easier or their work more
          efficient. What an opportunity that is!{" "}
        </p>
      </div>
    </div>
  );
}
export default Dev;
