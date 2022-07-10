import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

import './Card.css';

type CardProps = { location: any };

const LocationCard: React.FC<CardProps> = ({ location }: CardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/location/' + location.id, { state: location });
  };
  return (
    <Card onClick={handleClick} className="location-card">
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
