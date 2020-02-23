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
  );
}

export default App;
