import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//import images
import home2 from "../img/home2.png";

const ServiceSection = () => {
  return (
    <div>
      <div className="service">
        <div className="description">
          <h2>
            High <span>quality</span> service.
          </h2>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={clock} alt="clock icon" />
                <h3>Efficient</h3>
              </div>
              <p>
                Efficient service is key. Not only fast but also reliable
                service.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={teamwork} alt="teamwork icon" />
                <h3>Team player</h3>
              </div>
              <p>
                Communication is important. I believe you will trust as if I was
                part of your team.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={diaphragm} alt="diaphragm icon" />
                <h3>Efficient</h3>
              </div>
              <p>
                Efficient service is key. Not only fast but also reliable
                service.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={money} alt="clock icon" />
                <h3>Affordable</h3>
              </div>
              <p>
                A good looking website should be affordable. Affordable prices
                and outstanding quality.
              </p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={home2} alt="home2" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
