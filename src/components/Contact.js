import React from "react";

function Contact() {
  return (
    <div>
      <div className="title is-1 underline">Contact Me</div>
      <div className="content is-large">
        <p>Contact me in any of the following ways:</p>
        <div className="columns">
          <div className="column">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.github.com/jwosborn">
              <img
                className="social-logo"
                src={require("../assets/GitHub_logo.png")}
                alt="github logo"
              />
            </a>
          </div>
          <div className="column">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.twitter.com/jwosborn">
              <img
                className="social-logo"
                src={require("../assets/twitter_logo.jpg")}
                alt="twitter logo"
              />
            </a>
          </div>
          <div className="column">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:osbornjeremyw@yahoo.com">
              <img
                className="social-logo mail"
                src={require("../assets/mail_icon.png")}
                alt="an envelope"
              />
            </a>
          </div>
          <div className="column">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jeremy-osborn-dev">
              <img
                className="social-logo"
                src={require("../assets/linkedin_logo.png")}
                alt="linkedin logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
