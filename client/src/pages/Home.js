import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateAuthToken } from "../actions/auth";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";
import { useAuth0 } from "../react-auth0-spa";
import { getRequests, getOffers } from "../api/api";

import ItemCard from "../components/ItemCard";

function Home(props) {
  const { loading, getTokenSilently } = useAuth0();
  const [requests, setRequests] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    if (loading) return;
    fetchRequests();
    fetchOffers();
  }, [loading]);

  async function fetchRequests() {
    let token = await getTokenSilently();
    let requests = await getRequests(token);
    setRequests(requests);
  }

  async function fetchOffers() {
    let token = await getTokenSilently();
    let offers = await getOffers(token);
    setOffers(offers);
  }


  return (
    <div
      className="container"
      style={{
        padding: "10px 10px"
      }}
    >
      {/* <div className="row"> */}
        <div className="d-flex flex-column"> 
          <h1>Offers</h1>
          <CardColumns>
            {offers.map(offer => {
              return (
                <ItemCard key={offer._id} {...offer} bg = "primary" text="white" style={{width:'18rem'}} />
              );
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
