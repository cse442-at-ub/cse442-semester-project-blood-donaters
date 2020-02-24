import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
import dracula_avatar from "../assets/dracula.jpg";
import Avatar from "@material-ui/core/Avatar";

//Stateless Functional Component
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="navbar-collapse collapse justify-content-between align-items-center">
        <ul className="navbar-nav text-md-center text-left">
          <li className="nav-item">
            <a className="navbar-brand" href="/">
              Blood Donation App
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/donors-list">
              Donor's List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              Profile
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              Count Dracula
            </a>
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
