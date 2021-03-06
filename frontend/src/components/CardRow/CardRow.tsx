import React, { ReactNode, useEffect } from 'react';
import Card from '../Card/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CardRow.css';

type CardRowProps = {
  locations: any[];
  numberOfRooms: number;
};

const CardRow: React.FC<CardRowProps> = ({ locations, numberOfRooms }: CardRowProps) => {
  const [cardRow, setCardRow] = React.useState<ReactNode>([]);
  useEffect(() => {
    const displayCardRow = locations.map((location, key) => {
      return <Card location={location} key={key} />;
    });
    const row = displayCardRow.length > 0 && (
      <Container>
        <Row>
          <Col sm={2}>
            <h5>
              {numberOfRooms} {numberOfRooms > 1 ? 'Rooms' : 'Room'}
            </h5>
          </Col>
          <Col sm={10}>
            <div className="card-row">{displayCardRow}</div>
          </Col>
        </Row>
      </Container>
    );
    setCardRow(row);
  }, []);
  return <>{cardRow}</>;
};

export default CardRow;
