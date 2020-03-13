
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./components/Routes.js";

export default function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  return (
    <Router basename={__dirname}>
    <div>
      <Routes appProps={{user, setUser, isAuthenticated, userHasAuthenticated }} />
    </div>
  </Router>
);
}