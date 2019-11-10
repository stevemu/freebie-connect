import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateAuthToken } from "../actions/auth";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
// import ListGroup from "react-bootstrap/ListGroup";
import test from "../images/test.png";
import test1 from "../images/shovel.jpg";
import test2 from "../images/hammer.jpg";

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
      let requests = await getRequests(token);
      console.log(requests);
    }
    init();
  }


  const homeStyle = {
    margin: "0 25%"
  };
  return (
    <div>
      <div classname="container">
        <h1> Offers</h1>
        <div classname="row">
          <div className="col-sm-6 col-sm-6">
            <CardGroup>
              <Card border="success" >
                {/* <Card.Header>Category</Card.Header> */}
                <Card.Img variant="top" src={test} />
                <Card.Body>
                  <Card.Title> Offering Latter </Card.Title>
                  <Card.Text>Got Latter for you to use</Card.Text>
                  <Button variant="primary">Go Get It</Button>
                </Card.Body>
              </Card>
              <Card border="success" >
                {/* <Card.Header>Category</Card.Header> */}
                <Card.Img variant="top" src={test1} />
                <Card.Body>
                  <Card.Title> Offering Shovel </Card.Title>
                  <Card.Text>Got Shovel for you to use</Card.Text>
                  <Button variant="primary">Go Get It</Button>
                </Card.Body>
              </Card>
              <Card border="success" >
                {/* <Card.Header>Category</Card.Header> */}
                <Card.Img variant="top" src={test2} />
                <Card.Body>
                  <Card.Title> Offering Hammer </Card.Title>
                  <Card.Text>Got Hammer for you to use</Card.Text>
                  <Button variant="primary">Go Get It</Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
          <div className="col-sm-6 col-sm-6">
            <h1>Requests</h1>
            <CardGroup>
              <Card border="danger" >
                {/* <Card.Header>Category</Card.Header> */}
                <Card.Img variant="top" src={test} />
                <Card.Body>
                  <Card.Title> Need Skiing Gears </Card.Title>
                  <Card.Text>Need to borrow skiing gears</Card.Text>
                  <Button variant="primary">Respond</Button>
                </Card.Body>
              </Card>
              <Card border="danger">
                {/* <Card.Header>Category</Card.Header> */}
                <Card.Img variant="top" src={test2} />
                <Card.Body>
                  <Card.Title> Need Hammer </Card.Title>
                  <Card.Text>Need to borrow a Hammer</Card.Text>
                  <Button variant="primary">Respond</Button>
                </Card.Body>
              </Card>
              <Card border="danger" >
                {/* <Card.Header>Category</Card.Header> */}
                <Card.Img variant="top" src={test1} />
                <Card.Body>
                  <Card.Title> Need a Shovel </Card.Title>
                  <Card.Text>Need to borrow a shovel</Card.Text>
                  <Button variant="primary">Respond</Button>
                </Card.Body>
              </Card>
            </CardGroup>
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
