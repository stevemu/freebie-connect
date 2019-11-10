import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Form, Button } from "react-bootstrap";
import { getProfile, updateProfile } from "../api/api";

const Profile = () => {
  const { loading, getTokenSilently, user } = useAuth0();
  const [name, setName] = useState("");

  useEffect(() => {
    if (loading) return;
    fetchProfile();
  }, [loading]);

  async function fetchProfile() {
    let token = await getTokenSilently();
    let profile = await getProfile(token);
    setName(profile.name);
  }

  function onNameChange(e) {
    setName(e.target.value);
  }

  async function onUpdateProfile(e) {
    e.preventDefault();
    let token = await getTokenSilently();
    await updateProfile(token, name);
  }

  return (
    <Form style={{ width: "30%", margin: "5% 0 5% 25%" }}>
      <Form.Group controlId="requesTtitle">
        <Form.Group controlId="reqDescription">
          <Form.Label>Email</Form.Label>
          <p>{user && user.email}</p>
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

export default Profile;
