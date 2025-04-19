import React, { useState, useEffect } from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheckCircle,
  faIdBadge,
  faPlane,
  faTools,
  faPlaneDeparture,
  faUserFriends,
  faDumbbell,
  faTimes,
  faPaperPlane,
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faInfoCircle,
  faPhone,
  faBuilding,
  faBed,
  faTag,
  faIdCard,
  faUsers,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [animateForm, setAnimateForm] = useState(false);
  const [filledInputs, setFilledInputs] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilledInputs((prev) => ({
      ...prev,
      [name]: value.trim().length > 0,
    }));
  };

  useEffect(() => {
    if (!showForm) {
      setFilledInputs({});
    }
  }, [showForm]);

  const toggleForm = (serviceName) => {
    if (showForm && selectedService === serviceName) {
      setAnimateForm(false);
      setTimeout(() => {
        setShowForm(false);
        setSelectedService(null);
      }, 300);
    } else {
      setShowForm(true);
      setSelectedService(serviceName);
      setTimeout(() => {
        setAnimateForm(true);
      }, 10);
      setTimeout(() => {
        const formElement = document.getElementById("service-form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 350);
    }
  };

  const renderServiceForm = () => {
    if (!showForm) return null;

    let formTitle, formFields;

    switch (selectedService) {
      case "visitor":
        formTitle = "Visitor Stay Request";
        formFields = (
          <>
            <div className="form-group">
              <label>Visitor Information</label>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <div
                    className={`input-with-icon ${
                      filledInputs["visitorName"] ? "input-filled" : ""
                    }`}>
                    <FontAwesomeIcon
                      icon={faUserFriends}
                      className="input-icon"
                    />
                    <input
                      type="text"
                      name="visitorName"
                      placeholder="Visitor's full name"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Relationship</label>
                  <div
                    className={`input-with-icon ${
                      filledInputs["relationship"] ? "input-filled" : ""
                    }`}>
                    <FontAwesomeIcon icon={faUsers} className="input-icon" />
                    <select name="relationship" onChange={handleInputChange}>
                      <option value="">Select relationship</option>
                      <option value="parent">Parent/Guardian</option>
                      <option value="sibling">Sibling</option>
                      <option value="relative">Other Relative</option>
                      <option value="friend">Friend</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>ID Proof</label>
              <div className="form-row">
                <div className="form-group">
                  <label>ID Type</label>
                  <div
                    className={`input-with-icon ${
                      filledInputs["idType"] ? "input-filled" : ""
                    }`}>
                    <FontAwesomeIcon icon={faIdCard} className="input-icon" />
                    <select name="idType" onChange={handleInputChange}>
                      <option value="">Select ID type</option>
                      <option value="aadhar">Aadhar Card</option>
                      <option value="passport">Passport</option>
                      <option value="driving">Driving License</option>
                      <option value="voter">Voter ID</option>
                      <option value="college">College ID</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>ID Number</label>
                  <div
                    className={`input-with-icon ${
                      filledInputs["idNumber"] ? "input-filled" : ""
                    }`}>
                    <FontAwesomeIcon icon={faIdCard} className="input-icon" />
                    <input
                      type="text"
                      name="idNumber"
                      placeholder="Enter ID number"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Check-in Date</label>
                <div
                  className={`input-with-icon ${
                    filledInputs["checkInDate"] ? "input-filled" : ""
                  }`}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="input-icon"
                  />
                  <input
                    type="date"
                    name="checkInDate"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Check-out Date</label>
                <div
                  className={`input-with-icon ${
                    filledInputs["checkOutDate"] ? "input-filled" : ""
                  }`}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="input-icon"
                  />
                  <input
                    type="date"
                    name="checkOutDate"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Purpose of Visit</label>
              <div
                className={`textarea-container ${
                  filledInputs["visitPurpose"] ? "input-filled" : ""
                }`}>
                <textarea
                  name="visitPurpose"
                  placeholder="Please describe the purpose of the visit"
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>
                  I confirm the visitor will abide by all hostel rules and
                  regulations
                </span>
              </label>
            </div>
            <div className="notice-box">
              <FontAwesomeIcon icon={faInfoCircle} />
              <p>
                Visitor stay requests must be submitted at least 3 days in
                advance. Approval is subject to availability and hostel
                policies. Maximum stay duration is 3 nights.
              </p>
            </div>
          </>
        );
        break;

      case "leave":
        formTitle = "Leave Application";
        formFields = (
          <>
            <div className="form-group">
              <label>Leave Type</label>
              <div
                className={`input-with-icon ${
                  filledInputs["leaveType"] ? "input-filled" : ""
                }`}>
                <FontAwesomeIcon
                  icon={faPlaneDeparture}
                  className="input-icon"
                />
                <select name="leaveType" onChange={handleInputChange}>
                  <option value="">Select leave type</option>
                  <option value="weekend">Weekend Leave</option>
                  <option value="academic">Academic Leave</option>
                  <option value="medical">Medical Leave</option>
                  <option value="personal">Personal Leave</option>
                  <option value="vacation">Vacation</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>From Date</label>
                <div
                  className={`input-with-icon ${
                    filledInputs["fromDate"] ? "input-filled" : ""
                  }`}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="input-icon"
                  />
                  <input
                    type="date"
                    name="fromDate"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>To Date</label>
                <div
                  className={`input-with-icon ${
                    filledInputs["toDate"] ? "input-filled" : ""
                  }`}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="input-icon"
                  />
                  <input
                    type="date"
                    name="toDate"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Reason for Leave</label>
              <div
                className={`textarea-container ${
                  filledInputs["leaveReason"] ? "input-filled" : ""
                }`}>
                <textarea
                  name="leaveReason"
                  placeholder="Please provide details"
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="form-group">
              <label>Destination Address</label>
              <div
                className={`input-with-icon ${
                  filledInputs["destinationAddress"] ? "input-filled" : ""
                }`}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                <input
                  type="text"
                  name="destinationAddress"
                  placeholder="Where will you be staying?"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Emergency Contact</label>
              <div
                className={`input-with-icon ${
                  filledInputs["emergencyContact"] ? "input-filled" : ""
                }`}>
                <FontAwesomeIcon icon={faPhone} className="input-icon" />
                <input
                  type="text"
                  name="emergencyContact"
                  placeholder="Contact number during leave"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </>
        );
        break;

      case "stay":
        formTitle = "Stay Request";
        formFields = (
          <>
            <div className="form-group">
              <label>Stay Type</label>
              <div
                className={`input-with-icon ${
                  filledInputs["stayType"] ? "input-filled" : ""
                }`}>
                <FontAwesomeIcon icon={faBuilding} className="input-icon" />
                <select name="stayType" onChange={handleInputChange}>
                  <option value="">Select stay type</option>
                  <option value="extended">Extended Stay</option>
                  <option value="vacation">Vacation Period</option>
                  <option value="early-arrival">Early Arrival</option>
                  <option value="late-departure">Late Departure</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>From Date</label>
                <div
                  className={`input-with-icon ${
                    filledInputs["stayFromDate"] ? "input-filled" : ""
                  }`}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="input-icon"
                  />
                  <input
                    type="date"
                    name="stayFromDate"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>To Date</label>
                <div
                  className={`input-with-icon ${
                    filledInputs["stayToDate"] ? "input-filled" : ""
                  }`}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="input-icon"
                  />
                  <input
                    type="date"
                    name="stayToDate"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Reason for Stay</label>
              <div
                className={`textarea-container ${
                  filledInputs["stayReason"] ? "input-filled" : ""
                }`}>
                <textarea
                  name="stayReason"
                  placeholder="Please provide details about why you need to stay during this period"
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Building Preference</label>
                <div
                  className={`input-with-icon ${
                    filledInputs["buildingPreference"] ? "input-filled" : ""
                  }`}>
                  <FontAwesomeIcon icon={faBuilding} className="input-icon" />
                  <select
                    name="buildingPreference"
                    onChange={handleInputChange}>
                    <option value="">Select building</option>
                    <option value="current">Current Building</option>
                    <option value="apollo">Apollo Block</option>
                    <option value="athena">Athena Block</option>
                    <option value="zeus">Zeus Block</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Room Type</label>
                <div
                  className={`input-with-icon ${
                    filledInputs["roomType"] ? "input-filled" : ""
                  }`}>
                  <FontAwesomeIcon icon={faBed} className="input-icon" />
                  <select name="roomType" onChange={handleInputChange}>
                    <option value="">Select room type</option>
                    <option value="current">Same as Current</option>
                    <option value="single">Single Occupancy</option>
                    <option value="shared">Shared Room</option>
                    <option value="any">Any Available</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Special Requirements</label>
              <div
                className={`input-with-icon ${
                  filledInputs["specialRequirements"] ? "input-filled" : ""
                }`}>
                <FontAwesomeIcon icon={faTag} className="input-icon" />
                <input
                  type="text"
                  name="specialRequirements"
                  placeholder="Any special requirements or preferences"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="notice-box">
              <FontAwesomeIcon icon={faInfoCircle} />
              <p>
                Stay requests must be submitted at least 7 days in advance.
                Additional charges may apply based on stay duration and room
                type.
              </p>
            </div>
          </>
        );
        break;

      case "gym":
        formTitle = "Gym Access Request";
        formFields = (
          <>
            <div className="form-group">
              <label>Membership Type</label>
              <div
                className={`input-with-icon ${
                  filledInputs["membershipType"] ? "input-filled" : ""
                }`}>
                <FontAwesomeIcon icon={faDumbbell} className="input-icon" />
                <select name="membershipType" onChange={handleInputChange}>
                  <option value="">Select membership type</option>
                  <option value="monthly">Monthly (₹300)</option>
                  <option value="semester">Semester (₹800)</option>
                  <option value="annual">Annual (₹1500)</option>
                  <option value="day-pass">Day Pass (₹50)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <div
                  className={`input-with-icon ${
                    filledInputs["startDate"] ? "input-filled" : ""
                  }`}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="input-icon"
                  />
                  <input
                    type="date"
                    name="startDate"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Preferred Time Slot</label>
                <div
                  className={`input-with-icon ${
                    filledInputs["timeSlot"] ? "input-filled" : ""
                  }`}>
                  <FontAwesomeIcon icon={faClock} className="input-icon" />
                  <select name="timeSlot" onChange={handleInputChange}>
                    <option value="morning">Morning (6 AM - 9 AM)</option>
                    <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Medical Information</label>
              <div
                className={`textarea-container ${
                  filledInputs["medicalInfo"] ? "input-filled" : ""
                }`}>
                <textarea
                  name="medicalInfo"
                  placeholder="Please mention any medical conditions or fitness concerns"
                  onChange={handleInputChange}></textarea>
              </div>
            </div>
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>I agree to follow gym rules and regulations</span>
              </label>
            </div>
            <div className="notice-box">
              <FontAwesomeIcon icon={faInfoCircle} />
              <p>
                An induction session is mandatory for first-time gym users and
                will be scheduled after your request is approved.
              </p>
            </div>
          </>
        );
        break;

      default:
        formTitle = "Service Request";
        formFields = <p>Please select a service to continue</p>;
    }

    return (
      <div
        id="service-form"
        className={`service-form-card ${
          animateForm ? "form-visible" : "form-hidden"
        }`}>
        <div className="form-header">
          <h3>{formTitle}</h3>
          <button className="close-btn" onClick={() => setShowForm(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="service-form">
          {formFields}
          <div className="form-footer">
            <button className="action-btn" onClick={() => setShowForm(false)}>
              Cancel
            </button>
            <button className="action-btn primary">
              <FontAwesomeIcon icon={faPaperPlane} /> Submit Request
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h2>Hostel Services</h2>
        <p>Explore and request services available for your stay</p>
      </div>
      <div className="services-stats-grid">
        <div className="stat-card">
          <div className="stat-title">Active Requests</div>
          <div className="stat-value">2</div>
          <div className="stat-trend trend-neutral">
            <FontAwesomeIcon icon={faSpinner} className="trend-icon" />
            Being processed
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Completed Services</div>
          <div className="stat-value">5</div>
          <div className="stat-trend trend-up">
            <FontAwesomeIcon icon={faCheckCircle} className="trend-icon" />
            This semester
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Visitor Passes</div>
          <div className="stat-value">1</div>
          <div className="stat-trend trend-neutral">
            <FontAwesomeIcon icon={faIdBadge} className="trend-icon" />
            Active this week
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Leave Days</div>
          <div className="stat-value">4</div>
          <div className="stat-trend trend-down">
            <FontAwesomeIcon icon={faPlane} className="trend-icon" />
            Used this semester
          </div>
        </div>
      </div>

      <div className="section-header">
        <h3>Popular Services</h3>
        <span className="view-all">View All</span>
      </div>
      <div className="services-cards-grid">
        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faUserFriends} />
          </div>
          <h4>Visitor Stay</h4>
          <p>Request accommodation for family or friends visiting campus</p>
          <button
            className="service-button"
            onClick={() => toggleForm("visitor")}>
            Request
          </button>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faPlaneDeparture} />
          </div>
          <h4>Leave Application</h4>
          <p>Apply for temporary leave from the hostel</p>
          <button
            className="service-button"
            onClick={() => toggleForm("leave")}>
            Apply
          </button>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <h4>Stay Request</h4>
          <p>Apply for vacation or extended stay periods in the hostel</p>
          <button className="service-button" onClick={() => toggleForm("stay")}>
            Request
          </button>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FontAwesomeIcon icon={faDumbbell} />
          </div>
          <h4>Gym Access</h4>
          <p>Book time slots for gym and fitness activities</p>
          <button className="service-button" onClick={() => toggleForm("gym")}>
            Book
          </button>
        </div>
      </div>

      {renderServiceForm()}
    </div>
  );
};

export default Services;
