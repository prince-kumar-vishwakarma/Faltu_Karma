import React, { useState } from "react";
import "./Complaints.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faCheckCircle,
  faSpinner,
  faPlus,
  faTimes,
  faTools,
  faWifi,
  faLightbulb,
  faCommentAlt,
  faHistory,
  faCalendarAlt,
  faThumbsUp,
  faPaperPlane,
  faChevronRight,
  faShower,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

const Complaints = () => {
  const [showForm, setShowForm] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const complaints = [
    {
      id: 1,
      title: "Wi-Fi signal weak in room",
      description:
        "The Wi-Fi connection is very slow and keeps disconnecting in my room. It's affecting my ability to attend online classes.",
      date: "Sep 25, 2024",
      status: "pending",
      icon: faWifi,
      responses: 2,
      progress: 40,
      progressText: "Assigned to IT department",
    },
    {
      id: 2,
      title: "Study lamp not working",
      description:
        "The study lamp in my room isn't working. I've checked the bulb and the power outlet, but it still doesn't turn on.",
      date: "Sep 29, 2024",
      status: "pending",
      icon: faLightbulb,
      responses: 1,
      progress: 20,
      progressText: "Scheduled for inspection",
    },
    {
      id: 3,
      title: "Leaking Faucet in Washroom",
      description:
        "The washroom sink faucet is leaking constantly, causing water wastage and making noise at night.",
      date: "Sep 23, 2024",
      status: "resolved",
      icon: faTools,
      responses: 3,
      resolutionDays: 2,
    },
    {
      id: 4,
      title: "Shower temperature inconsistent",
      description:
        "The shower water temperature fluctuates between very hot and cold unpredictably, making it difficult to shower properly.",
      date: "Sep 18, 2024",
      status: "resolved",
      icon: faShower,
      responses: 2,
      resolutionDays: 3,
    },
    {
      id: 5,
      title: "Room door lock jammed",
      description:
        "The lock on my room door is difficult to open. Sometimes it takes several minutes to get the key to work.",
      date: "Oct 1, 2024",
      status: "pending",
      icon: faDoorOpen,
      responses: 1,
      progress: 10,
      progressText: "Waiting for maintenance staff",
    },
    {
      id: 6,
      title: "AC making strange noise",
      description:
        "The air conditioner in my room has started making a loud rattling noise whenever it runs.",
      date: "Sep 15, 2024",
      status: "resolved",
      icon: faTools,
      responses: 2,
      resolutionDays: 4,
    },
    {
      id: 7,
      title: "Window doesn't close properly",
      description:
        "The window in my room doesn't seal properly when closed, allowing insects to enter and causing draft.",
      date: "Sep 10, 2024",
      status: "resolved",
      icon: faTools,
      responses: 1,
      resolutionDays: 5,
    },
    {
      id: 8,
      title: "Need extra furniture",
      description:
        "Requesting an additional bookshelf for my academic materials as provided storage is insufficient.",
      date: "Sep 5, 2024",
      status: "resolved",
      icon: faTools,
      responses: 2,
      resolutionDays: 7,
    },
  ];

  // Limit displayed complaints based on showAll state
  const displayedComplaints = showAll ? complaints : complaints.slice(0, 5);

  return (
    <div className="complaints-container">
      <div className="complaints-header">
        <h2>Complaints Portal</h2>
        <p>Track and raise complaints about your accommodation</p>
      </div>

      <div className="complaints-stats-grid">
        <div className="stat-card">
          <div className="stat-title">Total Complaints</div>
          <div className="stat-value">8</div>
          <div className="stat-trend trend-neutral">
            <FontAwesomeIcon icon={faHistory} className="trend-icon" />
            Lifetime total
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Pending</div>
          <div className="stat-value">3</div>
          <div className="stat-trend trend-down">
            <FontAwesomeIcon icon={faSpinner} className="trend-icon" />
            Being processed
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Resolved</div>
          <div className="stat-value">5</div>
          <div className="stat-trend trend-up">
            <FontAwesomeIcon icon={faCheckCircle} className="trend-icon" />
            This semester
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Avg. Resolution</div>
          <div className="stat-value">4.2</div>
          <div className="stat-trend trend-up">
            <FontAwesomeIcon icon={faCalendarAlt} className="trend-icon" />
            Days to resolve
          </div>
        </div>
      </div>

      <div className="complaints-actions">
        <button
          className="action-btn primary"
          onClick={() => setShowForm(!showForm)}>
          <FontAwesomeIcon icon={showForm ? faTimes : faPlus} />
          {showForm ? "Cancel" : "New Complaint"}
        </button>
      </div>

      {showForm && (
        <div className="complaint-form-card">
          <h3>Submit New Complaint</h3>
          <div className="complaint-form">
            <div className="form-group">
              <label>Complaint Type</label>
              <select>
                <option value="">Select a category</option>
                <option value="maintenance">Maintenance Issue</option>
                <option value="internet">Internet Problem</option>
                <option value="electricity">Electricity Issue</option>
                <option value="furniture">Furniture Problem</option>
                <option value="cleanliness">Cleanliness Concern</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Title</label>
              <input type="text" placeholder="Brief description of the issue" />
            </div>
            <div className="form-group">
              <label>Details</label>
              <textarea placeholder="Please provide details about your complaint"></textarea>
            </div>
            <div className="form-group">
              <label>Priority</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="priority" value="low" />
                  <span>Low</span>
                </label>
                <label>
                  <input type="radio" name="priority" value="medium" checked />
                  <span>Medium</span>
                </label>
                <label>
                  <input type="radio" name="priority" value="high" />
                  <span>High</span>
                </label>
              </div>
            </div>
            <div className="form-footer">
              <button className="action-btn">Cancel</button>
              <button className="action-btn primary">
                <FontAwesomeIcon icon={faPaperPlane} /> Submit Complaint
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="complaints-list">
        {displayedComplaints.map((complaint) => (
          <div key={complaint.id} className="complaint-card">
            <div className={`complaint-icon ${complaint.status}`}>
              <FontAwesomeIcon icon={complaint.icon} />
            </div>
            <div className="complaint-details">
              <div className="complaint-header">
                <h3>{complaint.title}</h3>
                <span className={`status ${complaint.status}`}>
                  {complaint.status === "pending" ? "Pending" : "Resolved"}
                </span>
              </div>
              <p>{complaint.description}</p>
              <div className="complaint-meta">
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} />{" "}
                  {complaint.status === "resolved"
                    ? "Resolved: "
                    : "Submitted: "}{" "}
                  {complaint.date}
                </span>
                <span>
                  {complaint.status === "pending" ? (
                    <>
                      <FontAwesomeIcon icon={faCommentAlt} />{" "}
                      {complaint.responses} responses
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faHistory} /> Resolved in{" "}
                      {complaint.resolutionDays} days
                    </>
                  )}
                </span>
              </div>

              {complaint.status === "pending" ? (
                <div className="complaint-progress">
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${complaint.progress}%` }}></div>
                  </div>
                  <span>{complaint.progressText}</span>
                </div>
              ) : (
                <div className="feedback-section">
                  <span>Was this resolved to your satisfaction?</span>
                  <div className="feedback-buttons">
                    <button className="feedback-btn">
                      <FontAwesomeIcon icon={faThumbsUp} /> Yes
                    </button>
                    <button className="feedback-btn">
                      <FontAwesomeIcon icon={faTimes} /> No
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {!showAll && complaints.length > 5 && (
        <div className="view-more-container">
          <button className="view-more-btn" onClick={() => setShowAll(true)}>
            View All Complaints <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      {showAll && (
        <div className="view-more-container">
          <button className="view-more-btn" onClick={() => setShowAll(false)}>
            Show Less{" "}
            <FontAwesomeIcon icon={faChevronRight} className="rotate-up" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Complaints;
