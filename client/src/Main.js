import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Request from "./pages/Request";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";

function Main() {
  return (
    <>
      <NavBar />
      <Switch>
        <PrivateRoute path="/offer">
          <Offer />
        </PrivateRoute>
        <PrivateRoute path="/request">
          <Request />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default Main;
