import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Contact, Login } from "../pages";
// import Eparkir2 from '../pages/eparkir2';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedUser: -1,
      cekin: "",
      harga: 0,
      currentCount: 0,
      data2: [],
    };
  }

  addButton = (newUser) => {
    const newData = this.state.data;
    newData.push(newUser);
    this.setState({
      data: newData,
    });
    this.props.goToPage("contact");
  };

  editButton = (newUser) => {
    // data unique => findIndex
    const { selectedUser, data: oldData } = this.state;

    oldData.splice(selectedUser, 1, newUser);
    this.setState({
      data: oldData,
      selectedUser: -1,
    });
    this.props.goToPage("contact");
  };

  updateSelectedUser = (idx) => {
    this.setState({
      selectedUser: idx,
    });
    this.props.goToPage("login");
  };
  halamaneparkir = (e) => {
    this.props.goToPage("cls");
    this.setState({
      cekin: e,
    });
  };
  cekout = (newParkir) => {
    console.log(newParkir);
    this.setState(
      {
        harga: newParkir.harga,
        currentCount: newParkir.currentCount,
      },
      this.result
    );
    this.props.goToPage("eparkir");
    return newParkir;
  };
  result = () => {
    const { harga, currentCount, cekin } = this.state;
    const data2 = [harga, currentCount, cekin];
    this.setState({
      data2: data2,
    });
    console.log(data2);
  };

  componentDidMount() {
    // fetch API terus update state
    this.setState({
      data: [
        {
          username: "Admin",
          password: "1234",
          address: "Jakarta",
        },
        {
          username: "User",
          password: "1234",
          address: "Bogor",
        },
        {
          username: "Operator",
          password: "1234",
          address: "Depok",
        },
      ],
    });
  }

  render() {
    // const harga = this.state.harga
    // console.log(harga)
    // const dataEdit = this.state.selectedUser >= 0 ? this.state.data[this.state.selectedUser] : {}
    // const result = this.state.harga >=0 ? this.state.data2 : [this.state.harga]
    // if (this.props.menu === "login")
    //     return <Login addData={this.addButton} editData={this.editButton} editUser={dataEdit} />

    // if (this.props.menu === "contact")
    //     // const dataEdit = this.state.selectedUser >= 0 ? this.state.data[this.state.selectedUser] : {}
    //     return <Contact users={this.state.data} setUser={this.updateSelectedUser} />
    // if (this.props.menu === "eparkir")
    //     return <Eparkir halaman={this.halamaneparkir} result={result}></Eparkir>
    // if (this.props.menu === "cls")
    //     return <Eparkir2 cekin={this.state.cekin} cekout={this.cekout}></Eparkir2>
    //     return <Home />
    const dataEdit =
      this.state.selectedUser >= 0
        ? this.state.data[this.state.selectedUser]
        : {};
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact">
          <Contact users={this.state.data} setUser={this.updateSelectedUser} />
        </Route>
        <Route
          path="/login"
          children={(props) => (
            <Login
              {...props}
              addData={this.addButton}
              editData={this.editButton}
              editUser={dataEdit}
            />
          )}
        />
      </Switch>
    );
  }
}

export default Content;
