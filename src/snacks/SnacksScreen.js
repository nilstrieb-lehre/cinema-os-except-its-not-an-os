import { Card, Col, Row } from 'react-bootstrap';

export default function SnacksScreen() {
  const menu = ['cola', 'chips', 'popcorn', 'ferris'];

  return (
    <p>
      <Row>
        {menu.map((name) => (
          <Col>
            <Card onClick={() => console.log('snacked')}>
              <Card.Img
                src="https://raw.githubusercontent.com/Geal/nom/master/assets/nom.png"
                alt="a cute monster eating something, from the Rust crate nom"
                width="200"
              />
              <Card.Title>{name}</Card.Title>
              <Card.Footer>{Math.ceil(Math.random() * 5)}.-</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </p>
  );
}
