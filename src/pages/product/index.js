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

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogin: false,
      show: "",
      setShow: false,
      data: [],
    };
  }
  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  buttonLogin() {
    const { username, password } = this.state;
    const url = "http://localhost:8080/api/authenticate";
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
        const { token } = data;

        console.log("token ", data);
        if (token) {
          localStorage.setItem("token", token); // for persistent login
          this.props.loginHandler(token);
          this.setState({ isLogin: true });
          // this.props.statuslog(true)
        } else {
          alert("Username & Password Invalid");
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  renderList = () => {
    console.log(this.state.data);
    const list = this.props.users.map((user, idx) => {
      return (
        <tr key={idx}>
          <th scope="raw">{idx + 1}</th>
          <td>{user.username}</td>
          <td>{user.address.city}</td>
          <td>
            <button onClick={() => this.props.setUser(idx)}>Update</button>
          </td>
          <td>
            <button onClick={() => this.deleteUser(idx)}>Delete</button>
          </td>
        </tr>
      );
    });
    return list;
  };
  render() {
    console.log("Login", this.props.statusLogin);
    return (
      <Container style={{ paddingTop: "15px" }}>
        <Row>
          <Col sm={8}>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Item</th>
                  <th scope="col">Item</th>
                  <th scope="col" colSpan="2" style={{textAlign :"center"}}>Action</th>
                </tr>
              </thead>
              <tbody>
              {this.renderList()}
              </tbody>
            </table>
          </Col>
          <Col sm={4}>Price</Col>
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
      statusLogin: true,
    }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);

/**
 * LOGIN -->  User
 *                List Tabel Buku Order
 *                Order Buku
 *                Chekcout
 */
