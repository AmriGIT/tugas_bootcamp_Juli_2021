import React, { Component } from 'react'
// import Header from './template/Header';
// import Navbar from './template/Navbar';
// import Content from './template/Content';
import "./App.css"
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './template';
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
      <>
      <Container>
       
        <Content/>
        {/* <Header />
        <Navbar1 goToPage={this.changePage} />
        <Content menu={this.state.menu} goToPage={this.changePage} /> */}
      </Container>
      </>
    );
  }
}

export default App