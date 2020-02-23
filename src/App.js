<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import FormPage from './components/formpage';

function App() {
  return (
    <FormPage/>
=======
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import NavBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Login />
    </React.Fragment>
>>>>>>> develop
  );
}

export default App;
