import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navigation.module.css";
import logo from "../../../assets/logo.png";
import { CartWidget } from "../../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" className={styles.navbar__logo} />
        </Navbar.Brand>
        <Nav className="d-flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/category/grass">Grass</Link>
          <Link to="/category/fire">Fire</Link>
          <Link to="/category/water">Water</Link>
          <Link to="/category/electric">Electric</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About us</Link>
          <Link to="/dashboard">Dash</Link>
        </Nav>
      </Container>
      <CartWidget />
    </Navbar>
  );
};
