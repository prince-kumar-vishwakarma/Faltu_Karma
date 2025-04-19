import React from "react";
import "./RoomDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCheckCircle,
  faBolt,
  faIdCard,
  faUserFriends,
  faUser,
  faClipboardList,
  faWifi,
  faWind,
  faBath,
  faLightbulb,
  faBed,
  faDesktop,
  faTools,
  faUtensils,
  faExclamationTriangle,
  faVolumeUp,
  faSmokingBan,
  faClipboardCheck,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const RoomDetails = () => {
  return (
    <div className="room-details-container">
      <div className="room-header">
        <h2>Room Information</h2>
        <p>View and manage your accommodation details</p>
      </div>

      <div className="room-stats-grid">
        <div className="stat-card">
          <div className="stat-title">Days Occupied</div>
          <div className="stat-value">46</div>
          <div className="stat-trend trend-neutral">
            <FontAwesomeIcon icon={faHome} className="trend-icon" />
            Since check-in
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Room Condition</div>
          <div className="stat-value">Good</div>
          <div className="stat-trend trend-up">
            <FontAwesomeIcon icon={faCheckCircle} className="trend-icon" />
            Last inspection passed
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Utilities</div>
          <div className="stat-value">Included</div>
          <div className="stat-trend trend-neutral">
            <FontAwesomeIcon icon={faBolt} className="trend-icon" />
            No extra charges
          </div>
        </div>
      </div>

      <div className="room-grid">
        {/* Room Profile Card */}
        <div className="room-card">
          <div className="card-header">
            <h3>Room Profile</h3>
            <div className="card-icon primary-gradient">
              <FontAwesomeIcon icon={faIdCard} />
            </div>
          </div>
          <div className="room-details-content">
            <div className="detail-row">
              <span className="label">Room Number</span>
              <span className="value">A-305</span>
            </div>
            <div className="detail-row">
              <span className="label">Block</span>
              <span className="value">Apollo</span>
            </div>
            <div className="detail-row">
              <span className="label">Floor</span>
              <span className="value">3rd Floor</span>
            </div>
            <div className="detail-row">
              <span className="label">Room Type</span>
              <span className="value">Twin Sharing</span>
            </div>
            <div className="detail-row">
              <span className="label">Size</span>
              <span className="value">240 sq ft</span>
            </div>
          </div>
        </div>

        {/* Roommate Information */}
        <div className="room-card">
          <div className="card-header">
            <h3>Roommate</h3>
            <div className="card-icon success-gradient">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
          </div>
          <div className="room-details-content">
            <div className="roommate-profile">
              <div className="roommate-avatar">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="roommate-info">
                <h4>Jessica Miller</h4>
                <p>Computer Science, Year 2</p>
              </div>
            </div>
            <div className="detail-row">
              <span className="label">Student ID</span>
              <span className="value">ST24765</span>
            </div>
            <div className="detail-row">
              <span className="label">Home City</span>
              <span className="value">Bangalore</span>
            </div>
            <div className="detail-row">
              <span className="label">Check-in Date</span>
              <span className="value">Aug 25, 2024</span>
            </div>
          </div>
        </div>

        {/* Room Amenities */}
        <div className="room-card">
          <div className="card-header">
            <h3>Room Amenities</h3>
            <div className="card-icon warning-gradient">
              <FontAwesomeIcon icon={faClipboardList} />
            </div>
          </div>
          <div className="amenities-list">
            <div className="amenity-item">
              <FontAwesomeIcon icon={faWifi} />
              <span>High-Speed Wi-Fi</span>
              <div className="status-badge operational">Working</div>
            </div>
            <div className="amenity-item">
              <FontAwesomeIcon icon={faWind} />
              <span>Air Conditioning</span>
              <div className="status-badge operational">Working</div>
            </div>
            <div className="amenity-item">
              <FontAwesomeIcon icon={faBath} />
              <span>Attached Bathroom</span>
              <div className="status-badge operational">Working</div>
            </div>
            <div className="amenity-item">
              <FontAwesomeIcon icon={faLightbulb} />
              <span>Study Lamp</span>
              <div className="status-badge issue">Issue Reported</div>
            </div>
            <div className="amenity-item">
              <FontAwesomeIcon icon={faBed} />
              <span>Single Bed (2)</span>
              <div class="status-badge operational">Working</div>
            </div>
            <div className="amenity-item">
              <FontAwesomeIcon icon={faDesktop} />
              <span>Study Desk (2)</span>
              <div className="status-badge operational">Working</div>
            </div>
          </div>
        </div>

        {/* Usage & Maintenance */}
        <div className="room-card">
          <div className="card-header">
            <h3>Maintenance History</h3>
            <div className="card-icon primary-gradient">
              <FontAwesomeIcon icon={faTools} />
            </div>
          </div>
          <div className="maintenance-timeline">
            <div className="timeline-item">
              <div className="timeline-date">Oct 1, 2024</div>
              <div className="timeline-content">
                <h4>Quarterly Room Inspection</h4>
                <p>Standard inspection completed. No issues found.</p>
                <span className="status passed">Passed</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Sep 25, 2024</div>
              <div className="timeline-content">
                <h4>Wi-Fi Router Replacement</h4>
                <p>Router replaced due to connectivity issues.</p>
                <span className="status completed">Completed</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Sep 10, 2024</div>
              <div className="timeline-content">
                <h4>AC Servicing</h4>
                <p>Regular maintenance and filter cleaning.</p>
                <span className="status completed">Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Meal Plan Information (New Card) */}
        <div className="room-card">
          <div className="card-header">
            <h3>Meal Plan Information</h3>
            <div className="card-icon success-gradient">
              <FontAwesomeIcon icon={faUtensils} />
            </div>
          </div>
          <div className="room-details-content">
            <div className="detail-row">
              <span className="label">Current Plan</span>
              <span className="value">Full Board (3 meals)</span>
            </div>
            <div className="detail-row">
              <span className="label">Dining Hall</span>
              <span className="value">Apollo Cafeteria (Block A)</span>
            </div>
            <div className="detail-row">
              <span className="label">Breakfast</span>
              <span className="value">7:00 AM - 9:00 AM</span>
            </div>
            <div className="detail-row">
              <span className="label">Lunch</span>
              <span className="value">12:00 PM - 2:00 PM</span>
            </div>
            <div className="detail-row">
              <span className="label">Dinner</span>
              <span className="value">7:00 PM - 9:30 PM</span>
            </div>
            <div className="detail-row">
              <span className="label">Special Diet</span>
              <span className="value">
                <span className="status paid">Registered</span>
              </span>
            </div>
          </div>
        </div>

        {/* Room Rules & Policies (New Card) */}
        <div className="room-card">
          <div className="card-header">
            <h3>Room Rules & Policies</h3>
            <div className="card-icon warning-gradient">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
          </div>
          <div className="amenities-list">
            <div className="amenity-item">
              <FontAwesomeIcon icon={faVolumeUp} />
              <span>Quiet hours: 10 PM - 6 AM</span>
            </div>
            <div className="amenity-item">
              <FontAwesomeIcon icon={faSmokingBan} />
              <span>No smoking in rooms</span>
            </div>
            <div className="amenity-item">
              <FontAwesomeIcon icon={faUserFriends} />
              <span>Visitor hours: 9 AM - 8 PM</span>
            </div>
            <div className="amenity-item">
              <FontAwesomeIcon icon={faClipboardCheck} />
              <span>Room inspection: Monthly</span>
            </div>
            <div className="amenity-item">
              <FontAwesomeIcon icon={faShieldAlt} />
              <span>Lock doors when leaving</span>
            </div>
            <div className="amenity-item">
              <FontAwesomeIcon icon={faUtensils} />
              <span>No cooking in rooms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
