import "../css/footer.css";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Footer = () => {
  return (
    <div>
    <div className="footer-wrapper">
      <div className="footer-icons">
        <h1>Codeify</h1>
        <FacebookIcon />
        <LinkedInIcon />
        <Instagram />
        <TwitterIcon />
      </div>
      <div className="footer-items">
        <h2>Quick Links</h2>
        <p>Home</p>
        <p>About</p>
        <p>Contact Us</p>
      </div>
      <div className="footer-info">
        <div className="basic-info">
          <CallOutlinedIcon />
          <p>+916202760547</p>
        </div>
        <div className="basic-info">
          <MailOutlineOutlinedIcon />
          <p>Estkharansari@gmail.com</p>
        </div>
        <div className="basic-info">
          <LocationOnOutlinedIcon />
          <p>Gurugram Sector 21</p>
        </div>
      </div>
    </div>
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Codeify
        </div>
      </div>
</div>
  );
};

export default Footer;
