import React from "react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check">
          <i class="fa fa-bars" id="btn"></i>
          <i class="fa fa-times" id="cancel"></i>
        </label>
        <img src={logo} alt="Trafalgar" id="logo" />
        <ul class="navbar-collapse">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Find a doctor</a>
          </li>
          <li>
            <a href="#">App</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
