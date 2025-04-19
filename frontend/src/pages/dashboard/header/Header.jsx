import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="welcome">
          <h2>UniHostel</h2>
          <h4>Dashboard</h4>
        </div>

        <div className="header-actions">
          <div className="greeting">
            <span>Hello, Sarah!</span>
          </div>
          <div className="action-icon notification-icon">
            <FontAwesomeIcon icon={faBell} />
            <div className="notification-badge">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
