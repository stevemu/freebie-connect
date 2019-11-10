
import React, {useState } from 'react';
import { connect } from "react-redux";
import { updateAuthToken } from "../actions/auth";

function Home(props) {

  return (
    <div>
      Home
      
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