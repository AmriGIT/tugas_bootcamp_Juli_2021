// import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { Col, Form, Row, Table, Button, FloatingLabel } from "react-bootstrap";
import { connect } from "react-redux";
import { decodeToken } from "react-jwt";
import axios from "axios";
import Moment from "moment";
import Skeleton from "react-loading-skeleton";
class SuratKeluar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderData: [],
      dataupdate: [],
      isLoading: true,
      id:"",
      noagenda: "",
      nosurat: "",
      isisurat: "",
      tanggal: "",
      edit: false,

    };
  }
  cekValue = () => {
    const { statusLogin, token } = this.props;
    console.log(statusLogin);
    const decodetoken = decodeToken(token);
    console.log("username", decodetoken.sub ?? "");
  };

  renderList = () => {
    const listdata = this.props.data.map((datas, idx) => {
      console.log("datasss ", datas);
      return (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{datas.name}</td>
          <td>{datas.address}</td>
          <td>
            <Button variant="primary" type="button">
              Update
            </Button>
          </td>
          <td>
            <Button>Delete</Button>
          </td>
        </tr>
      );
    });
    return listdata;
  };

  getData = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:8080/api/getkeluar", {
        headers: {
          Authorization: "Bearer " + token,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Credentials": "true",
        },
      });
      console.log(res.data);
      this.props.loginHandler(token);
      this.setState({
        renderData: res.data,
        isLoading: false,
      });
      console.log(localStorage.getItem("login"));
    } catch (err) {
      this.props.history.push("/");
    }
  };
  componentDidMount() {
    setTimeout(this.getData, 3000);
  }
  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  formReset = () => {
    this.setState({
      noagenda: "",
      nosurat: "",
      isisurat: "",
      tanggal: "",
      id:""
    });
  };
  saveData = async () => {
    const token = localStorage.getItem("token");
    const { id, noagenda, nosurat, isisurat, tanggal } = this.state;
    const newTodo = {
      id,
      noagenda,
      nosurat,
      isi: this.state.isisurat,
      tanggal,
      keterangan: "telah diproses",
    };
    console.log(this.state.edit);
    if (!this.state.edit) {
      try {
        if (
          noagenda !== "" &&
          nosurat !== "" &&
          isisurat !== "" &&
          tanggal !== ""
        ) {
          const res = await axios.post(
            "http://localhost:8080/api/keluar/",
            newTodo,
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }
          );
          console.log(res.config.data);
          this.props.history.push("/suratkeluar");
          // this.props.addMasuk(res.config.data);
          this.formReset();
          this.getData();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("new todo", newTodo);
      const res = await axios.put(
        "http://localhost:8080/api/keluar/",
        newTodo,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      this.formReset();
      this.getData();
    }
  };

  getDataId = async (e) => {
    console.log(e.target.value);
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8080/api/keluar/${e.target.value}`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const tanggal = Moment(res.data.tanggal)
          .format("YYYY-MM-DD")
          .toString();
        this.setState({
          id : res.data.id,
          dataupdate: res.data,
          noagenda: res.data.noagenda,
          nosurat: res.data.nosurat,
          isisurat: res.data.isi,
          tanggal: tanggal,
          edit: true,
        });
        console.log(tanggal);
      });
  };
  deleteDataId = async (e) => {
    console.log(e.target.value);
    const res = await axios.delete(
      `http://localhost:8080/api/keluar/${e.target.value}`,
      {
        headers: {
          Authorization: "Bearer " + this.props.token,
          "Content-Type": "application/json",
        },
      }
    );
    this.getData();
  };
  render() {
    if (this.state.isLoading) {
      return (
        <>
          <Row style={{ paddingTop: "10px" }}>
            <Col>
              <Table striped bordered hover variant="white">
                <thead>
                  <tr>
                    <th scope="col" onClick={this.cekValue}>
                      No
                    </th>
                    <th scope="col">No Agenda</th>
                    <th scope="col">No Surat</th>
                    <th scope="col">Isi Surat</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Skeleton height={70} />
                    </td>
                    <td>
                      <Skeleton height={70} />
                    </td>
                    <td>
                      <Skeleton height={70} />
                    </td>
                    <td>
                      <Skeleton height={70} />
                    </td>
                    <td>
                      <Skeleton height={70} />
                    </td>
                    <td>
                      <Skeleton height={70} />
                    </td>
                    <td>
                      <Skeleton height={70} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      );
    }
    const posts = this.state.renderData.map((post, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{post.noagenda}</td>
        <td>{post.nosurat}</td>
        <td>{post.isi}</td>
        <td>{Moment(post.tanggal).format("DD-MM-YYYY")}</td>
        <td>
          <Button
            variant="primary"
            type="button"
            value={post.id}
            onClick={this.getDataId}
          >
            Update
          </Button>
        </td>
        <td>
          <Button
            variant="primary"
            type="button"
            value={post.id}
            onClick={this.deleteDataId}
          >
            Delete
          </Button>
        </td>
      </tr>
    ));
    return (
      <Row style={{ paddingTop: "10px" }}>
        <Form>
          <Col>
            <Form.Control
              name="id"
              onChange={this.setValue}
              placeholder="id"
              value={this.state.id}
              hidden="hidden"
            />
          </Col>
          <Col>
            <Form.Control
              name="noagenda"
              onChange={this.setValue}
              placeholder="No Agenda"
              value={this.state.noagenda}
            />
          </Col>
          <Col>
            <Form.Control
              name="nosurat"
              onChange={this.setValue}
              placeholder="No Surat"
              value={this.state.nosurat}
            />
          </Col>
          <Col>
            <Form.Control
              name="isisurat"
              onChange={this.setValue}
              placeholder="Isi Surat"
              value={this.state.isisurat}
            />
          </Col>
          <Col>
            <Form.Control
              name="tanggal"
              type="date"
              onChange={this.setValue}
              placeholder="Tanggal"
              value={this.state.tanggal}
            />
          </Col>
          <Button onClick={this.saveData} variant="primary" type="button">
            {this.state.edit?(
              "Update"
            ):(
              "Simpan"
            )}
          </Button>
        </Form>
        <div style={{ padding: 20 }}></div>
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th scope="col" onClick={this.cekValue}>
                  No
                </th>
                <th scope="col">No Agenda</th>
                <th scope="col">No Surat</th>
                <th scope="col">Isi Surat</th>
                <th scope="col">Tanggal</th>
                <th scope="col" colSpan="2" style={{ textAlign: "center" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{posts}</tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.statusLogin,
  token: state.loginRedux.token,
  data: state.dataRedux.data,
});

const mapDispatchToProps = (dispatch) => ({
  loginHandler: (token) =>
    dispatch({
      type: "LOGIN_OK",
      payload: token,
    }),
  dataHandler: (data) =>
    dispatch({
      type: "GETALL",
      data: data,
    })
});
export default connect(mapStateToProps, mapDispatchToProps)(SuratKeluar);


