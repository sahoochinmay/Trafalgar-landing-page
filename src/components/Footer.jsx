import React from "react";
import logo from "../assets/footerlogo.svg";
import dot2 from "../assets/testimonialDot2.svg";
import dot1 from '../assets/testimonialDot1.svg'

const Footer = () => {
  return (
    <section>
      <footer className="footer">
      <img src={dot2} alt="Footer Dot" id="footerDot" />
      <img src={dot1} alt="Footer Dot1" id="footerDot1" />
        <div class="footerText" id="leftFooter">
          <img src={logo} alt="logo" />
          <p>
            Trafalgar provides progressive, and affordable <br/> healthcare,
            accessible on mobile and online <br /> for everyone
          </p>
          <small>©Trafalgar PTY LTD 2020. All rights reserved</small>
        </div>
        <div class="footerText">
          <ul>
            <h3>Company</h3>
            <li>About </li>
            <li>Testimonials</li>
            <li>Find a doctor</li>
            <li>Apps</li>
          </ul>
        </div>
        <div class="footerText">
          <ul>
            <h3>Region</h3>
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>Hongkong</li>
            <li>Canada</li>
          </ul>
        </div>
        <div class="footerText">
          <ul>
            <h3>Help</h3>
            <li>Help Center</li>
            <li>Contact Support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
