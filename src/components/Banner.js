import React from "react";
import "../css/banner.css";

export default function Banner() {
  return (
    <container>
      <div className="banner">
        <div className="banner-item">
          <h1 className="heading">WE HELP GROW YOUR BUSINESS</h1>
          <p className="heading-text">
            Every business is different, and we truly understand that. We know
            evey marketing tactic may not align with reaching your business
            goals. That's why we help define your needs vs wants fist, and craft
            a strategic marketing plan second.
          </p>
          <div className="banner-btn">
            <button className="btn">Get In Touch</button>
          </div>
          <div className="banner-item1">
            <div className="item">
              <h1>8.5K</h1>
              <p>User using this all over the word.</p>
            </div>
            <div className="item">
              <h1>4.8</h1>
              <p>Rating our user experience</p>
            </div>
            <div className="item">
              <h1>32K</h1>
              <p>Happy clients</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="images/img1.jpg" alt="" />
        </div>
      </div>
    </container>
  );
}
