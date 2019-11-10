import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "../react-auth0-spa";
import {
  useHistory
} from "react-router-dom";
import useToken from "../hooks/useToken";
import {createRequest} from '../api/api';

function Request(props) {

  let history = useHistory();
  let [city, setCity] = useState("");
  let [desc, setDesc] = useState("");
  let [title, setTitle] = useState("");
  let [token] = useToken();
  if (!token) {
    return <div>loading...</div>
  }

  const formStyle = {
    width: "50%",
    margin: "0 25%"
  };

  async function onSubmit(e) {
    e.preventDefault();

    // validate
    if (!title || !desc || !city) {
      alert("Please enter all fields");
      return;
    }

    // make backend request
    await createRequest(title, desc, city, token);
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
          onChange={(e) => {
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
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group controlId="reqDescription">
        <Form.Label>Item Description</Form.Label>
        <Form.Control
          value={desc}
          as="textarea"
          placeholder="Describe what you need here"
          rows="5"
          name="desc"
          onChange={(e) => {
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

export default Request;

// class Request extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: "",
//       desc: "",
//       city: ""
//     };
//   }

//   onChangeText = e => {
//     this.setState(
//       {
//         [e.target.name]: e.target.value
//       }
//     );
//   };

//   onSubmit = (e) => {
//     e.preventDefault();

//     // validate
//     if (!this.state.title || !this.state.desc || !this.state.city) {
//       alert("Please enter all fields");
//       return;
//     }

//     // make backend request

//     console.log(this.state);
//   }

//   render() {
//     const formStyle = {
//       width: "50%",
//       margin: "0 25%"
//     };

    
// }

// export default Request;
