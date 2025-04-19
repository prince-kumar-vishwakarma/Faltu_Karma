import React from "react";
import "./Overview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faArrowUp,
  faExclamationCircle,
  faHome,
  faReceipt,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-title">Days Remaining</div>
          <div className="stat-value">124</div>
          <div className="stat-trend trend-neutral">
            <FontAwesomeIcon icon={faCalendarDay} className="trend-icon" />
            Until semester end
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Account Balance</div>
          <div className="stat-value">₹450</div>
          <div className="stat-trend trend-up">
            <FontAwesomeIcon icon={faArrowUp} className="trend-icon" />
            +₹50 last week
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Pending Complaints</div>
          <div className="stat-value">2</div>
          <div className="stat-trend trend-neutral">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="trend-icon"
            />
            Needs attention
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h3>My Room Details</h3>
            <div className="card-icon primary-gradient">
              <FontAwesomeIcon icon={faHome} />
            </div>
          </div>
          <div className="room-details">
            <div className="detail-row">
              <span className="label">Room Number</span>
              <span className="value">A-305</span>
            </div>
            <div className="detail-row">
              <span className="label">Block</span>
              <span className="value">Apollo</span>
            </div>
            <div className="detail-row">
              <span className="label">Room Type</span>
              <span className="value">Twin Sharing</span>
            </div>
            <div className="detail-row">
              <span className="label">Roommate</span>
              <span className="value">Jessica Miller</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Payment Status</h3>
            <div className="card-icon success-gradient">
              <FontAwesomeIcon icon={faReceipt} />
            </div>
          </div>
          <div className="room-details">
            <div className="detail-row">
              <span className="label">Next Due Date</span>
              <span className="value">Oct 15, 2024</span>
            </div>
            <div className="detail-row">
              <span className="label">Amount Due</span>
              <span className="value">₹750.00</span>
            </div>
            <div className="detail-row">
              <span className="label">Last Payment</span>
              <span className="value">Sep 1, 2024</span>
            </div>
            <div className="detail-row">
              <span className="label">Status</span>
              <span className="value">
                <span className="status paid">Paid</span>
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Recent Complaints</h3>
            <div className="card-icon warning-gradient">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
          </div>
          <ul className="complaint-list">
            <li className="complaint-item">
              <div className="complaint-title">Leaking Faucet in Washroom</div>
              <div className="complaint-meta">
                <span>
                  Status: <strong className="status pending">Pending</strong>
                </span>
                <span>Sep 28</span>
              </div>
            </li>
            <li className="complaint-item">
              <div className="complaint-title">Wi-Fi signal weak in room</div>
              <div className="complaint-meta">
                <span>
                  Status: <strong className="status paid">Resolved</strong>
                </span>
                <span>Sep 25</span>
              </div>
            </li>
            <li className="complaint-item">
              <div className="complaint-title">Study lamp not working</div>
              <div className="complaint-meta">
                <span>
                  Status: <strong className="status pending">Pending</strong>
                </span>
                <span>Sep 29</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-header">
        <h3>Recent Announcements</h3>
        <span className="view-all">View All</span>
      </div>

      <div className="announcement-grid">
        <div className="announcement-card glass-card">
          <h4>Mandatory Fire Drill Schedule</h4>
          <p>
            Please be advised that a mandatory fire drill will be conducted on
            October 12th, 2024, at 10:00 AM for Apollo block.
          </p>
          <div className="announcement-date">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Posted on Oct 5, 2024</span>
          </div>
        </div>

        <div className="announcement-card">
          <h4>Updated Laundry Room Hours</h4>
          <p>
            The laundry room operating hours have been extended. New hours are
            7:00 AM to 11:00 PM daily, effective immediately.
          </p>
          <div className="announcement-date">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Posted on Oct 3, 2024</span>
          </div>
        </div>

        <div className="announcement-card">
          <h4>Mid-Term Exam Quiet Hours</h4>
          <p>
            Quiet hours will be strictly enforced starting Oct 20th due to
            mid-term exams. Please maintain a conducive study environment.
          </p>
          <div className="announcement-date">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>Posted on Oct 1, 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
