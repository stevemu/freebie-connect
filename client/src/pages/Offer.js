import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { createOffer } from "../api/api";
import { connect } from "react-redux";

function Offer(props) {
  let {authToken} = props;
  let history = useHistory();
  let [city, setCity] = useState("");
  let [desc, setDesc] = useState("");
  let [title, setTitle] = useState("");

  const formStyle = {
    width: "50%",
    margin: "0 25%",
    padding: "10px 0"
  };

  async function onSubmit(e) {
    e.preventDefault();

    // validate
    if (!title || !desc || !city) {
      alert("Please enter all fields");
      return;
    }

    // make backend request
    await createOffer(title, desc, city, authToken);
    history.push("/");
  }

  return (
    <Form style={formStyle}>
      <Form.Group controlId="requesTtitle">
        <Form.Label>Item Title</Form.Label>
        <Form.Control
          value={title}
          type="text"
          name="title"
          placeholder="Enter what you need here"
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          value={city}
          size="sm"
          type="text"
          name="city"
          placeholder="Enter your city"
          onChange={e => {
            setCity(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="reqDescription">
        <Form.Label>Item Description</Form.Label>
        <Form.Control
          value={desc}
          as="textarea"
          placeholder="Describe what you want to offer or lend here. Be sure to include how people should contact you, eg. phone number or email."
          rows="5"
          name="desc"
          onChange={e => {
            setDesc(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
}
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
)(Offer);
