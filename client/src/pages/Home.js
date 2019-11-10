import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateAuthToken } from "../actions/auth";
import CardGroup from "react-bootstrap/CardGroup";
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
  // if (loading) {
  //   return <div>Loading...</div>;
  // } else {
  //   async function fetchRequests() {
  //     let token = await getTokenSilently();
  //     let requests = await getRequests(token);
  //     setRequests(requests);
  //   }
  //   // fetchRequests();
  //   async function fetchOffers() {
  //     let token = await getTokenSilently();
  //     let offers = await getOffers(token);
  //     setOffers(offers);
  //   }
  //   // fetchOffers();

  // }

  const homeStyle = {
    margin: "0 25%"
  };
  return (
    <div>
      <div className="container">
        <h1>Offers</h1>
        <div className="row">
          <div className="col-sm-6 col-sm-6">
            <CardGroup>
              {offers.map(offer => {
                return (
                  <ItemCard key={offer._id} {...offer} borderStyle="danger" />
                );
              })}
            </CardGroup>
          </div>
          <div className="col-sm-6 col-sm-6">
            <h1>Requests</h1>
            <CardGroup>
              {requests.map(request => {
                return (
                  <ItemCard
                    key={request._id}
                    {...request}
                    borderStyle="danger"
                  />
                );
              })}
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
