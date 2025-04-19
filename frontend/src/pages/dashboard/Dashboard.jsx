import React, { useState } from "react";
import "./Dashboard.css";
import Header from "../dashboard/header/Header";
import Overview from "../dashboard/overview/Overview";
import RoomDetails from "./room/RoomDetails";
import Payments from "../dashboard/payments/Payments";
import Services from "../dashboard/services/Services";
import Profile from "../dashboard/Profile/Profile";
import Complaints from "../dashboard/complaints/Complaints";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;
      case "Room Details":
        return <RoomDetails />;
      case "Payments":
        return <Payments />;
      case "Services":
        return <Services />;
      case "Complaints":
        return <Complaints />;
      case "Profile":
        return <Profile />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <Header />

        <div className="page-tabs">
          {[
            "Overview",
            "Room Details",
            "Payments",
            "Services",
            "Complaints",
            "Profile",
          ].map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}>
              {tab}
            </div>
          ))}
        </div>

        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;
