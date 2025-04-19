import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

import React from 'react';
import "./Footer.css";
import logo from "../assets/images/Logo.png"



const Footer = () => {
  return (
    <div className='footer'>
        <div className='Hostel'>
        <img src={logo} alt="image"  className='logo'/>
        <p>UniHostel</p>
        </div>
        <div className="social">
      <a href="#"><FaFacebook /></a>  
      <a href="#"><FaInstagramSquare /></a>  
      <a href="#"><FaLinkedin /></a>  
      <a href="#"><FaTwitterSquare /></a>  
        </div>
        <div className="links">
        <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/service">Terms of Service</Link></li>
        <li><Link to="/privacyPolicy">Privacy Policy</Link></li>
        <li><Link to="/help">Help Center</Link></li>
        </ul>
        </div>
        <hr className="line" />
        <div className="&copy;UniHostel.All rights reserved"></div>
    </div>
  )
}

export default Footer
