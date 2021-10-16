import React, { Component } from "react";
// import Header from './template/Header';
// import Navbar from './template/Navbar';
// import Content from './template/Content';
import { Header, Navbar, Content } from "./template";
// import "./App.css"
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "home",
      setStatus: false,
    };
  }

  render() {
    console.log("AppJS", this.state.setStatus);
    return (
      <Router>
        <Container>
          <Header />
          <Navbar sts2={this.state.setStatus} />
          <Content
            menu={this.state.menu}
            // sts={this.changeStatus}
            sts2={this.state.setStatus}
          />
        </Container>
      </Router>
    );
  }
}

export default App;
