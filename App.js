import React, {Component} from 'react';
import {Login} from './Screens';
import Admin from './Screens/Admin';
import Home from './Screens/Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusLogin: false,
      propsUser : [],
      usernames : ""
    };
  }
  
  componentDidMount() {
    this.setState({loading: true});
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(propsUser => this.setState({propsUser: [...propsUser, ...propsUser]}))
      .finally(() => this.setState({loading: false}));
  }
  statuslog=(status, nama)=>{
    this.setState({
      statusLogin: status,
      usernames : nama
    })
  }
  render() {
    console.log(this.state.statusLogin)
    if(this.state.statusLogin){
     return <Home
     username = {this.state.usernames}
     />
    }else{
      return<Login 
      status = {this.statuslog}
      userList = {this.state.propsUser}
      />
    }
  }
}

export default App;
