import React from "react";

function HighSchool() {
  return (
    <div className="section columns is-centered is-gapless">
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
          game of soccer. I played every spare second. My senior year I was part
          of the All-Conference team and my team went to the Quarter-finals of
          the State Championship.
        </p>
        <p>
          It was also late in my high school days that I began to explore my
          faith. It was during this time that I discovered a desire in myself to
          proclaim the Word of God to people for the rest of my life. It was my
          senior year that I decided to pursue ministry as a primary vocation.
        </p>
      </div>
    </div>
  );
}
export default HighSchool;
