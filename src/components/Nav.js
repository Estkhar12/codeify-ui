import React from "react";
import "../css/nav.css";

function Header() {
  return <>
    <div className="header">
      <div className="left_header">
        <img src="https://code-ify.org/assets/imgs/clearlogo.png" alt="" />
        
      </div>
      <div className="right_header">
        <div className="header_info">
          <h5>About</h5>
          <h5>Sellar</h5>
        </div>
        <button className="btn">Get In Touch</button>
      </div>
    </div>
 </>
}

export default Header;