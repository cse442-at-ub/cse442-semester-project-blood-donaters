import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
import dracula_avatar from "../assets/dracula.jpg";
import Avatar from "@material-ui/core/Avatar";
import { Link } from 'react-router-dom';

//Stateless Functional Component
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="navbar-collapse collapse justify-content-between align-items-center">
        <ul className="navbar-nav text-md-center text-left">
          <li className="nav-item">
            <a className="navbar-brand" href="./">
              Blood Donation App
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/donors-list">Donor's List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Count Dracula
            </Link>
          </li>
          <li>
            <Avatar className="m-2" alt="Count Dracula" src={dracula_avatar} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
