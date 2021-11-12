// // import Button from "@restart/ui/esm/Button";
// import React, { Component } from "react";
// import { Col, Form, Row, Table, Button, FloatingLabel } from "react-bootstrap";
// import { connect } from "react-redux";
// import { decodeToken } from "react-jwt";
// import axios from "axios";
// class Product extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       renderData: [],
//     };
//   }
//   cekValue = () => {
//     const { statusLogin, token } = this.props;
//     console.log(statusLogin);
//     const decodetoken = decodeToken(token);
//     console.log("username", decodetoken.sub ?? "");
//   };
//   renderList = () => {
//     const listdata = this.props.data.map((datas, idx) => {
//       console.log("datasss ", datas);
//       return (
//         <tr key={idx}>
//           <td>{idx + 1}</td>
//           <td>{datas.name}</td>
//           <td>{datas.address}</td>
//           <td>
//             <Button variant="primary" type="button">
//               Update
//             </Button>
//           </td>
//           <td>
//             <Button>Delete</Button>
//           </td>
//         </tr>
//       );
//     });
//     return listdata;
//   };

//   getData = async () => {
//     const token = localStorage.getItem("token");
//     const res = await axios.get("http://localhost:8080/api/getkeluar", {
//       headers: {
//         Authorization: "Bearer " + token,
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers":
//           "Origin, X-Requested-With, Content-Type, Accept",
//         "Access-Control-Allow-Credentials": "true",
//       },
//     });
//     console.log(res.data);
//     this.setState({
//       renderData: res.data,
//     });
//   };
//   componentDidMount() {
//     setTimeout(this.getData, 3000);
//   }
//   render() {
//     const posts = this.state.renderData.map((post, i) => (
//       <tr key={i}>
//         <td>{i + 1}</td>
//         <td>{post.noagenda}</td>
//         <td>{post.nosurat}</td>
//         <td>{post.isi}</td>
//         <td>{post.tanggal}</td>
//         <td>
//           <Button variant="primary" type="button">
//             Update
//           </Button>
//         </td>
//         <td>
//           <Button>Delete</Button>
//         </td>
//       </tr>
//     ));
//     return (
//       <Row style={{ paddingTop: "10px" }}>
//         <Col>
//         <Form.Control type="text" placeholder="No Agenda" />
//         <Form.Control type="text" placeholder="No Agenda" />
//         </Col>
//         <Col>
//           <Table striped bordered hover variant="dark">
//             <thead>
//               <tr>
//                 <th scope="col" onClick={this.cekValue}>
//                   No
//                 </th>
//                 <th scope="col">No Agenda</th>
//                 <th scope="col">No Surat</th>
//                 <th scope="col">Isi Surat</th>
//                 <th scope="col">Tanggal</th>
//                 <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>{posts}</tbody>
//           </Table>
//         </Col>
//       </Row>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   statusLogin: state.statusLogin,
//   token: state.loginRedux.token,
//   data: state.dataRedux.data,
// });

// const mapDispatchToProps = (dispatch) => ({
//   dataHandler: (data) =>
//     dispatch({
//       type: "GETALL",
//       data: data,
//     }),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Product);

// /**
//  * LOGIN -->  User
//  *                List Tabel Buku Order
//  *                Order Buku
//  *                Chekcout
//  */
