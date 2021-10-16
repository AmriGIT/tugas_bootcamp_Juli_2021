import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Home, LoginMaster, Product } from "../pages";
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
      isLogin: false,
      username :null,
      password : null
    };
  }
  statusLogin = (status) => {
    this.setState({
      isLogin: status,
    });
  };
  addButton = (newUser) => {
    const newData = this.state.data;
    newData.push(newUser);
    this.setState({
      data: newData,
    });
    // this.props.goToPage("contact");

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
    // componentDidMount =()=>{
    // }
    
    componentDidMount() {
      this.setState({
        isLogin : this.props.sts2
      })
      // fetch API terus update state
    // const url = "http://localhost:8080/api/authenticate"
    // var headers = {}
    // fetch(url,{
    //     method : "POST",
    //     body : JSON.stringify(this.state.username, this.state.password),
    //     headers: headers
    // }).then((respone) =>{
    //     respone.json().then((result)=>{
    //         console.warn("result", result);
    //         localStorage.setItem('login', JSON.stringify({
    //             login : true,
    //             token: result.token
    //         }))
    //     })
    // })
    const datauser = [
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
    ];
    this.setState({
      data: datauser,
    });
  }
  // updateLogin = () => this.setState({ isLogin: this.props.sts2 });
  render() {
    
      console.log(this.state.data)
    console.log("Conten",this.props.statusLogin2);
    return (
      <Switch>
        <Route path="/" exact component={Home} />
          <Route
          path="/login-master"
          children={(props) => (
            <LoginMaster
              {...props}
              users={this.state.data}
              statuslog={this.statusLogin}
            />
          )}
        />
                  <Route
          path="/product"
          children={(props) => (
            <Product
              {...props}
              users={this.state.data}
              statuslog={this.statusLogin}
            />
          )}
        />
        <Route children={() => <h1> Page Not Found</h1>} />
      </Switch>
    );
  }
}
const mapStateToProps = (state) => ({
  statusLogin2: state.statusLogin,
});
export default connect(mapStateToProps) (Content);
