import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Pricing from "./pages/pricing/Pricing";
import Features from "./pages/features/Features";
import Home from "./pages/homePage/home";
//import Header from './components/header/Header';
//import Footer from './components/Footer/Footer';
import Privacy from "./pages/privacy/Privacy";
import Help from "./pages/help/Help";
import Services from "./pages/servicess/Services";
import Body from "./components/Body/Body";
import Body2 from "./components/Body/body2/body2";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <>
      <div className="container"></div>
      <Routes>
        <Route path="/body2" element={<Body2 />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* About Route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacypolicy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
