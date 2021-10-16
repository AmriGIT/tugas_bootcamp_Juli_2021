// import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Card,
  Col,
  Alert,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router";


class LoginMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogin: false,
      show: "",
      setShow: false,
    };
  }
  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  buttonLogin() {
    const { username, password } = this.state;
    const url = "https://gist.githubusercontent.com/reberhardt/1424783/raw/64449c53538b4dc016601aed0154f38e8de53f59/dluser.json";
    const headers = {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json",
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: headers,
    })
      .then(async (respone) => {
        const data = await respone.json();
        const {token } = data;

        console.log("token ", data);
        if (token) {
          localStorage.setItem("token", token); // for persistent login
          this.props.loginHandler(token);
          this.setState({isLogin : true})
          // this.props.statuslog(true)
          
        } else {
          alert("Username & Password Invalid");
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  render() {
    console.log("Login",this.props.statusLogin)
    return (
      <Container style={{ paddingTop: "15px" }}>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Card>
              <Card.Header>Login Master</Card.Header>
              <Card.Body>
                <Card.Title>Login Master</Card.Title>
                <Form>
                  <Card.Text>{this.state.username}</Card.Text>
                  <Card.Text>{this.state.password}</Card.Text>
                  {this.props.statusLogin ? (
                    <>
                      <Alert variant="success">Success</Alert>{" "}
                      <Redirect to="/profil" />
                    </>
                  ) : (
                    ""
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="input"
                      name="username"
                      onChange={this.setValue}
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={this.setValue}
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button
                    onClick={() => this.buttonLogin(true)}
                    // onClick={this.props.loginHandler}
                    variant="primary"
                    type="button"
                  >
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
  statusLogin: state.statusLogin,
});

const mapDispatchToProps = (dispatch) => ({
  loginHandler: (token) =>
    dispatch({
      type: "LOGIN_OK",
      payload: token,
      statusLogin : true
    }),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginMaster);





/**
 * LOGIN -->  User
 *                List Tabel Buku Order
 *                Order Buku
 *                Chekcout
 */