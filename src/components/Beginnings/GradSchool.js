import React from "react";

function GradSchool() {
  return (
    <div>
      <div className="content">
        <figure className="image is-3x2 bell-tower">
          <img
            src={require("../../assets/UU_tower.jpg")}
            alt="the Bell Tower and Lawn at Union University during Graduation"
          />
        </figure>
      </div>
      <div className="columns is-centered section">
        <div className="column is-4">
          <figure className="image grad">
            <img
              src={require("../../assets/Union_grad.jpg")}
              alt="Jeremy in grad attire"
            />
          </figure>
        </div>
        <div className="content column is-large font-main">
          <img
            src={require("../../assets/sbts_logo.jpeg")}
            alt="SBTS logo"
            className="image sbts"
          />
          <p>
            After Graduation from Union University, a few huge things happened
            for me. First off, I proposed to my college girlfriend, Kelsey, and
            we got married in June of 2013. Then, 2 weeks after we got married,
            we moved to Louisville, KY for me to attend The Southern Baptist
            Theological Seminary. When we moved, we had no jobs, no friends, no
            nothing. Only an apartment and some savings from our college jobs.
            We STILL don't know how we survived the first year. But alas, we
            did! Below are some photos from our wedding as well as from early in
            our time in Louisville:
          </p>
          <div className="section columns photos">
            <figure className="image column margin-fix">
              <img
                src={require("../../assets/wedding_looking_up.jpg")}
                alt="Kelsey and Jeremy on their wedding day"
                className="wedding"
              />{" "}
            </figure>
            <figure className="image column margin-fix">
              <img
                src={require("../../assets/collage.jpg")}
                alt="a collage of pictures of Jeremy and Kelsey"
                className="collage"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GradSchool;
