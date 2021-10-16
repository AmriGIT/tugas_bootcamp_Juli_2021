import React, { Component } from "react";
import { Row, Navbar as Navbarbro, Container, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import Menu from "../components/menu";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin : false
    };
  }

  // componentDidMount =()=>{
  //   this.setState({
  //     isLogin : this.props.sts2
  //   })
  // }
  render() {
    console.log("Nvbar", this.props.statusLogin3)
    return (
      <Row>
        <Navbarbro bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Menu target="/">Home</Menu>
              <Menu target="/login-master">Login Master</Menu> 
              <Menu target="/product">Buku</Menu> 
              
            </Nav>
          </Container>
        </Navbarbro>
      </Row>
    );
  }
}
const mapStateToProps = (state) => ({
  statusLogin3: state.statusLogin,
});
export default connect(mapStateToProps) (Navbar);
