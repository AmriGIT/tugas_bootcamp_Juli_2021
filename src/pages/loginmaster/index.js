// import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { Form, Button, Container, Row, Card, Col, Alert } from "react-bootstrap";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { Redirect } from "react-router";
import { Profil } from "..";
class LoginMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogin: "",
      show:"",
      setShow:false
    };
  }
  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  buttonLogin = (setshow) => {
      const { username, password } = this.state;
    const url = "http://localhost:8080/api/authenticate"
    var headers = {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
    }
    fetch(url,{
        method : "POST",
        body : JSON.stringify(this.state),
        headers: headers
    }).then((respone) =>{
        respone.json().then((result)=>{
            
            console.warn("result", result);
            localStorage.setItem('login', JSON.stringify({
                isLogin : true,
                token: result.token
            }))
            this.props.statuslog(true)
            this.setState({
                isLogin : true
                
            })
        })
    })
};

//   componentDidMount(){
//       this.tokenku()
//   }
//   tokenku(){
//       let store = JSON.parse(localStorage.getItem('login'));
//   }
  render() {
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
                    {this.state.isLogin ?<><Alert  variant="success">Success</Alert> <Redirect to="/profil"/></>  : ""
                    }
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
                      onClick={()=>this.buttonLogin(true)}
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

export default LoginMaster;
