import React, { useState } from "react";
import { connect } from "react-redux";
import { updateAuthToken } from "../actions/auth";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import ListGroup from "react-bootstrap/ListGroup";
function Home(props) {
  const homeStyle = {
    margin: "0 25%"
  };
  return (
    <div>
      <Card style={{width:'18rem'}}>
        <Card.Img variant="top" src="images/test.png/100px180"/>
        <Card.Body>
          <Card.Title> Offer </Card.Title>
          <Card.Text>
          Got Shovel for you to use
          </Card.Text>
          <Button variant="primary">Go Get It</Button>
        </Card.Body>
      </Card>
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
