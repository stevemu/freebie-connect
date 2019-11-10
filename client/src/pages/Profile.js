import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Form, Button } from "react-bootstrap";
import { getProfile, updateProfile } from "../api/api";
import { connect } from "react-redux";

const Profile = (props) => {
  let {authToken} = props;
  // const { loading, getTokenSilently, user } = useAuth0();
  const [name, setName] = useState("");

  useEffect(() => {
    if (!authToken) return;
    fetchProfile();
  }, [authToken]);

  async function fetchProfile() {
    let profile = await getProfile(authToken);
    setName(profile.name);
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  async function onUpdateProfile(e) {
    e.preventDefault();
    await updateProfile(authToken, name);
  }

  return (
    <Form style={{ width: "30%", margin: "5% 0 5% 25%" }}>
      <Form.Group controlId="requesTtitle">
        <Form.Group controlId="reqDescription">
          <Form.Label>Email</Form.Label>
          <p>{"email"}</p>
        </Form.Group>

        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          type="text"
          placeholder="Enter your name"
          onChange={onNameChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onUpdateProfile}>
        Update Profile
      </Button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    authToken: state.authToken
  };
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
