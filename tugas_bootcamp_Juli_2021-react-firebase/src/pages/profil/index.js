// import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { FirebaseContext } from "../../firebase";
import {
  Col,
  Form,
  Row,
  Table,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { connect } from "react-redux";
// import { decodeToken } from "react-jwt";
class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username : "",
        password : ""
    };
  }
//   cekValue = () => {
//     const { statusLogin, token } = this.props;
//     console.log(statusLogin);
//     const decodetoken = decodeToken(token);
//     console.log("username", decodetoken.sub ?? "");
//   };

onRegisterFirebase = () => {
    const { username, password } = this.state;
    this.props.firebase
      .createUser({
        email: username,
        password,
      })
      .then((userCredential) => {
        console.log("userCredential:", userCredential);
        alert("User created!");
      })
      .catch((err) => {
        console.warn("ERROR:", err);
        alert(err.message);
      });
  };

  renderList = () => {
    // const listdata = this.props.data.map((datas, idx) => {
    //   console.log("datasss ", datas);
    //   return (
    //     <tr key={idx}>
    //       <td>{idx + 1}</td>
    //       <td>{datas.name}</td>
    //       <td>{datas.address}</td>
    //       <td>
    //         <Button variant="primary" type="button">
    //           Update
    //         </Button>
    //       </td>
    //       <td>
    //         <Button>Delete</Button>
    //       </td>
    //     </tr>
    //   );
    // });
    // return listdata;
  };
  componentDidMount() {
    setTimeout(this.renderList, 3000);
  }
  render() {
    return (
      <Row style={{ paddingTop: "10px" }}>
        {console.log("Index Product ", this.props.data)}
        <Col sm={8}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th scope="col" onClick={this.cekValue}>
                  No
                </th>
                <th scope="col">Nama</th>
                <th scope="col">Address</th>
                <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </Table>
        </Col>
        <Col sm={4}>
          <Form>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Username" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Password">
                <Form.Control type="text" placeholder="Password" />
              </FloatingLabel>
            </Form.Group>
            <Button onClick={this.onRegisterFirebase} variant="primary" type="button">
              Simpan
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
//   statusLogin: state.statusLogin,
//   token: state.loginRedux.token,
//   data: state.dataRedux.data,
});

const mapDispatchToProps = dispatch =>({
//   dataHandler : data => dispatch({
//     type : "GETALL",
//     data : data
//   })
})
export default connect(mapStateToProps, mapDispatchToProps)(Profil);

/**
 * LOGIN -->  User
 *                List Tabel Buku Order
 *                Order Buku
 *                Chekcout
 */
