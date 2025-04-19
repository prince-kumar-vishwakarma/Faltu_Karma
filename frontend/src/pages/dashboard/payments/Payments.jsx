import React from "react";
import "./Payments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoiceDollar,
  faCheckCircle,
  faThumbsUp,
  faUtensils,
  faWallet,
  faHistory,
  faReceipt,
  faCalendarAlt,
  faExchangeAlt,
  faUniversity,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";

const Payments = () => {
  return (
    <div className="payments-container">
      <div className="payments-header">
        <h2>Payment Management</h2>
        <p>View and manage all your hostel payments</p>
      </div>

      <div className="payments-stats-grid">
        <div className="stat-card">
          <div className="stat-title">Total Balance Due</div>
          <div className="stat-value">₹750</div>
          <div className="stat-trend trend-neutral">
            <FontAwesomeIcon
              icon={faFileInvoiceDollar}
              className="trend-icon"
            />
            Due on Oct 15
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Last Payment</div>
          <div className="stat-value">₹2,500</div>
          <div className="stat-trend trend-up">
            <FontAwesomeIcon icon={faCheckCircle} className="trend-icon" />
            Sep 1, 2024
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-title">Meal Credits</div>
          <div className="stat-value">₹450</div>
          <div className="stat-trend trend-neutral">
            <FontAwesomeIcon icon={faUtensils} className="trend-icon" />
            For cafeteria use
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <button className="action-btn">
          <FontAwesomeIcon icon={faWallet} /> Pay Now
        </button>
        <button className="action-btn">
          <FontAwesomeIcon icon={faHistory} /> Payment History
        </button>
        <button className="action-btn">
          <FontAwesomeIcon icon={faReceipt} /> Download Receipt
        </button>
      </div>

      <div className="payments-content-grid">
        <div className="card payment-card">
          <div className="card-header">
            <h3>Upcoming Payments</h3>
            <div className="card-icon warning-gradient">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
          </div>
          <div className="payment-list">
            <div className="payment-item">
              <div className="payment-info">
                <h4>Room Rent - October</h4>
                <p>Due on Oct 15, 2024</p>
              </div>
              <div className="payment-amount">
                <span className="amount">₹750.00</span>
                <span className="status pending">Pending</span>
              </div>
            </div>
            <div className="payment-item">
              <div className="payment-info">
                <h4>Electricity Charges</h4>
                <p>Due on Oct 15, 2024</p>
              </div>
              <div className="payment-amount">
                <span className="amount">₹0.00</span>
                <span className="status included">Included</span>
              </div>
            </div>
            <div className="payment-item">
              <div className="payment-info">
                <h4>Room Rent - November</h4>
                <p>Due on Nov 15, 2024</p>
              </div>
              <div className="payment-amount">
                <span className="amount">₹750.00</span>
                <span className="status upcoming">Upcoming</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card payment-card">
          <div className="card-header">
            <h3>Recent Transactions</h3>
            <div className="card-icon success-gradient">
              <FontAwesomeIcon icon={faExchangeAlt} />
            </div>
          </div>
          <div className="payment-list">
            <div className="payment-item">
              <div className="payment-info">
                <h4>Room Rent - September</h4>
                <p>Paid on Sep 1, 2024</p>
              </div>
              <div className="payment-amount">
                <span className="amount">₹750.00</span>
                <span className="status paid">Paid</span>
              </div>
            </div>
            <div className="payment-item">
              <div className="payment-info">
                <h4>Cafeteria Balance Recharge</h4>
                <p>Paid on Sep 8, 2024</p>
              </div>
              <div className="payment-amount">
                <span className="amount">₹500.00</span>
                <span className="status paid">Paid</span>
              </div>
            </div>
            <div className="payment-item">
              <div className="payment-info">
                <h4>Late Fee (August)</h4>
                <p>Paid on Sep 5, 2024</p>
              </div>
              <div className="payment-amount">
                <span className="amount">₹50.00</span>
                <span className="status paid">Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-header">
        <h3>Payment Methods</h3>
        <span className="add-new">Add New</span>
      </div>

      <div className="payment-methods-grid">
        <div className="payment-method-card active">
          <div className="card-body">
            <div className="payment-method-icon">
              <FontAwesomeIcon icon={faCcVisa} />
            </div>
            <div className="payment-method-details">
              <h4>Visa Card</h4>
              <p>**** **** **** 4523</p>
              <span className="expiry">Expires 09/27</span>
            </div>
            <div className="default-badge">Default</div>
          </div>
        </div>

        <div className="payment-method-card">
          <div className="card-body">
            <div className="payment-method-icon">
              <FontAwesomeIcon icon={faUniversity} />
            </div>
            <div className="payment-method-details">
              <h4>Bank Transfer</h4>
              <p>State Bank of India</p>
              <span className="expiry">A/C ending 7865</span>
            </div>
          </div>
        </div>

        <div className="payment-method-card">
          <div className="card-body">
            <div className="payment-method-icon">
              <FontAwesomeIcon icon={faWallet} />
            </div>
            <div className="payment-method-details">
              <h4>UPI Payment</h4>
              <p>sarah.j@okbank</p>
              <span className="expiry">Linked to mobile</span>
            </div>
          </div>
        </div>

        <div className="payment-method-card add-card">
          <div className="card-body">
            <div className="add-payment-icon">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <p>Add New Payment Method</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
