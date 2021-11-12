import React, { Component } from "react";
import { Alert, Col, Row, Table, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Moment from "moment";
import axios from "axios";
class Disposisi extends Component {
  constructor(props) {
    super(props);
    this.state = {
        renderData:[],
      menu: false,
      catatan: "",
      isidisposisi: "",
      tgl_dispo: "",
      tujuan: "",
      suratmasuk:"",
      id: "",
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }
  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
getDispo = async()=>{
    const token = localStorage.getItem("token");
    try{
        const res = await axios.get("http://localhost:8080/api/masuk/"+this.props.data.codesurat,{
            headers:{
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            }
        })
        console.log("iki dispo ", res.data)
        this.props.loginHandler(token);
        this.setState({
            renderData: res.data.disposisi
        })
    }catch(err){
        console.log(err)
    }

}
componentDidMount(){
    setTimeout(this.getDispo, 3000);

}
  saveData = async () => {
    const { catatan, isidisposisi, tgl_dispo, tujuan, suratmasuk } = this.state;
    const newTodo = {
      catatan,
      isidisposisi,
      tgl_dispo,
      tujuan,
      suratmasuk: {
        id: this.props.data.id,
      },
    };
    console.log("new todos", newTodo)
    try {
      if (
        catatan !== "" &&
        isidisposisi !== "" &&
        tgl_dispo != "" &&
        tujuan != ""
      ) {
        const res = await axios.post(
          "http://localhost:8080/api/disposisi/",
          newTodo,
          {
            headers: {
              Authorization: "Bearer " + this.props.token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("data ",this.props.data)
        this.getDispo();    
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
      console.log("setrender",this.state.renderData)
    const show = this.state.menu ? "" : "none";

    if (this.props.data.length === 0) {
      alert("Dispoisis Surat Masuk Belum");
      return <Redirect to="/suratmasuk" />;
    } else {
      const posts = this.state.renderData.map((post, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{post.tujuan}</td>
          <td>{post.isidisposisi}</td>
          <td>{Moment(post.tgl_dispo).format("DD-MM-YYYY")}</td>
        </tr>
      ));
    
      return (
        <>
          <Row style={{ paddingTop: "10px" }}>
            <Form style={{ display: show }}>
              {/* <Col>
                    <Form.Control
                    placeholder="id"

                    onChange={this.setValue}
                    />
                </Col> */}
              <Col>
                <Form.Control
                  name="tujuan"
                  placeholder="Tujuan"
                  onChange={this.setValue}
                />
              </Col>
              <Col>
                <Form.Control
                  name="isidisposisi"
                  placeholder="Isi Disposisi"
                  onChange={this.setValue}
                />
              </Col>
              <Col>
                <Form.Control
                  name="catatan"
                  placeholder="Catatan"
                  onChange={this.setValue}
                />
              </Col>
              <Col>
                <Form.Control
                  name="tgl_dispo"
                  placeholder="Tanggal Disposisi"
                  type="date"
                  onChange={this.setValue}
                />
              </Col>
              <Button onClick={this.saveData} variant="primary" type="button">
                Simpan
              </Button>
            </Form>
          </Row>
          <Row style={{ paddingTop: "10px" }}>
            <Col>
              <Alert variant="success">
                Dari Nomor Agenda <b> {this.props.data.noagenda}</b>, Nomor
                Surat <b>{this.props.data.nosurat}</b> perihal{" "}
                <b> {this.props.data.isi} </b>
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ paddingBottom: 10 }}>
                <Button type="button" onClick={this.toggleMenu}>
                  {" "}
                  Add Disposisi
                </Button>
              </div>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th scope="col">
                      No
                    </th>
                    <th scope="col">Tujuan Disposisi</th>
                    <th scope="col">Isi Disposisi</th>
                    <th scope="col">Tanggal Disposisi</th>
                  </tr>
                </thead>
                <tbody>{posts}</tbody>
              </Table>
            </Col>
          </Row>
        </>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
    loginHandler: (token) =>
      dispatch({
        type: "LOGIN_OK",
        payload: token,
      }),
    dispoHandler: (data) =>
      dispatch({
        type: "GETALL",
        data: data,
      }),
  
  });
const mapStateToProps = (state) => ({
  data: state.dataRedux.data,
  token:state.loginRedux.token
});
export default connect(mapStateToProps, mapDispatchToProps)(Disposisi);
