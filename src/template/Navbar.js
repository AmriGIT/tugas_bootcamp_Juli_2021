import React, { Component } from "react";
import { Row, Navbar as Navbarbro, Container, Nav } from "react-bootstrap";
import Menu from "../components/menu";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Navbarbro bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Menu target="/">Home</Menu>
              <Menu target="/contact">Contact</Menu>
              <Menu target="/login">Log In</Menu>
              <Menu target="/login-master">Login Master</Menu>
              {this.props.setsts ? 
              <Menu target="/profil">Profil</Menu>
              : ""}
            </Nav>
          </Container>
        </Navbarbro>
      </Row>
    );
  }
}

export default Navbar;
