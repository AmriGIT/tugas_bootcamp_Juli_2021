import React, { Component } from "react";
import {
  Alert,
  Col,
  Row,
  Table,
  Button,
  Form,
  Container,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Moment from "moment";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class Disposisi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderData: [],
      menu: false,
      catatan: "",
      isidisposisi: "",
      tgl_dispo: "",
      tujuan: "",
      suratmasuk: "",
      id: "",
      displaycetak:false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu, displaycetak: !this.state.displaycetak });
  }
  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  getDispo = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        "http://localhost:8080/api/masuk/" + this.props.data.codesurat,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("iki dispo ", res.data);
      this.props.loginHandler(token);
      this.setState({
        renderData: res.data.disposisi,
      });
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    setTimeout(this.getDispo, 3000);
  }
  clearForm=()=>{
    this.setState({
      menu: false,
      catatan: "",
      isidisposisi: "",
      tgl_dispo: "",
      tujuan: "",
      suratmasuk: "",
      id: "",
      displaycetak:false
    })
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
    console.log("new todos", newTodo);
    try {
      if (
        catatan !== "" &&
        isidisposisi !== "" &&
        tgl_dispo !== "" &&
        tujuan !== ""
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
        console.log("data ", this.props.data);
        this.getDispo();
      }
    } catch (err) {
      console.log(err);
    }
  };
  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 10, 10);
      // pdf.output('dataurlnewwindow');
      pdf.save("SuratMasuk.pdf");
    });
  }
  render() {
    console.log("setrender", this.state.renderData);
    const show = this.state.menu ? "" : "none";

    if (this.props.data.length === 0) {
      alert("Dispoisi Surat Masuk Belum Dipilih");
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
          <div></div>
          <Row style={{ paddingTop: "10" }}>
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
              <Button onClick={this.clearForm} variant="primary"> Cancel</Button>
            </Form>
          </Row>
          <Container id="divToPrint" style={{paddingTop:10, display:this.state.displaycetak?"none":""}}>
            <Alert variant="success">
              <Row
                style={{
                  paddingTop: "10px",
                  maxWidth: "500",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              </Row>
              <Row >
                <Col>
                  Madrasah Aliyah Negeri Sukoharjo Telah Menerima Surat dari
                  sebagai berikut :
                </Col>
              </Row>
              <Row>
                <Col sm={3}>Nomor Surat</Col>
                <Col sm={1}>:</Col>
                <Col sm={6}>
                  <b>{this.props.data.nosurat}</b>
                </Col>
              </Row>
              <Row>
                <Col sm={3}>Asal Surat</Col>
                <Col sm={1}>:</Col>
                <Col sm={6}>
                  {" "}
                  <b>{this.props.data.asalsurat}</b>
                </Col>
              </Row>
              <Row>
                <Col sm={3}>Isi Surat</Col>
                <Col sm={1}>:</Col>
                <Col sm={6}>
                  {" "}
                  <b>{this.props.data.isi}</b>
                </Col>
              </Row>
              <Row>
                <Col sm={3}>Tracking Code Surat</Col>
                <Col sm={1}>:</Col>
                <Col sm={6}>
                  {" "}
                  <b>{this.props.data.codesurat}</b>
                </Col>
              </Row>
              <Row>
                <Col>
                  Silahkan Mengunduh Aplikasi <b>E-Tracking-Surat</b> di
                  PlayStore Agar dapat memonitoring surat yang telah diterima
                  oleh pihak instansi
                </Col>
              </Row>
              <Row>
                <Col  sm={5}></Col>
                <Col  sm={4}>Sukoharjo  {Moment(new Date()).format("DD-MM-YYYY")}</Col>
              </Row>
              <Row>
                <Col  sm={5}></Col>
                <Col  sm={4}>Penerima Surat</Col>
              </Row>
              <Row style={{marginTop:30}}>
                <Col  sm={5}></Col>
                <Col  sm={4}>{this.props.data.user}</Col>
              </Row>
            </Alert>
          </Container>

              <Row style={{paddingBottom:10, paddingTop:10}}>
                <Col sm={3}>
                <Button type="button" onClick={this.toggleMenu}>
                  {" "}
                  Add Disposisi
                </Button>
                </Col>
                <Col sm={3}>
              <Button type="button" onClick={this.printDocument}>
                  {" "}
                  Download
                </Button>
                </Col>
              </Row>
          <Row>
              <Col>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th scope="col">No</th>
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
  token: state.loginRedux.token,
});
export default connect(mapStateToProps, mapDispatchToProps)(Disposisi);
