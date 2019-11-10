import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import hammer from "../images/shovel.jpg";

function ItemCard(props) {
  let { title, desc, borderStyle } = props;
  return (
    <Card border={borderStyle}>
      {/* <Card.Header>Category</Card.Header> */}
      {/* <Card.Img variant="top" src={hammer} /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">Respond</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;