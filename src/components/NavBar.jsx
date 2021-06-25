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
            <a href="#H">Home</a>
          </li>
          <li>
            <a href="#F">Find a doctor</a>
          </li>
          <li>
            <a href="#A">App</a>
          </li>
          <li>
            <a href="#T">Testimonials</a>
          </li>
          <li>
            <a href="#U">About us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
