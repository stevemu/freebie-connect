import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";
import { updateAuthToken } from "./actions/auth";
import { updateUser } from "./actions/user";
import useToken from "./hooks/useToken";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Request from "./pages/Request";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import { useAuth0 } from "./react-auth0-spa";

function Main(props) {
  const { user } = useAuth0();
  let [token] = useToken();

  useEffect(() => {
    if (token) {
      props.updateAuthToken(token);
    }
    if (user) {
      props.updateUser(user);
    }
  }, [token, user]);


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

const mapStateToProps = state => {
  return {
    authToken: state.authToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAuthToken: token => dispatch(updateAuthToken(token)),
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

