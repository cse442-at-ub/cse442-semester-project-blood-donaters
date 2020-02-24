
import React from "react";
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

function App() {
  return (
    <Router basename="/CSE442-542/2020-spring/cse-442m">
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Route exact path="/login">
          <NavBar/>
          <Login />
        </Route>
        <Route exact path="/signup">
          <NavBar/>
          <SignUp />
        </Route>
        <Route exact path="/donors-list">
          <NavBar/>
          <DonorList />
        </Route>
        <Route exact path="/profile">
          <NavBar/>
          <ProfilePage />
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>
    </div>
  </Router>
);
}

export default App;
