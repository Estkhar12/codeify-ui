import React from 'react'

const Poster = () => {
  return (
    <div>
      {/* Poster */}
      <div className="poster">
        <div className="poster-item">
          <div className="poster-card">
            <h1>
              Transforming online businesses into globel brands poeple love.
            </h1>
          </div>
          <div className="poster-card img">
            <img src="images/poster-img.jpg" alt="" />
          </div>
        </div>
        <div className="poster-item">
          <div className="poster-card img">
            <img src="images/poster-img.jpg" alt="" />
          </div>
          <div className="poster-card">
            <h1>
              Take your Amazon or e-commerce business to a new level of success
              and profitability.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poster
