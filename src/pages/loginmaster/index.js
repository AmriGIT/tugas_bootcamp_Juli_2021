// // import Button from "@restart/ui/esm/Button";
// import React, { Component } from "react";
// import {
//   Form,
//   Button,
//   Container,
//   Row,
//   Card,
//   Col
// } from "react-bootstrap";
// import { connect } from "react-redux";

// class LoginMaster extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       isLogin: false,
//       show: "",
//       setShow: false,
//     };
//   }
//   setValue = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   resetForm = () => {
//     this.setState({
//       username: "",
//       password: "",
//       isLoading :false,
//     });
//   };



//   loginButton = () => {
//     this.setState({
//       isLoading:true
//     })
//     const { username, password } = this.state;

//     fetch("http://localhost:8080/api/authenticate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     }).then(async (resp) => {
//       const data = await resp.json();
//       const { token } = data;
//       if (token) {
//         localStorage.setItem("token", token);
//         this.props.loginHandler(token);
//         this.props.history.push("/product")
//       } else {
//         alert("Gagal Login");
//       }
//       console.log("status_Login di Props ",this.props.statusLogin);
//     })
//   };

//   render() {
    
//     return (
//       <Container style={{ paddingTop: "15px" }}>
//         <Row className="justify-content-md-center">
//           <Col xs={6}>
//             <Card>
//               <Card.Header>Login Master</Card.Header>
//               <Card.Body>
//                 <Card.Title>Login Master</Card.Title>
//                 <Form>
//                   <Card.Text>{this.state.username}</Card.Text>
//                   <Card.Text>{this.state.password}</Card.Text>
//                   {/* {this.props.statusLogin ? (
//                     <>
//                       <Alert variant="success">Success</Alert>{" "}
//                       <Redirect to="/product" />
//                     </>
//                   ) : (
//                     ""
//                   )} */}
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control
//                       type="input"
//                       name="username"
//                       onChange={this.setValue}
//                       placeholder="Enter email"
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                       type="password"
//                       name="password"
//                       onChange={this.setValue}
//                       placeholder="Password"
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                   </Form.Group>
//                   <Button
//                     onClick={this.loginButton}
//                     // onClick={this.props.loginHandler}
//                     variant="primary"
//                     type="button"
//                   >
//                     Login
//                   </Button>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   statusLogin: state.loginRedux.statusLogin,
//   token: state.loginRedux.token,
// });

// const mapDispatchToProps = (dispatch) => ({
//   loginHandler: (token) =>
//     dispatch({
//       type: "LOGIN_OK",
//       payload: token,
//     }),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(LoginMaster);


