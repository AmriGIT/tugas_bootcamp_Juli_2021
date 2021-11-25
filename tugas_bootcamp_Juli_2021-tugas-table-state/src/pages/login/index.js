import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      address: "",
      isLogin: false,
    };
  }

  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  loginButton = () => {
    const { username, password } = this.state;
    const result = this.props.allUser.find((obj) => obj.username === username);
    if (result != null) {
      if (username === result.username && password === result.password) {
        // Bagaimana caranya me-reset value input ketika login success
        this.setState({ isLogin: true });
        this.resetForm();
        this.props.cekLogin("contact");
      } else alert("Invalid username or password!!");
    } else {
      alert("Username Invalid");
    }
  };
  cekdata = () => {
    const result = this.props.allUser.find(
      (obj) => obj.username === this.state.username
    );
    console.log(result.username);
  };

  registerButton = () => {
    const { username, password, address } = this.state;
    const newUser = {
      username,
      password,
      address,
    };
    this.props.addData(newUser);
  };

  render() {
    return (
      <div
        style={{
          padding: 60,
          paddingBottom: 10,
          color: "#4e9488",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            borderBottom: 1,
            borderBottomColor: "black",
            borderBottomStyle: "solid",
          }}
        >
          HALAMAN LOGIN
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.setValue}
              value={this.state.username}
              type="email"
              placeholder="Enter email"
              name="username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.setValue}
              value={this.state.password}
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button onClick={this.loginButton} variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <h1
          style={{
            textAlign: "center",
            borderBottom: 1,
            borderBottomColor: "black",
            borderBottomStyle: "solid",
          }}
        >
          Registrasi
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={this.setValue}
              value={this.state.username}
              type="email"
              placeholder="Enter email"
              name="username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.setValue}
              value={this.state.password}
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button onClick={this.registerButton} variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <h1
          style={{
            textAlign: "center",
            borderBottom: 1,
            borderBottomColor: "black",
            borderBottomStyle: "solid",
          }}
        >
        </h1>
        {/* <div className="login-containter">
          <div className="row-button">
            <button onClick={this.loginButton}>Log In</button>
            <button onClick={this.registerButton}>Register</button>
            <button onClick={this.cekdata}>cek</button>
          </div>
        </div> */}
      </div>

    );
  }
}

export default Login;
