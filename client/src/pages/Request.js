import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Request extends React.Component {
  render() {
    const formStyle = {
      width: "50%",
      margin: "0 25%"
    };

    return (
      <Form style={formStyle}>
        <Form.Group controlId="requesTtitle">
          <Form.Label>Item Title</Form.Label>
          <Form.Control type="text" placeholder="Enter what you need here" />
        </Form.Group>

        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter your city" />
        </Form.Group>

        <Form.Group controlId="reqDescription">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Describe what you need here"
            rows="5"
            
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Request;
