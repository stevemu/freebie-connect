import React from "react";
import { connect } from "react-redux";
import { updateAuthToken } from "../actions/auth";
import { useAuth0 } from "../react-auth0-spa";

function Home(props) {

  return (
    <div>
      <button
        onClick={() => {
          props.updateAuthToken("sdf");
        }}
      >
        test
      </button>
      Home2
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authToken: state.authToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAuthToken: token => dispatch(updateAuthToken(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
