import React from "react";
import { Link } from "react-router-dom";
import Button from "../../buttons/button";
import "./Body1.css";
import "../body2/body2";

const Body1 = () => {
  return (
    <div className="body1">
      <h1 className="heading">STREAMLINED COMFORT</h1>
      <p>
        UniHostel simplifies your university accommodation with intuitive
        management, instant communication, and a vibrant community hub.
      </p>
      {/* <div className='btn'>
        <Link to="/body2"><Button name="Discover UniHostel"/></Link>
        <Link to="/start"><Button name="Get Started Today"/></Link>
      </div> */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Body1;
