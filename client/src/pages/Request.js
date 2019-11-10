import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Request extends React.Component {
  render() {
    const formStyle = {
      padding: "0 100px"
    };

    return (
      <Form style={formStyle}>
        <Form.Group controlId="requesTtitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter what you need here" />
        </Form.Group>

        <Form.Group controlId="reqDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Describe what you need here"
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
