
import React from "react";
import "./App.css";
import Login from "./components/login.jsx";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";
import FormPage from './components/formpage';
import DonorList from './components/donors-list';
import HomePage from './components/homepage';


function App() {
  return (
    <React.Fragment>
      <HomePage />
    </React.Fragment>
  );
}

export default App;
