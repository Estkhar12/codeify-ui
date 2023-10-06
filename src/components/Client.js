import React from 'react'
import "../css/banner.css";

const Client = () => {
  return (
    <div>
      <div className="clients">
        <h1 className="heading">Clients Stories</h1>
        <div className="client-details">
          <div className="client">
            <h1 className="heading2">Amazing!</h1>
            <p className="heading2">
              Company name gave us the peace of mind we needed to focus on our
              bussiness. They took the time to understand our unique needs and
              created a solution that protected our sensetive data and ensured
              compliance with industry regulations.
            </p>
            <div className="client-profile">
              <p>
                Estkhar Ansari <br />
                Software Developer{" "}
              </p>
              <img src="images/img1.jpg" alt="image" />
            </div>
          </div>
          <div className="vl"></div>
          <div className="client">
            <h1 className="heading2">Best Services!</h1>
            <p className="heading2">
              Company name gave us the peace of mind we needed to focus on our
              bussiness. They took the time to understand our unique needs and
              created a solution that protected our sensetive data and ensured
              compliance with industry regulations.
            </p>
            <div className="client-profile">
              <p>
                Estkhar Ansari <br />
                Software Developer{" "}
              </p>
              <img src="images/img1.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client
