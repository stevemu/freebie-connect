import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateAuthToken } from "../actions/auth";
import ListGroup from "react-bootstrap/ListGroup";
import { useAuth0 } from "../react-auth0-spa";

import { getRequests } from "../api/api";

function Home(props) {
  const { loading, getTokenSilently } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  } else {
    async function init() {
      let token = await getTokenSilently();
      console.log(token);
      let requests = await getRequests();
    }
    init();
  }

  console.log(getTokenSilently);
  // console.log(getTokenSilently);
  // const [requests, setRequests] = useState([]);
  // console.log(requests);

  // useEffect(() => {
  //   initData();
  // }, []);

  // async function initData() {
  //   const token = await getTokenSilently();
  //   let requests = await getRequests(token);
  //   setRequests(requests);
  // }

  const homeStyle = {
    margin: "0 25%"
  };
  return (
    <div>
      <div class="container" style={homeStyle}>
        <div class="row">
          <div calss="col-sm-6 col-sm-6">
            <h1>Offers</h1>
            <ListGroup variant="flush">
              <ListGroup.Item action href="#link1">
                Got Shovel for you to use
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Got a bed for free
              </ListGroup.Item>
            </ListGroup>
          </div>

          <div class="col-sm-6 col-sm-6">
            <h1>Requests</h1>
            <ListGroup variant="flush">
              <ListGroup.Item action href="link1">
                Need a hammer please
              </ListGroup.Item>
              <ListGroup.Item action="#link">
                {" "}
                Need to borrow skiing gears
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
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
