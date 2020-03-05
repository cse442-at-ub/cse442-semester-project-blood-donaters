import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./navbar";

export default function AppliedRoute({ component: C, appProps, ...rest }) {
  return (
    <Route {...rest} render={(props) => <div><NavBar /> <C {...props} {...appProps} /></div>} />
  );
}