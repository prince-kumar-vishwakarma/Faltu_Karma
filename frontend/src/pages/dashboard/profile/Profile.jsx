import React from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faShieldAlt,
  faIdCard,
  faHistory,
  faSignOutAlt,
  faEdit,
  faKey,
  faMapMarkerAlt,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
        <p>Manage your account settings and personal information</p>
      </div>

      <div className="profile-main">
        <div className="profile-sidebar">
          <div className="profile-avatar-container">
            <div className="profile-avatar">
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
            <div className="profile-name">
              <h3>Sarah Johnson</h3>
              <p>Student</p>
            </div>
            <div className="profile-actions">
              <button className="action-btn">
                <FontAwesomeIcon icon={faEdit} /> Edit Profile
              </button>
            </div>
          </div>

          <div className="profile-stats-grid">
            <div className="stat-card">
              <div className="stat-title">Student ID</div>
              <div className="stat-value">ST24891</div>
              <div className="stat-trend trend-neutral">
                <FontAwesomeIcon icon={faIdCard} className="trend-icon" />
                Computer Science
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">Room</div>
              <div className="stat-value">A-305</div>
              <div className="stat-trend trend-neutral">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="trend-icon" />
                Apollo Block
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">Stay Duration</div>
              <div className="stat-value">236 Days</div>
              <div className="stat-trend trend-neutral">
                <FontAwesomeIcon icon={faHistory} className="trend-icon" />
                Since check-in
              </div>
            </div>
          </div>
        </div>

        <div className="profile-details-grid">
          <div className="card">
            <div className="card-header">
              <h3>Personal Information</h3>
              <div className="card-icon primary-gradient">
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
            </div>
            <div className="profile-details">
              <div className="detail-row">
                <span className="label">Full Name</span>
                <span className="value">Sarah Johnson</span>
              </div>
              <div className="detail-row">
                <span className="label">Email</span>
                <span className="value">sarah.j@university.edu</span>
              </div>
              <div className="detail-row">
                <span className="label">Phone</span>
                <span className="value">+91 98765 43210</span>
              </div>
              <div className="detail-row">
                <span className="label">Date of Birth</span>
                <span className="value">15 March 2003</span>
              </div>
              <div className="detail-row">
                <span className="label">Home Address</span>
                <span className="value">123 Main St, Bangalore</span>
              </div>
              <div className="detail-row">
                <span className="label">Emergency Contact</span>
                <span className="value">+91 98765 12345 (Parent)</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Academic Information</h3>
              <div className="card-icon success-gradient">
                <FontAwesomeIcon icon={faUniversity} />
              </div>
            </div>
            <div className="profile-details">
              <div className="detail-row">
                <span className="label">Department</span>
                <span className="value">Computer Science</span>
              </div>
              <div className="detail-row">
                <span className="label">Program</span>
                <span className="value">Bachelor of Technology</span>
              </div>
              <div className="detail-row">
                <span className="label">Year</span>
                <span className="value">Third Year</span>
              </div>
              <div className="detail-row">
                <span className="label">Roll Number</span>
                <span className="value">CS2021036</span>
              </div>
              <div className="detail-row">
                <span className="label">Academic Advisor</span>
                <span className="value">Dr. Ravi Kumar</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Account Settings</h3>
              <div className="card-icon warning-gradient">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
            </div>
            <div className="settings-section">
              <h4>Privacy Settings</h4>
              <div className="settings-options">
                <div className="setting-item">
                  <div className="setting-info">
                    <h5>Profile Visibility</h5>
                    <p>Allow others to view your profile details</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <h5>Email Visibility</h5>
                    <p>Show email to other hostel residents</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <h4>Notification Preferences</h4>
              <div className="settings-options">
                <div className="setting-item">
                  <div className="setting-info">
                    <h5>Email Notifications</h5>
                    <p>Receive updates via email</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="setting-item">
                  <div className="setting-info">
                    <h5>SMS Alerts</h5>
                    <p>Get important alerts on your phone</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" checked />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="security-actions">
                <button className="action-btn">
                  <FontAwesomeIcon icon={faKey} /> Change Password
                </button>
                <button className="action-btn danger">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
