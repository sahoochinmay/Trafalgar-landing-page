import React,{useState} from "react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  const [checkState,setCheckState]= useState(false)
  const handleClick= () =>{
    setCheckState(!checkState)
  }
  return (
    <div>
      <nav  >
        <input type="checkbox" id="check" checked={checkState} />
        <label for="check">
          <i class="fa fa-bars" id="btn" onClick={handleClick} ></i>
          <i class="fa fa-times" id="cancel" onClick={handleClick} ></i>
        </label>
        <img src={logo} alt="Trafalgar" id="logo" />
        <ul className="navbar-collapse">
          <li>
            <a href="#H" onClick={handleClick} >Home</a>
          </li>
          <li>
            <a href="#F" onClick={handleClick}>Find a doctor</a>
          </li>
          <li>
            <a href="#A" onClick={handleClick}>App</a>
          </li>
          <li>
            <a href="#T" onClick={handleClick}>Testimonials</a>
          </li>
          <li>
            <a href="#U" onClick={handleClick}>About us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
