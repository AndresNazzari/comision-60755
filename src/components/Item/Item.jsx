/* eslint-disable react/prop-types */
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ id, name, image }) => {
  const handleOnClick = () => {
    console.log("click");
  };

  return (
    <Card style={{ width: "18rem", cursor: "pointer" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/products/${id}`} onClick={handleOnClick}>
          Detalles
        </Link>
      </Card.Body>
    </Card>
  );
};
