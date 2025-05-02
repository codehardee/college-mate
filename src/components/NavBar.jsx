// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">College Mate</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blogs">Blog</Link></li>
        <li><Link to="/profile">Your Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;