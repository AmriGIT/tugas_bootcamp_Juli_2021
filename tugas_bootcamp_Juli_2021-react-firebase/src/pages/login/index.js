import React, { Component } from "react";
import { connect } from "react-redux";
import { RowInput } from "../../components";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      address: "",
      isLogin: false,
      isUpdate: false,
    };
  }

  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  loginButton = () => {
    const { username, password } = this.state;
    const result = this.props.allUser.find((obj) => obj.username === username);
    if (result != null) {
      if (username === result.username && password === result.password) {
        // Bagaimana caranya me-reset value input ketika login success
        this.setState({ isLogin: true });
        this.resetForm();
        this.props.history.push("/contact");
      } else alert("Invalid username or password!!");
    } else {
      alert("Username Invalid");
    }
    // const { username, password } = this.state
    // if (username === "admin" && password === "1234") { // Bagaimana caranya me-reset value input ketika login success
    //     this.props.history.push("/contact")
    //     // this.setState({ isLogin: true })
    //     this.props.doLogin(true)
    //     this.resetForm()
    // } else alert("Invalid username or password!!")
  };

  registerButton = () => {
    const { username, password } = this.state;
    const newUser = this.props.loginHandler(username, password);
    this.props.addData(newUser);
    console.log("User  ", newUser);
  };

  updateButton = () => {
    const { username, password, address } = this.state;
    const newUser = {
      username,
      password,
      address,
    };
    this.props.editData(newUser);
  };

  componentDidMount() {
    console.log(this.props.editUser);
    const { username, password, address } = this.props.editUser;
    if (username && password && address) {
      this.setState({
        username,
        password,
        address,
        isUpdate: true,
      });
    }
  }

  render() {
    return (
      <div className="login-containter">
        <fieldset>
          <legend>Value</legend>
          <h1>Username: {this.state.username}</h1>
          <h1>Password: {this.state.password}</h1>
          <h1>Status Login: {this.state.isLogin.toString()}</h1>
        </fieldset>
        <div className="login-containter">
          <RowInput
            label="Username"
            type="text"
            name="username"
            change={this.setValue}
            valueState={this.state.username}
          />
          <RowInput
            label="Password"
            type="password"
            name="password"
            change={this.setValue}
            valueState={this.state.password}
          />
          <RowInput
            label="Address"
            type="text"
            name="address"
            change={this.setValue}
            valueState={this.state.address}
          />
          <div className="row-button">
            <button onClick={this.loginButton}>Log In</button>
            {
              this.state.isUpdate ? (
                <button onClick={this.updateButton}>Update</button>
              ) : (
                <button onClick={this.registerButton}>Register</button>
              )
              // <button onClick={this.props.loginHandler}>Register</button>
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  statusLogin: state.statusLogin,
});

const mapDispatchToProps = (dispatch) => ({
  loginHandler: (username, address) =>
    dispatch({
      type: "LOGIN_OK",
      username: username,
      address: address,
    }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
