import React from 'react'
import DoneIcon from "@mui/icons-material/Done";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import "../css/banner.css";

function Testomonial() {
  return (
    <div>
      {/* Testomonial */}
      <div className="testomonial">
        <h2>What we do?</h2>
        <h1>WE HELP TO GROW YOUR BUSINESS</h1>
        <div className="testomonial-item">
          <div className="card">
            <img src="images/testomonial.jpg" alt="" />
            <div className="card-button">
              <div className="icon">
                <TrendingUpIcon />
              </div>
              <div className="btn-text">
                <h1>22%+</h1>
                <p>Growth</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>A strategic marketing PARTNER can help grow your business.</h2>
            <div className="list-card">
              <div className="card-icon">
                <DoneIcon />
              </div>
              <div className="card-item">
                <h3>
                  Best Marketing Solutions Do you feel your marketing is going
                  to waste?
                </h3>
              </div>
            </div>
            <div className="list-card">
              <div className="card-icon">
                <DoneIcon />
              </div>
              <div className="card-item">
                <h3>
                  Best Marketing Solutions Do you feel your marketing is going
                  to waste?
                </h3>
              </div>
            </div>
            <div className="list-card">
              <div className="card-icon">
                <DoneIcon />
              </div>
              <div className="card-item">
                <h3>
                  Best Marketing Solutions Do you feel your marketing is going
                  to waste?
                </h3>
              </div>
            </div>
            <div className="banner-btn">
              <button className="btn">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testomonial
