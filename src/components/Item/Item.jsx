/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ id, name, description, price, image }) => {
  const handleonClick = () => {
    console.log("click");
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleonClick}>
          Detalles
        </Button>
      </Card.Body>
    </Card>
  );
};
