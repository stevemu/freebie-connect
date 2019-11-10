import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateAuthToken } from "../actions/auth";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import { useAuth0 } from "../react-auth0-spa";
import { getRequests, getOffers } from "../api/api";

import ItemCard from "../components/ItemCard";

function Home(props) {
  let { authToken } = props;

  const [requests, setRequests] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    if (!authToken) return;
    fetchRequests();
    fetchOffers();
  }, [authToken]);

  async function fetchRequests() {
    let requests = await getRequests(authToken);
    setRequests(requests);
  }

  async function fetchOffers() {
    let offers = await getOffers(authToken);
    setOffers(offers);
  }

  return (
    <div
      className="container"
      style={{
        padding: "10px 10px"
      }}
    >
      <div className="d-flex flex-column">
        <h1>Offers</h1>
        <CardColumns>
          {offers.map(offer => {
            return <ItemCard key={offer._id} {...offer} borderStyle="danger" />;
          })}
        </CardColumns>

        <h1>Requests</h1>
        <CardColumns>
          {requests.map(request => {
            return (
              <ItemCard key={request._id} {...request} borderStyle="danger" />
            );
          })}
        </CardColumns>
      </div>
    </div>
    // </div>
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
