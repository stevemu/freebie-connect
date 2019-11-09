import React, { Component } from "react";

import { Form, Button } from "../../node_modules/react-bootstrap";

class Offer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      title: "",
      description: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputDescription = this.handleInputDescription.bind(this);
  }

  handleInputName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleInputEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleInputTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleInputDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleSubmit(e) {
    alert(`
      Name: ${this.state.name}
      Email: ${this.state.email}
      Item Title: ${this.state.title}
      Item Description: ${this.state.description}
    `);
    e.preventDefault();
  }

  render() {
    return (
      <Form
        style={{ width: "50%", margin: "0 25%" }}
        onSubmit={this.handleSubmit}
      >
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter your name here"
            value={this.state.name}
            onChange={this.handleInputName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            size="sm"
            type="email"
            placeholder="Enter your contact email here"
            value={this.state.email}
            onChange={this.handleInputEmail}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Item Title</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter the item you want"
            value={this.state.title}
            onChange={this.handleInputTitle}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            value={this.state.description}
            onChange={this.handleInputDescription}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Offer;
