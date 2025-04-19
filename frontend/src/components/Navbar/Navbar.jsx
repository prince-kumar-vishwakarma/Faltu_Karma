import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";
import Button from "../buttons/button";
import Logo from "../assets/images/Logo.png";

function Navbar() {

  return (
    <nav className="navbar">
      <div className="hostel">
        <img src={Logo} alt="image" className="logo" />
        <p>UniHostel</p>
      </div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="btn">
        <Link to="/login">
          <Button id="login" name="Login" />
        </Link>
        <Link to="/signup">
          <Button id="signup" name="SignUp" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
