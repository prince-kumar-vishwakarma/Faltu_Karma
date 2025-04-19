import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaBuilding, FaCalendarAlt, FaUserFriends, FaBullhorn, FaUser, FaCog } from "react-icons/fa";
import { BiSolidPieChartAlt2 } from "react-icons/bi";
import { FaBed } from "react-icons/fa6";
import { BsCreditCardFill } from "react-icons/bs";
import { FaTicketSimple } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="uh-sidebar">
      <div className="uh-sidebar-logo">
        <div className="uh-sidebar-logo-icon">
          <FaBuilding className='uh-icon' />
        </div>
        <h1 className="uh-sidebar-title">UniHostel</h1>
      </div>

      <ul className="uh-sidebar-nav">
        <li className="uh-sidebar-section"><h1>Main</h1></li>
        <li className="uh-sidebar-item">
          <Link to="/Dashboard">
            <BiSolidPieChartAlt2 /><h2>Dashboard</h2>
          </Link>
        </li>
        <li className="uh-sidebar-item">
          <Link to="/Rooms">
            <FaBed /><h1>My Room</h1>
          </Link>
        </li>
        <li className="uh-sidebar-item">
          <Link to="/Payments">
            <BsCreditCardFill /><h1>Payments</h1>
          </Link>
        </li>

        <li className="uh-sidebar-section"><h1>Services</h1></li>
        <li className="uh-sidebar-item">
          <Link to="/Complaint">
            <FaTicketSimple /><h1>Complaints</h1>
          </Link>
        </li>
        <li className="uh-sidebar-item">
          <Link to="/Leave">
            <FaCalendarAlt /><h1>Leave</h1>
          </Link>
        </li>
        <li className="uh-sidebar-item uh-sidebar-item-active">
          <Link to="/Visitors">
            <FaUserFriends /><h1>Visitors</h1>
          </Link>
        </li>

        <li className="uh-sidebar-section"><h1>Info</h1></li>
        <li className="uh-sidebar-item">
          <Link to="/Announcements">
            <FaBullhorn /><h1>Announcements</h1>
          </Link>
        </li>
        <li className="uh-sidebar-item">
          <Link to="/Setting">
            <FaCog /><h1>Settings</h1>
          </Link>
        </li>
      </ul>

      <div className="uh-sidebar-user">
        <div className="uh-sidebar-user-avatar">
          <FaUser />
        </div>
        <div className="uh-sidebar-user-info">
          <h4>Sarah Johnson</h4>
          <p>ST24891</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
