import React from "react";

import { Form, Button } from "react-bootstrap";

function Offer() {
  return (
    <Form style={{ width: "50%", margin: "0 25%" }}>
      {/* <Form.Group> */}
      {/* <Form.Label>Name</Form.Label>
        <Form.Control
          size="sm"
          type="text"
          placeholder="Enter your name here"
        />
      </Form.Group> */}

      <Form.Group>
        <Form.Label>Item Title</Form.Label>
        <Form.Control
          size="sm"
          type="text"
          placeholder="Enter the item you want"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control size="sm" type="text" placeholder="Enter your city" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Item Description</Form.Label>
        <Form.Control as="textarea" rows="5" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Offer;
