import React, { Component } from 'react';
import "../login/login.css"


class Eparkir2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cekin : "",
            currentCount:0,
            intervalId : 0,
            harga :0
        }
    }

    componentDidMount=() => {
        var intervalId = setInterval(this.timer, 1000);
        // store intervalId in the state so it can be accessed later:
        if (this.props.hasil ==="2") {
            this.setState({
                intervalId: intervalId,
                cekin : "2000"
            });
        }else{
            this.setState({
                intervalId: intervalId,
                cekin : "4000"
            });
        }
    }

    componentWillUnmount=()=> {
        clearInterval(this.state.intervalId);
    }
    timer=()=>{

        this.setState({ currentCount: this.state.currentCount +1 });
        if(this.state.currentCount >=5 && this.state.cekin ===2 ){
            this.setState({
                harga : this.state.currentCount*1000
            })
            
        }else{
            this.setState({
                harga : this.state.currentCount*2000
            })
        }

    }
    cekout=()=>{
        const {cekin, currentCount, harga} =  this.state
        const newData = {
            cekin, currentCount, harga
        }
        this.props.cekout(newData)
    }
    
    render() {
        return (
            <>
                <div className="login-containter">
                    <h1> HARGA PARKIR RODA {this.props.hasil} @ {this.state.cekin} | {this.state.harga}</h1>
                    <button onClick={this.cekout}>Cek Out</button>
                </div>
            </>
        );
    }
}

export default Eparkir2;
