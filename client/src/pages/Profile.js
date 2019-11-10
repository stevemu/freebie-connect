import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Form, Button} from "react-bootstrap";


const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }
const formStyle = {
  padding: "0 100px"
};
  return (
    <Form style={{ width: "30%", margin: "5% 0 5% 25%" }}>
      <Form.Group controlId="requesTtitle">
        <Form.Group controlId="reqDescription">
          <Form.Label>Email</Form.Label>
          <p>{user.email}</p>
        </Form.Group>

        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Profile
      </Button>
    </Form>
  );
};

export default Profile;