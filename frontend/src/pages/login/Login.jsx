import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { FaBuilding, FaUser, FaLock } from "react-icons/fa";

import axiosInstance from "../../utils/axiosInstance.js";

import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    email: "",
    password: "",
    remember: true,
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onChangeHandle = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login", form);

      console.log("Data", res.data);
      setUser(res.user);
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="login-logo">
          <div className="login-logo-icon">
            <FaBuilding className="login-icon" />
          </div>
          <h1 className="login-title">UniHostel</h1>
        </div>
        <h2 className="login-welcome">Welcome Back!</h2>
        <p className="login-subtitle">
          Login to access your UniHostel dashboard.
        </p>
        {error && <p style={{ color: "red" }}> {error.message} </p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-input-box">
            <label htmlFor="Email" className="login-label">
              Email / Student ID
            </label>
            <input
              value={form.email}
              onChange={onChangeHandle}
              name="email"
              type="text"
              placeholder="Enter your email or ID"
              required
              className="login-input"
            />
            <FaUser className="login-input-icon" />
          </div>
          <div className="login-input-box">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              value={form.password}
              onChange={onChangeHandle}
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className="login-input"
            />
            <FaLock className="login-input-icon" />
          </div>
          <div className="login-remember">
            <label className="login-remember-label">
              <input
                value={form.remember}
                onChange={onChangeHandle}
                type="checkbox"
                name="remember"
                id="remember"
                className="login-checkbox"
                checked
              />
              Remember me
            </label>
            {/* <Link to='/forgot-password' className="login-forgot-password">Forget Password?</Link> */}
          </div>
          <button type="submit" className="login-submit-btn">
            Login
          </button>
        </form>
        <p className="login-signup">
          Don't have an account?
          <Link to="/Signup" className="login-signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
