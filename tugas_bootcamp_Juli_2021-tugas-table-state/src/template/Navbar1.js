import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

class Navbar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <div style={{
      //     marginTop: 10,
      //     display: 'flex',
      //     justifyContent: "flex-start",
      //     gap: 10,
      //     alignItems: "center"
      // }}>
      // <Menu color="red" fn={() => this.props.goToPage("home")}>Home</Menu>
      //     <Menu color="green" fn={() => this.props.goToPage("contact")}>Contact</Menu>
      //     <Menu color="blue" fn={() => this.props.goToPage("login")}>Log In</Menu>
      // </div>
      // <Navbar bg="light" expand="lg">
      //   <Container>
      //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Nav className="me-auto">
      //         <Nav href="#" onClick={()=>this.props.goToPage("home")}>Home</Nav>
      //         <Nav href="#" onClick={()=>this.props.goToPage("contact")}>Contact</Nav>
      //         <Nav href="#" onClick={()=>this.props.goToPage("login")}>Login</Nav>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>

      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#" onClick={()=>this.props.goToPage("home")}>Home</Nav.Link>
        <Nav.Link href="#" onClick={()=>this.props.goToPage("contact")}>Contact</Nav.Link>
        <Nav.Link href="#"onClick={()=>this.props.goToPage("login")}>Login</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    );
  }
}

export default Navbar1;
