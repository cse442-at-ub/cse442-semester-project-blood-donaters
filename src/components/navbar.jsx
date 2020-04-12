import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

//Stateless Functional Component
class NavBar extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return this.loggedInNavBar();
    }
    return this.loggedOutNavBar();
  }

  logout = (event) => {
    //event.preventDefault();
    this.props.setUser("");
    this.props.userHasAuthenticated(false);
  };

  loggedInNavBar() {
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
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donors-list">
                Donor's List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <li className="nav-item">
                <Link className="nav-link" to="./" onClick={this.logout}>
                  Log Out
                </Link>
              </li>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                {this.props.user}
              </Link>
            </li>
            <li>
              <Avatar />
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  loggedOutNavBar() {
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
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
