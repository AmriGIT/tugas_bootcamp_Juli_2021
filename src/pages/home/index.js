import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
                <h1>SELAMAT DATANG</h1>
        );
    }
}

const mapStateToProps = state =>{
    console.log("state ", state)
    return{
        username : state
    }
}
export default connect(mapStateToProps)(Home);