
import React, { useState } from "react";
import "./App.css";
import Login from "./components/login.jsx";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import DonorList from './components/donors-list';
import HomePage from './components/homepage';
import SignUp from './components/formpage';
import ProfilePage from './components/profilepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from "./components/Routes.js";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  return (
    <Router basename="/CSE442-542/2020-spring/cse-442m">
    <div>
      <Routes appProps={{user, setUser, isAuthenticated, userHasAuthenticated }} />
    </div>
  </Router>
);
}

export default App;
