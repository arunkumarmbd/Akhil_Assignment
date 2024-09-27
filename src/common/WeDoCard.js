import React from 'react';
import { Card } from 'react-bootstrap';
import goalImg from "../assets/logo.png"

const WeDoCard = ({ picture, Title, Text }) => {
  return (
    <>


      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>
            {Text}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default WeDoCard;