// import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { Col, Form, Row, Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
// import { decodeToken } from "react-jwt";
import axios from "axios";
import Moment from "moment";
import Skeleton from "react-loading-skeleton";
class SuratMasuk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderData: [],
      dataupdate: [],
      isLoading: true,
      id: "",
      noagenda: "",
      nosurat: "",
      isisurat: "",
      tgl_terima: "",
      edit: false,
      asalsurat: "",
      user: "",
      idUser:"",
      codesurat:""
    };
  }
  getData = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:8080/api/getmasuk", {
        headers: {
          Authorization: "Bearer " + token,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Credentials": "true",
        },
      });
      console.log("iki" , res.data);
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
      tgl_terima: "",
      asalsurat :"",
      user:"",
      idUser:"",
      id: "",
      edit:false
    });
  };
  saveData = async () => {
    const token = localStorage.getItem("token");
    const rand = Math.floor(100000+Math.random()*900000)+Moment(this.state.tgl_terima).format("YYYMMDD");
    const {id, asalsurat, noagenda, nosurat, isisurat, tgl_terima } = this.state;
    const newTodo = {
        id,
      noagenda,
      nosurat,
      asalsurat,
      isi: this.state.isisurat,
      tgl_terima,
      codesurat : rand.toString()
    };
    console.log(this.state.edit);
    if (!this.state.edit) {
      try {
        if (
          noagenda !== "" &&
          nosurat !== "" &&
          isisurat !== "" &&
          tgl_terima !== ""
        ) {
          const res = await axios.post(
            "http://localhost:8080/api/masuk/",
            newTodo,
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }
          );
          console.log(res.config.data);
          this.props.history.push("/suratmasuk");
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
        "http://localhost:8080/api/masuk",
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
  getIdforDispo = async (e) => {
    console.log(e.target.value);
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8080/api/masuk/id/${e.target.value}`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const tgl_terima = Moment(res.data.tgl_terima)
          .format("YYYY-MM-DD")
          .toString();
        console.log(tgl_terima);
        this.props.dispoHandler(res.data)
        this.props.history.push("/disposisi")
      });
  };
  getDataId = async (e) => {
    console.log(e.target.value);
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8080/api/masuk/id/${e.target.value}`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const tgl_terima = Moment(res.data.tgl_terima)
          .format("YYYY-MM-DD")
          .toString();
        this.setState({
          id: res.data.id,
          dataupdate: res.data,
          noagenda: res.data.noagenda,
          nosurat: res.data.nosurat,
          asalsurat: res.data.asalsurat,
          isisurat: res.data.isi,
          tgl_terima: tgl_terima,
          edit: true,
        });
        console.log(tgl_terima);
      });
  };
  deleteDataId = async (e) => {
    console.log(e.target.value);
    const res = await axios.delete(
      `http://localhost:8080/api/masuk/${e.target.value}`,
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
                    <th scope="col" colSpan="3" style={{ textAlign: "center" }}>
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
        <td>{Moment(post.tgl_terima).format("DD-MM-YYYY")}</td>
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
        <td>
        <Button
            variant="primary"
            type="button"
            value={post.id}
            onClick={this.getIdforDispo}
          >
           Disposisi
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
              name="asalsurat"
              onChange={this.setValue}
              placeholder="asalsurat"
              value={this.state.asalsurat}
            />
          </Col>
          <Col>
            <Form.Control
              name="tgl_terima"
              type="date"
              onChange={this.setValue}
              placeholder="Tanggal"
              value={this.state.tgl_terima}
            />
          </Col>
          <Button onClick={this.saveData} variant="primary" type="button">
            {this.state.edit ? "Update" : "Simpan"}
          </Button>
          <Button onClick={this.formReset} variant="primary" type="button">
           Cancel
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
                <th scope="col" colSpan="3" style={{ textAlign: "center" }}>
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
  dispoHandler: (data) =>
    dispatch({
      type: "GETALL",
      data: data,
    }),

});
export default connect(mapStateToProps, mapDispatchToProps)(SuratMasuk);
