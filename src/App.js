import React, { Component } from 'react'
// import Header from './template/Header';
// import Navbar from './template/Navbar';
// import Content from './template/Content';
import { Header, Navbar, Content } from "./template"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "home"
    }
  }

  changePage = page => {
    this.setState({
      menu: page
    })
    // console.log(page);
  }

  render() {
    return (
      // <>
      //   <Header />
      //   <Navbar goToPage={this.changePage} />
      //   <Content menu={this.state.menu} goToPage={this.changePage} />
      // </>
      <Router>
        <Header />
        <Navbar goToPage ={this.changePage} />
        <Content
          menu = {this.state.menu}
          goToPage = {this.changePage}
        />
      </Router>
    );
  }
}

export default App