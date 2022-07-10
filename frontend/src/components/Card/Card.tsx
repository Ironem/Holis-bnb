import React from 'react';
import Card from 'react-bootstrap/Card';

import './Card.css';

type CardProps = { location: any };

const LocationCard: React.FC<CardProps> = ({ location }: CardProps) => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <Card onClick={handleClick}>
      <div className="picture">
        <Card.Img variant="top" src={location.picture} />
      </div>
      <Card.Body>
        <Card.Title>
          {location.title}, {location.location}
        </Card.Title>
        <Card.Text>{location.description}</Card.Text>
        <Card.Text>€{location.price.toLocaleString().replace(/(\s+)/, ',')} nigth</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LocationCard;
