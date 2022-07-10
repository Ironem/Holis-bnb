import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DisplayLocation.css';
import { Location } from '../../types';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

type DisplayLocationPageProps = {};

const DisplayLocationPage: React.FC<DisplayLocationPageProps> = () => {
  // Create a function to handle price change and persist it to database
  const locationReactObject = useLocation();
  const [location, setLocation] = useState<Location | undefined>();

  // Create a function to delete the location and persist it to database
  useEffect(() => {
    console.log(locationReactObject);
    if (locationReactObject.state) {
      setLocation(locationReactObject.state as Location);
    }
  }, []);

  return location !== undefined ? (
    <div>
      {/* image */}
      <div className="displayed-img">
        <img src={location.picture} />
      </div>
      <Container style={{ marginTop: 10 }}>
        <Row>
          <Col sm={8}>
            {/* title */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>
                {location.title}, {location.location}
              </h3>
              {/* price */}
              <div style={{ marginTop: 8, marginRight: 10 }}>
                €{location.price.toLocaleString().replace(/(\s+)/, ',')} nigth
              </div>
            </div>
            {/* property type */}
            <h4>
              {location.category.name} {location.numberOfRooms}{' '}
              {location.numberOfRooms > 1 ? 'Rooms' : 'Room'}
            </h4>
            {/* category description */}
            <p>{location.category.description}</p>
          </Col>

          <Col sm={4}>
            {/* price input */}
            {/* price button */}
            {/* delete button */}
            <Card className="price-card">
              <Card.Body>
                <Card.Title>Modify price</Card.Title>
                <input value={location.price} />
                <br />
                <Button variant="danger">Delete</Button>
                <Button>Confirm</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  ) : null;
};

export default DisplayLocationPage;
