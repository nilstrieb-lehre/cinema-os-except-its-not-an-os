import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import data from '../data.json';
import { formatCurrency } from '../helper';

export default function SnacksScreen() {
  return (
    <p>
      <Row>
        {Object.entries(data.snacks).map(([code, snack]) => (
          <Col key={code}>
            <NavLink className="text-decoration-none" to={`/snacks/${code}`}>
              <Card>
                <Card.Img src={snack.image} alt={`An image of ${snack.name}`} />
                <Card.Title>{snack.name}</Card.Title>
                <Card.Footer>{formatCurrency(snack.price)}</Card.Footer>
              </Card>
            </NavLink>
          </Col>
        ))}
      </Row>
    </p>
  );
}
