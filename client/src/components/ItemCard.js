import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import hammer from "../images/shovel.jpg";

function ItemCard(props) {
  let { title, desc, borderStyle, createdByEmail } = props;
  return (
    <Card border={borderStyle}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
