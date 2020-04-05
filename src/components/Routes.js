import React from "react";
import AppliedRoute from "./AppliedRoute";
import Login from "./login.jsx";
import DonorList from "./donor-list.jsx";
import HomePage from "./homepage";
import SignUp from "./formpage";
import ProfilePage from "./profilepage";
import { Switch, Route } from "react-router-dom";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={HomePage} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
      <AppliedRoute
        path="/signup"
        exact
        component={SignUp}
        appProps={appProps}
      />
      <AppliedRoute
        path="/donors-list"
        exact
        component={DonorList}
        appProps={appProps}
      />
      <AppliedRoute
        path="/profile"
        exact
        component={ProfilePage}
        appProps={appProps}
      />
      <Route component={HomePage} />
    </Switch>
  );
}
