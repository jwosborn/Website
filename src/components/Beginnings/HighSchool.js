import React from "react";

function HighSchool() {
  return (
    <div className="section columns is-gapless">
      <figure className="image column is-half senior-pic is-2x3">
        <img
          src={require("../../assets/Senior_pic.jpg")}
          alt="Jeremy holding a soccerball in his letterman jacket."
        />
      </figure>
      <div className="content is-large column is-half font-main">
        <p>
          I went to Olive Branch High School. Class of 2008. High School was a
          blast for me. I had a great group of friends and went to a great
          church. It was while I was in high school that I fell in love with the
          game of soccer. I played every second I wasn't asleep or eating. My
          senior year I was part of the All-Conference team and my team went to
          the Quarter-finals of the State Championship.
        </p>
      </div>
    </div>
  );
}
export default HighSchool;
