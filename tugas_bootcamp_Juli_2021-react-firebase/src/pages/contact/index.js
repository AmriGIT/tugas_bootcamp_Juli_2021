import React, { Component } from "react";
// import { Redirect } from "react-router";
import { RowInput } from "../../components";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: false,
      search: "",
      datacari:{}
    };
    this.idInterval = 0;
  }

  deleteUser = (userx) => {
    const index = userx;
    const newList = this.props.users;
    const hasil = newList.splice(index, 1);
    this.setState({
      data: [hasil],
    });
    console.log(this.state.data);
  };
  setDeleteUser = (hasil) => {
  };
  setvalue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  searchUser = () => {
    const data = this.props.users;
    const a = data.find((ob) => ob.username === this.state.search);
    const ab = a?a : 0
    this.setState({
        data : [ab],
        status : true
    })
    
  };

  renderList = () => {
    
    console.log(this.state.data)
        const list = this.props.users.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
                <td>
                  <button onClick={() => this.props.setUser(idx)}>Update</button>
                </td>
                <td>
                  <button onClick={() => this.deleteUser(idx)}>Delete</button>
                </td>
              </tr>
            );
          });
      
          return list;
    // }
  };

  componentDidMount() {
    this.idInterval = setInterval(() => {
      console.log("ini interval");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }

  render() {
    return (
        
      <>
        <div>
          <label>{this.state.search}</label>
          <button onClick={this.searchUser}>submit</button>
          <RowInput
            label="search"
            type="text"
            name="search"
            change={this.setvalue}
            valueState={this.state.search}
          />
          <table width="400px" border="1px" cellPadding="10px">
            <thead>
              <tr>
                <th>No</th>
                <th>Username</th>
                <th>Address</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Contact;
