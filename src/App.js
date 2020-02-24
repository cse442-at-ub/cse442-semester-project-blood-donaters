
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
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/login">
        <NavBar/>
          <Login />
        </Route>
        <Route path="/signup">
        <NavBar/>
          <SignUp />
        </Route>
        <Route path="/donors-list">
        <NavBar/>
          <DonorList />
        </Route>
        <Route path="/profile">
          <NavBar/>
          <ProfilePage />
        </Route>
        <Route path="/">
                  <HomePage/>
          </Route>
      </Switch>
    </div>
  </Router>
);
}

export default App;
