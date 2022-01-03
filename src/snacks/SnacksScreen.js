import { Card, Col, Row } from "react-bootstrap";

export default function SnacksScreen() {
  const menu = ["cola", "chips", "popcorn", "ferris"];

  return (
    <p>
      <Row>
        {menu.map((name) => (
          <Col>
            <Card>
              <Card.Img
                src="https://raw.githubusercontent.com/Geal/nom/master/assets/nom.png"
                alt="a cute monster eating something"
                width="200"
              />
              <Card.Title>{name}</Card.Title>
            </Card>
          </Col>
        ))}
      </Row>
    </p>
  );
}
