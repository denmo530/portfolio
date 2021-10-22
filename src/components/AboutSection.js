import React from "react";
import Profile from "../img/ProfilePicture.jpeg";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>
              Dennis <span>Moradkhani</span>
            </h2>
          </div>
          <div className="hide">
            <h2>
              I'm a <span>Student</span>
            </h2>
          </div>
          <div className="hide">
            <h2>
              Soon to be a <span>Developer</span>
            </h2>
          </div>
        </div>
        <p>
          Contact me for any web related work you need done. I'm also open to
          get a coffee and chill.
        </p>
        <button>Contact me.</button>
        <img src={Profile} alt="Young handsome man." />
      </div>
    </div>
  );
};

export default AboutSection;
