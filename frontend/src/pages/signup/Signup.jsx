import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [form, setForm] = useState({
    name: "",
    enrollment: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    terms: false,
  });

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const onChangeHandle = (e) => {
    const { name, type, checked, value } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/register", form);
      alert("Signup Successful");

      setUser(res.data);

    } catch (err) {
      alert("SignUp Unsuccessful");
      console.error(err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <div className="signup-logo">
          <div className="signup-logo-icon">
            <FaBuilding className="signup-icon" />
          </div>
          <h1 className="signup-title">UniHostel</h1>
        </div>
        <h2 className="signup-welcome">Join UniHostel</h2>
        <p className="signup-subtitle">Create your account to get started.</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-input-group">
            <label htmlFor="name" className="signup-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={onChangeHandle}
              placeholder="Enter your full name"
              required
              className="signup-input"
            />
          </div>
          <div className="signup-input-group">
            <label htmlFor="enrollment" className="signup-label">
              Enrollment Number
            </label>
            <input
              type="text"
              id="enrollment"
              name="enrollment"
              value={form.enrollment}
              onChange={onChangeHandle}
              placeholder="Enter enrollment number"
              required
              className="signup-input"
            />
          </div>
          <div className="signup-input-group">
            <label htmlFor="email" className="signup-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={onChangeHandle}
              placeholder="Enter your email"
              required
              className="signup-input"
            />
          </div>
          <div className="signup-input-group">
            <label htmlFor="password" className="signup-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={onChangeHandle}
              placeholder="Enter password"
              required
              className="signup-input"
            />
          </div>
          <div className="signup-input-group">
            <label htmlFor="confirmPassword" className="signup-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={onChangeHandle}
              placeholder="Confirm password"
              required
              className="signup-input"
            />
          </div>
          <div className="signup-input-group">
            <label htmlFor="dob" className="signup-label">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={form.dob}
              onChange={onChangeHandle}
              required
              className="signup-input"
            />
          </div>
          <div className="signup-terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={form.terms}
              onChange={onChangeHandle}
              className="signup-checkbox"
            />
            <label htmlFor="terms" className="signup-terms-label">
              I agree to the{" "}
              <a href="#" className="signup-link">
                Terms & Conditions
              </a>
            </label>
          </div>
          <button type="submit" className="signup-submit-btn">
            Sign Up
          </button>
          <div className="signup-login-link">
            Already have an account?{" "}
            <Link to="/login" className="signup-link">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
