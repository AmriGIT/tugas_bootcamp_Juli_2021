import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carouselimg } from '../../components';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}> 
                <h1>{this.props.valueRedux}</h1>
                <Carouselimg/>
                <div>
                    <div>{this.state.username1}</div>
                    <div>{this.state.password}</div>
                    <button onClick={this.changeButton}>5</button>
                    <span>{this.state.counter}</span>
                    <button onClick={this.plusOneButton}>+1</button>
                </div>
                <div>
                    <div>
                        <span>Username</span>
                        <input type="text" name="username1" onChange={this.updateUsername} />
                    </div>
                    <div>
                        <span>Password</span>
                        <input type="password" name="password" onChange={this.updateUsername} />
                    </div>
                </div>
            </div >
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