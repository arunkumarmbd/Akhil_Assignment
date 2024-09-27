import React from 'react';
import { Card } from 'react-bootstrap';
import goalImg from "../assets/logo.png"

const WeDoCard = ({ picture, Title, Text, Btext }) => {
  return (
    <>


      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>
            {Text}
          </Card.Text>
          <div className='btnSetting'>

          <a href="#" className='default-btn btn'>{Btext}</a>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default WeDoCard;